// airticle-webhook.ts (Deno)
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { crypto } from "https://deno.land/std@0.168.0/crypto/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-api-key, x-signature",
  "Content-Type": "application/json",
};

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // remove chars especiais
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .replace(/^-|-$/g, "");
}

// Gera um slug único consultando a tabela 'articles'
async function ensureUniqueSlug(supabase: any, baseSlug: string) {
  let slug = baseSlug;
  let counter = 0;
  while (true) {
    const { data, error } = await supabase
      .from("articles")
      .select("id")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle();

    if (error) {
      // em caso de erro, quebramos para evitar loop infinito (retornamos base)
      console.error("Erro ao checar slug único:", error);
      return baseSlug;
    }
    if (!data) return slug; // slug disponível
    counter++;
    slug = `${baseSlug}-${counter}`;
  }
}

async function validateHmac(bodyText: string, secret: string | null, signatureHeader: string | null) {
  if (!secret) return true; // sem secret, não valida
  if (!signatureHeader) return false;
  // signature header esperado no formato hex HMAC-SHA256
  const key = new TextEncoder().encode(secret);
  const msg = new TextEncoder().encode(bodyText);
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, msg);
  const expected = Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
  // comparar em tempo-constante não implementado aqui; para Deno simples use === (melhor que nada)
  return expected === signatureHeader;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const AIRTICLE_API_KEY = Deno.env.get("AIRTICLE_API_KEY") || null; // opcional se quiser validar x-api-key
    const WEBHOOK_SECRET = Deno.env.get("AIRTICLE_WEBHOOK_SECRET") || null; // mesmo secret que você cadastrou na Airticles

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Supabase não configurado");
    }

    // opcional: validar cabeçalho de chave (se quiser)
    const apiKeyHeader = req.headers.get("x-api-key");
    if (AIRTICLE_API_KEY && apiKeyHeader && apiKeyHeader !== AIRTICLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }

    const bodyText = await req.text();
    // validar HMAC (se WEBHOOK_SECRET definido)
    const signature = req.headers.get("x-signature");
    const okHmac = await validateHmac(bodyText, WEBHOOK_SECRET, signature);
    if (!okHmac) {
      console.warn("HMAC inválido para payload:", bodyText.slice(0, 200));
      return new Response(JSON.stringify({ error: "Invalid signature" }), { status: 401, headers: corsHeaders });
    }

    const payload = JSON.parse(bodyText);
    // payload pode ser objeto de artigo
    console.log("Webhook payload recebido:", payload.event || "<sem event>");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // suporte tanto a article.created quanto article.published
    const articlePayload = payload; // aqui a Airticles envia o artigo diretamente

    const title = articlePayload.title ?? "Sem título";
    let slug = articlePayload.slug ?? generateSlug(title);
    slug = await ensureUniqueSlug(supabase, slug);

    const articleData = {
      external_id: String(articlePayload.id ?? null),
      title,
      slug,
      content: articlePayload.html ?? (articlePayload.content ? JSON.stringify(articlePayload.content) : ""),
      excerpt: articlePayload.excerpt ?? articlePayload.resumo ?? null,
      featured_image: articlePayload.featuredImage ?? articlePayload.featured_image ?? null,
      status: (articlePayload.status ?? "pendente"),
      author: articlePayload.author ?? null,
      category: articlePayload.category ?? articlePayload.categoria ?? null,
      tags: articlePayload.tags ?? [],
      meta_description: articlePayload.metaDescription ?? articlePayload.meta_description ?? null,
      published_at: articlePayload.publishedAt ?? articlePayload.published_at ?? null,
    };

    // Upsert por external_id (se existir), senão insert/update por slug
    if (articleData.external_id && articleData.external_id !== "null") {
      const { data, error } = await supabase
        .from("articles")
        .upsert(articleData, { onConflict: "external_id" })
        .select();

      if (error) {
        console.error("Erro upsert por external_id:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
      }
      console.log("Upsert realizado (external_id):", articleData.title);
      return new Response(JSON.stringify({ ok: true, action: "upsert", title: articleData.title }), { headers: corsHeaders });
    }

    // fallback: tentar por slug
    const { data: existing } = await supabase.from("articles").select("id").eq("slug", slug).maybeSingle();
    if (existing && existing.id) {
      const { error } = await supabase.from("articles").update(articleData).eq("slug", slug);
      if (error) {
        console.error("Erro ao atualizar por slug:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
      }
      console.log("Atualizado por slug:", slug);
      return new Response(JSON.stringify({ ok: true, action: "update", slug }), { headers: corsHeaders });
    } else {
      const { error } = await supabase.from("articles").insert(articleData);
      if (error) {
        console.error("Erro ao inserir novo artigo:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
      }
      console.log("Inserido novo artigo:", articleData.title);
      return new Response(JSON.stringify({ ok: true, action: "insert", title: articleData.title }), { headers: corsHeaders });
    }
  } catch (err) {
    console.error("Erro no webhook:", err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: corsHeaders });
  }
});
