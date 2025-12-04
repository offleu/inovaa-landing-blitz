import { useLocation, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { InovaaButton } from "../components/ui/inovaa-button";
import { Calendar, Tag, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from "dompurify";

interface Article {
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
  items: Article[];
}

const BlogPost = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(location.state?.article || null);
  const [loading, setLoading] = useState(!article);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (article) return;

      try {
        setLoading(true);
        const { data, error: fnError } = await supabase.functions.invoke<AirticleResponse>('airticle-articles', {
          body: null,
        });

        if (fnError || !data?.items) {
          setError(true);
          return;
        }

        const foundArticle = data.items.find(a => a.slug === slug);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug, article]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
          <Header />
          <main className="container mx-auto max-w-4xl px-4 py-20 flex flex-col items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin text-purple-brand mb-4" />
            <p className="text-muted-foreground">Carregando artigo...</p>
          </main>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  if (error || !article) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
          <Header />
          <main className="container mx-auto max-w-4xl px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Artigo não encontrado
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <InovaaButton asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o blog
              </Link>
            </InovaaButton>
          </main>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  const sanitizedHtml = DOMPurify.sanitize(article.html);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />

        <main className="container mx-auto max-w-4xl px-4 py-20">
          <Link to="/blog" className="inline-flex items-center text-purple-brand hover:text-purple-600 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o blog
          </Link>

          <article>
            <header className="mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(article.createdAt)}</span>
                </div>
              </div>

              {(article.mainKeyword || article.secondaryKeywords?.length > 0) && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-purple-brand" />
                  {article.mainKeyword && (
                    <span className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-brand px-3 py-1 rounded-full">
                      {article.mainKeyword}
                    </span>
                  )}
                  {article.secondaryKeywords?.map((keyword, index) => (
                    <span key={index} className="text-sm bg-gray-100 dark:bg-gray-800 text-muted-foreground px-3 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-purple-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:mb-2
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          </article>

          <div className="mt-16 pt-8 border-t border-border">
            <InovaaButton asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver mais artigos
              </Link>
            </InovaaButton>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
