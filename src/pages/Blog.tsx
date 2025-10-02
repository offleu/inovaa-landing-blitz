import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { InovaaButton } from "../components/ui/inovaa-button";
import { fetchArticles, ArticleIndex } from "../lib/airticles";
import PageTransition from "../components/PageTransition";

const Blog = () => {
  const [articles, setArticles] = useState<ArticleIndex[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(50);
        setArticles(data);
      } catch (error) {
        console.error("Erro ao carregar artigos:", error);
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
              <div className="text-center py-20">Carregando artigos...</div>
            ) : articles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">Nenhum artigo disponível no momento.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card
                    key={article.slug}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                  >
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-gradient-secondary text-white">
                          Blog
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 5 min
                        </span>
                      </div>

                      <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(article.createdAt).toLocaleDateString("pt-BR")}</span>
                      </div>

                      <InovaaButton variant="outline" size="sm" className="w-full group/btn" asChild>
                        <Link to={`/blog/${article.slug}`}>
                          Ler Artigo
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
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
