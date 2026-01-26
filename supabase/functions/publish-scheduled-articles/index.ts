import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting scheduled articles publisher...");

    // Create Supabase client with service role key to bypass RLS
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get current timestamp
    const now = new Date().toISOString();
    console.log(`Checking for articles scheduled before: ${now}`);

    // Find all scheduled articles where published_at <= now
    const { data: scheduledArticles, error: fetchError } = await supabase
      .from("articles")
      .select("id, title, slug, published_at")
      .eq("status", "Agendado")
      .lte("published_at", now);

    if (fetchError) {
      console.error("Error fetching scheduled articles:", fetchError);
      throw fetchError;
    }

    if (!scheduledArticles || scheduledArticles.length === 0) {
      console.log("No scheduled articles to publish at this time.");
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "No scheduled articles to publish",
          published: 0 
        }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200 
        }
      );
    }

    console.log(`Found ${scheduledArticles.length} article(s) to publish.`);

    // Update each scheduled article to "Publicado"
    const articleIds = scheduledArticles.map((article) => article.id);

    const { error: updateError } = await supabase
      .from("articles")
      .update({ status: "Publicado" })
      .in("id", articleIds);

    if (updateError) {
      console.error("Error updating articles:", updateError);
      throw updateError;
    }

    // Log published articles
    for (const article of scheduledArticles) {
      console.log(`✓ Published: "${article.title}" (${article.slug})`);
    }

    console.log(`Successfully published ${scheduledArticles.length} article(s).`);

    return new Response(
      JSON.stringify({
        success: true,
        message: `Published ${scheduledArticles.length} article(s)`,
        published: scheduledArticles.length,
        articles: scheduledArticles.map((a) => ({ id: a.id, title: a.title, slug: a.slug })),
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );
  } catch (error) {
    console.error("Error in publish-scheduled-articles:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Internal server error" 
      }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});
