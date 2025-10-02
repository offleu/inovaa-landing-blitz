import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchArticleBySlug, Article } from "../lib/airticles";
import PageTransition from "../components/PageTransition";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const loadArticle = async () => {
      try {
        const data = await fetchArticleBySlug(slug);
        setArticle(data);
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
    return <div className="text-center py-20">Carregando artigo...</div>;
  }

  if (!article) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
        <p>O artigo que você está tentando acessar não existe ou está indisponível.</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto max-w-4xl px-4 py-20">
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Publicado em {new Date(article.createdAt).toLocaleDateString("pt-BR")}
          </p>
          <div
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
