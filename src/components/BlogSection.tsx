import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";
import { Link } from "react-router-dom";

const BlogSection = () => {
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
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-purple-brand transition-colors">
                Blog em Desenvolvimento
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

        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/blog">
              Acessar Blog
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
