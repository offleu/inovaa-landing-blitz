import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { InovaaButton } from "../components/ui/inovaa-button";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";

interface Article {
  title: string;
  slug: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch("/artigos/index.json");
        const data: Article[] = await response.json();
        const found = data.find(a => a.slug === slug) || null;
        setArticle(found);
      } catch (error) {
        console.error("Erro ao carregar artigo:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <p>Carregando artigo...</p>
        </div>
      </PageTransition>
    );
  }

  if (!article) {
    return (
      <PageTransition>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <InovaaButton asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Link>
          </InovaaButton>
        </div>
        <Footer />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />
        <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-purple-brand hover:text-purple-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

          {/* Conteúdo fictício do artigo */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Este é um artigo do blog. O conteúdo completo ainda não está disponível, mas você já pode ver o título e a estrutura do artigo.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Aqui você poderia colocar o conteúdo real do artigo, imagens, listas, etc., quando os dados estiverem disponíveis.
          </p>

          <InovaaButton variant="secondary" size="lg" asChild>
            <Link to="/formulario-contato">
              Quero minha Loja Online
            </Link>
          </InovaaButton>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
