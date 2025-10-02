import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { InovaaButton } from "../components/ui/inovaa-button";
import { fetchArticleBySlug, Article } from "../lib/airticles";
import PageTransition from "../components/PageTransition";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const data = await fetchArticleBySlug(slug);
        setArticle(data);
      } catch (error) {
        console.error("Erro ao carregar artigo:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />
        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você procura não existe ou foi removido.
            </p>
            <InovaaButton asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Blog
              </Link>
            </InovaaButton>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />
        
        <article className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-purple-brand hover:text-purple-brand-dark transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para o Blog
              </Link>
            </div>

            {/* Header do Artigo */}
            <header className="mb-12 space-y-6">
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className="bg-gradient-secondary text-white">
                  {article.mainKeyword}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.createdAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 min de leitura</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {article.title}
              </h1>

              {article.secondaryKeywords && article.secondaryKeywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {article.secondaryKeywords.map((keyword, index) => (
                    <Badge key={index} variant="outline">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Conteúdo do Artigo */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-purple-brand prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-purple-brand
                prose-img:rounded-lg prose-img:shadow-lg
                prose-blockquote:border-l-purple-brand prose-blockquote:bg-purple-50/50 dark:prose-blockquote:bg-purple-950/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para criar sua loja virtual?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Transforme seu negócio com uma loja online profissional em até 20 dias.
              </p>
              <InovaaButton 
                variant="secondary" 
                size="lg"
                asChild
              >
                <Link to="/formulario-contato">
                  Quero minha Loja Online
                </Link>
              </InovaaButton>
            </div>
          </div>
        </article>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
