import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { InovaaButton } from "../components/ui/inovaa-button";
import PageTransition from "../components/PageTransition";
import { fetchArticleBySlug, Article } from "../lib/airticles";

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

  if (loading) return <p>Carregando...</p>;
  if (!article) return (
    <div className="text-center py-20">
      <p>Artigo não encontrado.</p>
      <Link to="/blog">Voltar para o blog</Link>
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />
        <article className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-purple-brand mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para o Blog
            </Link>

            <Badge className="bg-gradient-secondary text-white">{article.mainKeyword}</Badge>
            <h1 className="text-4xl font-bold my-4">{article.title}</h1>

            <div className="flex items-center text-sm text-muted-foreground gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {new Date(article.createdAt).toLocaleDateString("pt-BR")}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 5 min de leitura
              </div>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />

            <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para criar sua loja virtual?</h2>
              <p className="text-lg mb-8 opacity-90">Transforme seu negócio com uma loja online profissional em até 20 dias.</p>
              <InovaaButton variant="secondary" size="lg" asChild>
                <Link to="/formulario-contato">Quero minha Loja Online</Link>
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
