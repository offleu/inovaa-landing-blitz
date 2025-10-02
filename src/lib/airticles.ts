const AIRTICLES_API_URL = "https://api.airticles.ai/external/obter-post";
const AIRTICLES_API_KEY = "sx7dIJ9QKfgsBJ3wilSN20yHyFu1qpBBRpbRkMR_F8s";

export interface Article {
  id: number;
  title: string;
  slug: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  mainKeyword: string;
  secondaryKeywords: string[];
  html: string;
  content: any;
}

export interface ArticlesResponse {
  projectId: number;
  count: number;
  items: Article[];
}

export async function fetchArticles(limit: number = 10, since?: string): Promise<ArticlesResponse> {
  const params = new URLSearchParams();
  params.append("limit", limit.toString());
  if (since) {
    params.append("since", since);
  }

  const response = await fetch(`${AIRTICLES_API_URL}?${params.toString()}`, {
    method: "GET",
    headers: {
      "X-API-Key": AIRTICLES_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar artigos: ${response.statusText}`);
  }

  return response.json();
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const response = await fetchArticles(50);
  const article = response.items.find((item) => item.slug === slug);
  return article || null;
}
