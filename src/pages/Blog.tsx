import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, Loader2, Tag } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface DatabaseArticle {
  id: string;
  external_id: string | null;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  featured_image: string | null;
  status: string | null;
  author: string | null;
  category: string | null;
  tags: string[] | null;
  meta_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

interface ApiArticle {
  id: number;
  title: string;
  slug: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  mainKeyword: string;
  secondaryKeywords: string[];
  html: string;
}

interface AirticleResponse {
  projectId: number;
  count: number;
  items: ApiArticle[];
  error?: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<(DatabaseArticle | ApiArticle)[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        
        // First, try to fetch from database
        const { data: dbArticles, error: dbError } = await supabase
          .from('articles')
          .select('*')
          .eq('status', 'Publicado')
          .order('created_at', { ascending: false });

        if (dbArticles && dbArticles.length > 0) {
          console.log('Loaded articles from database:', dbArticles.length);
          setArticles(dbArticles);
          setLoading(false);
          return;
        }

        // Fallback to API if database is empty
        console.log('Database empty, falling back to API');
        const { data, error: fnError } = await supabase.functions.invoke<AirticleResponse>('airticle-articles', {
          body: null,
        });

        if (fnError) {
          console.error('Error fetching articles:', fnError);
          setError('Não foi possível carregar os artigos');
          return;
        }

        if (data?.items) {
          const publishedArticles = data.items.filter(article => article.status === 'Publicado');
          setArticles(publishedArticles);
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Erro ao conectar com a API');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const extractExcerpt = (article: DatabaseArticle | ApiArticle, maxLength: number = 150) => {
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

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />

        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Blog Inovaa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dicas, estratégias e insights sobre e-commerce, design e marketing digital para fazer seu negócio crescer.
            </p>
          </div>
        </section>

        <main className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-purple-brand mb-4" />
                <p className="text-muted-foreground">Carregando artigos...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">{error}</p>
              </div>
            ) : articles.length === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                      Novos Artigos em Breve
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
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link key={article.id} to={`/blog/${article.slug}`} state={{ article }}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-full">
                      <CardHeader className="space-y-4">
                        <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground line-clamp-3">
                          {extractExcerpt(article)}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{formatDate(getArticleDate(article))}</span>
                          </div>
                        </div>
                        {getArticleKeyword(article) && (
                          <div className="flex items-center gap-2 flex-wrap">
                            <Tag className="w-3 h-3 text-purple-brand" />
                            <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-brand px-2 py-1 rounded-full">
                              {getArticleKeyword(article)}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;