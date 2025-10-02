import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { InovaaButton } from "../components/ui/inovaa-button";
import { fetchArticles, Article } from "../lib/airticles";
import PageTransition from "../components/PageTransition";

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(50);
        setArticles(data.items);
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
      
      {/* Hero Section do Blog */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Blog Inovaa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dicas, estratégias e insights sobre e-commerce, design e marketing digital para fazer seu negócio crescer.
            </p>
          </div>
        </div>
      </section>

      {/* Artigos do Blog */}
      <main className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-t-lg"></div>
                  <CardHeader className="space-y-4">
                    <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nenhum artigo disponível no momento.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                  <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{article.mainKeyword}</span>
                  </div>
                  
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-gradient-secondary text-white">
                        {article.mainKeyword}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        5 min
                      </span>
                    </div>
                    
                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base line-clamp-3">
                      {article.secondaryKeywords.join(", ")}
                    </CardDescription>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(article.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                    
                    <InovaaButton 
                      variant="outline" 
                      size="sm"
                      className="w-full group/btn"
                      asChild
                    >
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
          
          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
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
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;