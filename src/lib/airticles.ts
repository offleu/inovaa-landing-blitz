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

    const text = await res.text();
    let data: ArticleIndex[] = [];

    try {
      data = JSON.parse(text);
      // filtra artigos com slug válido
      data = data.filter(article => article.slug && article.title);
    } catch (jsonError) {
      console.error("Erro ao parsear JSON de index.json:", jsonError);
      data = [];
    }

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
  if (!slug) return null;

  try {
    const res = await fetch(`/artigos/${slug}.json`);
    if (!res.ok) {
      console.warn(`Artigo com slug "${slug}" não encontrado.`);
      return null;
    }

    const text = await res.text();
    try {
      const data: Article = JSON.parse(text);
      // valida campos mínimos
      if (!data.slug || !data.title || !data.createdAt) return null;
      return data;
    } catch (jsonError) {
      console.error(`Erro ao parsear JSON do artigo "${slug}":`, jsonError);
      return null;
    }
  } catch (error) {
    console.error(`Erro ao buscar artigo pelo slug "${slug}":`, error);
    return null;
  }
}
