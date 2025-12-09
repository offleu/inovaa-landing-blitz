import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Loader2, Tag } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";

// Import local images for featured articles
import blackFridayImg from "@/assets/black-friday-ecommerce.jpg";
import ecommerceGrowthImg from "@/assets/ecommerce-growth-2025.jpg";
import lojaFisicaImg from "@/assets/loja-fisica-ecommerce-integracao.jpg";
import carrinhoInsightsImg from "@/assets/carrinho-insights-2025.jpg";
import lojaPropriaImg from "@/assets/loja-propria-vs-marketplaces.jpg";

interface DatabaseArticle {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  status: string | null;
  category: string | null;
  featured_image: string | null;
  created_at: string;
}

interface ApiArticle {
  id: number;
  title: string;
  slug: string;
  status: string;
  createdAt: string;
  mainKeyword: string;
  html: string;
}

interface AirticleResponse {
  projectId: number;
  count: number;
  items: ApiArticle[];
}

// Map slug patterns to local images
const getArticleImage = (slug: string, featuredImage: string | null): string | null => {
  const imageMap: Record<string, string> = {
    'black-friday': blackFridayImg,
    'ecommerce-growth': ecommerceGrowthImg,
    'ecommerce-sucesso': ecommerceGrowthImg,
    'loja-fisica': lojaFisicaImg,
    'carrinho': carrinhoInsightsImg,
    'marketplace': lojaPropriaImg,
    'loja-propria': lojaPropriaImg,
  };

  // Check if slug contains any of our keywords
  for (const [keyword, image] of Object.entries(imageMap)) {
    if (slug.toLowerCase().includes(keyword)) {
      return image;
    }
  }

  // Return featured_image if it's a valid path, otherwise null
  if (featuredImage && featuredImage.startsWith('/')) {
    return featuredImage;
  }

  return null;
};

const BlogSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [articles, setArticles] = useState<(DatabaseArticle | ApiArticle)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // First, try to fetch from database
        const { data: dbArticles, error: dbError } = await supabase
          .from('articles')
          .select('id, title, slug, content, excerpt, status, category, featured_image, created_at')
          .eq('status', 'Publicado')
          .order('created_at', { ascending: false })
          .limit(3);

        if (dbArticles && dbArticles.length > 0) {
          console.log('Loaded articles from database:', dbArticles.length);
          setArticles(dbArticles);
          setLoading(false);
          return;
        }

        // Fallback to API if database is empty
        console.log('Database empty, falling back to API');
        const { data, error } = await supabase.functions.invoke<AirticleResponse>('airticle-articles', {
          body: null,
        });

        if (error) {
          console.error('Error fetching articles:', error);
          return;
        }

        if (data?.items) {
          const publishedArticles = data.items
            .filter(article => article.status === 'Publicado')
            .slice(0, 3);
          setArticles(publishedArticles);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const extractExcerpt = (article: DatabaseArticle | ApiArticle, maxLength: number = 120) => {
    if ('excerpt' in article && article.excerpt) {
      return article.excerpt.length > maxLength ? article.excerpt.substring(0, maxLength) + '...' : article.excerpt;
    }
    if ('content' in article && article.content) {
      const text = article.content.replace(/<[^>]*>/g, '');
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
    if ('html' in article && article.html) {
      const text = article.html.replace(/<[^>]*>/g, '');
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
    return '';
  };

  const getArticleDate = (article: DatabaseArticle | ApiArticle) => {
    if ('created_at' in article) return article.created_at;
    if ('createdAt' in article) return article.createdAt;
    return new Date().toISOString();
  };

  const getArticleKeyword = (article: DatabaseArticle | ApiArticle) => {
    if ('category' in article && article.category) return article.category;
    if ('mainKeyword' in article && article.mainKeyword) return article.mainKeyword;
    return null;
  };

  const getImageForArticle = (article: DatabaseArticle | ApiArticle): string | null => {
    if ('featured_image' in article) {
      return getArticleImage(article.slug, article.featured_image);
    }
    return getArticleImage(article.slug, null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Notícias e{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Artigos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas tendências em e-commerce, design e marketing digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-purple-brand mb-3" />
              <p className="text-muted-foreground text-sm">Carregando artigos...</p>
            </div>
          ) : articles.length === 0 ? (
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                  Blog em Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Estamos preparando conteúdos exclusivos sobre e-commerce, marketing digital e gestão de lojas virtuais para você.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Em breve</span>
                </div>
              </CardContent>
            </Card>
          ) : (
            articles.map((article) => {
              const articleImage = getImageForArticle(article);
              return (
                <Link key={article.id} to={`/blog/${article.slug}`} state={{ article }}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full overflow-hidden">
                    {articleImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={articleImage} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                    <CardHeader className="space-y-4">
                      <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground line-clamp-3">
                        {extractExcerpt(article)}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(getArticleDate(article))}</span>
                      </div>
                      {getArticleKeyword(article) && (
                        <div className="flex items-center gap-2">
                          <Tag className="w-3 h-3 text-purple-brand" />
                          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-brand px-2 py-1 rounded-full">
                            {getArticleKeyword(article)}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          )}
        </div>

        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/blog">
              Acessar Blog
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;