import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const AIRTICLE_API_KEY = Deno.env.get('AIRTICLE_API_KEY');
    
    if (!AIRTICLE_API_KEY) {
      console.error('AIRTICLE_API_KEY not configured');
      throw new Error('AIRTICLE_API_KEY is not configured');
    }

    const url = new URL(req.url);
    const limit = url.searchParams.get('limit') || '10';
    const since = url.searchParams.get('since') || '';

    let apiUrl = `https://api.airticles.ai/external/obter-post?limit=${limit}`;
    if (since) {
      apiUrl += `&since=${since}`;
    }

    console.log('Fetching articles from Airticle API:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-API-Key': AIRTICLE_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airticle API error:', response.status, errorText);
      throw new Error(`Airticle API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Successfully fetched', data.count, 'articles');

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error in airticle-articles function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage, items: [] }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
