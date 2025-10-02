// lib/airticles.ts
export interface Article {
  id?: number;
  title: string;
  slug: string;
  status?: string;
  createdAt: string;
  updatedAt?: string;
  mainKeyword: string;
  secondaryKeywords: string[];
  html: string;
  content?: any;
}

export interface ArticleIndex {
  slug: string;
  title: string;
  createdAt: string;
}

/**
 * Busca todos os artigos para a listagem do Blog.
 * Usa o arquivo index.json gerado pelo script Node.
 */
export async function fetchArticles(limit: number = 50): Promise<ArticleIndex[]> {
  try {
    const res = await fetch("/artigos/index.json");
    if (!res.ok) throw new Error("Não foi possível carregar os artigos");
    const data: ArticleIndex[] = await res.json();
    return data.slice(0, limit);
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return [];
  }
}

/**
 * Busca um artigo específico pelo slug.
 * Cada artigo é armazenado como JSON individual em /public/artigos/
 */
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`/artigos/${slug}.json`);
    if (!res.ok) return null;
    const data: Article = await res.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar artigo pelo slug:", error);
    return null;
  }
}
