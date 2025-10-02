import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { InovaaButton } from "../components/ui/inovaa-button";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";

interface Article {
  title: string;
  slug: string | null;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await fetch("/artigos/index.json");
        const data: Article[] = await response.json();
        setArticles(data.filter(a => a.slug)); // filtra artigos sem slug
      } catch (error) {
        console.error("Erro ao carregar artigos:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />

        <section className="pt-20 pb-16 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Blog Inovaa
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dicas, estratégias e insights sobre e-commerce, design e marketing digital para fazer seu negócio crescer.
          </p>
        </section>

        <main className="pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            {loading ? (
              <p>Carregando artigos...</p>
            ) : articles.length === 0 ? (
              <p className="text-center text-xl text-muted-foreground">Nenhum artigo disponível.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <InovaaButton variant="outline" size="sm" asChild>
                        <Link to={`/blog/${article.slug}`}>
                          Ler Artigo <ArrowRight className="w-4 h-4" />
                        </Link>
                      </InovaaButton>
                    </CardContent>
                  </Card>
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
