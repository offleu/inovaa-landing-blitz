import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
};

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const AIRTICLE_API_KEY = Deno.env.get('AIRTICLE_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing Supabase configuration');
      throw new Error('Missing Supabase configuration');
    }

    // Validate API key from header (optional security layer)
    const apiKeyHeader = req.headers.get('x-api-key');
    if (AIRTICLE_API_KEY && apiKeyHeader && apiKeyHeader !== AIRTICLE_API_KEY) {
      console.error('Invalid API key');
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create Supabase client with service role key to bypass RLS
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const body = await req.json();
    console.log('Received webhook payload:', JSON.stringify(body));

    // Handle both single article and array of articles
    const articles = Array.isArray(body) ? body : [body];

    const results = [];

    for (const article of articles) {
      // Map Airticle fields to our database schema
      const articleData = {
        external_id: article.id || article._id || null,
        title: article.titulo || article.title || 'Sem título',
        slug: article.slug || generateSlug(article.titulo || article.title || 'artigo'),
        content: article.conteudo || article.content || '',
        excerpt: article.resumo || article.excerpt || article.descricao || '',
        featured_image: article.imagemDestacada || article.featured_image || article.image || null,
        status: article.status || 'pendente',
        author: article.autor || article.author || null,
        category: article.categoria || article.category || null,
        tags: article.tags || [],
        meta_description: article.metaDescricao || article.meta_description || article.resumo || '',
        published_at: article.dataPublicacao || article.published_at || null,
      };

      console.log('Processing article:', articleData.title);

      // Upsert article (insert or update if external_id exists)
      if (articleData.external_id) {
        const { data, error } = await supabase
          .from('articles')
          .upsert(articleData, { 
            onConflict: 'external_id',
            ignoreDuplicates: false 
          })
          .select();

        if (error) {
          console.error('Error upserting article:', error);
          results.push({ title: articleData.title, success: false, error: error.message });
        } else {
          console.log('Article upserted successfully:', articleData.title);
          results.push({ title: articleData.title, success: true, data });
        }
      } else {
        // If no external_id, try to match by slug or insert new
        const { data: existing } = await supabase
          .from('articles')
          .select('id')
          .eq('slug', articleData.slug)
          .single();

        if (existing) {
          // Update existing article
          const { data, error } = await supabase
            .from('articles')
            .update(articleData)
            .eq('slug', articleData.slug)
            .select();

          if (error) {
            console.error('Error updating article:', error);
            results.push({ title: articleData.title, success: false, error: error.message });
          } else {
            console.log('Article updated successfully:', articleData.title);
            results.push({ title: articleData.title, success: true, data });
          }
        } else {
          // Insert new article
          const { data, error } = await supabase
            .from('articles')
            .insert(articleData)
            .select();

          if (error) {
            console.error('Error inserting article:', error);
            results.push({ title: articleData.title, success: false, error: error.message });
          } else {
            console.log('Article inserted successfully:', articleData.title);
            results.push({ title: articleData.title, success: true, data });
          }
        }
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failCount = results.filter(r => !r.success).length;

    console.log(`Webhook processed: ${successCount} success, ${failCount} failed`);

    return new Response(JSON.stringify({ 
      message: `Processed ${articles.length} article(s)`,
      success: successCount,
      failed: failCount,
      results 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in airticle-webhook function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
