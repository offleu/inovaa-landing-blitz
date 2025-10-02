import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";
import { Link } from "react-router-dom";
import { fetchArticles, Article } from "../lib/airticles";

const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(3); // Apenas 3 artigos em destaque
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
    <section className="py-20 bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            [1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-t-lg"></div>
                <CardHeader className="space-y-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                </CardHeader>
              </Card>
            ))
          ) : (
            articles.map((article) => (
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
                    {article.secondaryKeywords.slice(0, 3).join(", ")}
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
            ))
          )}
        </div>

        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/blog">
              Acessar Blog Completo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;