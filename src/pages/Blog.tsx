import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar } from "lucide-react";
import PageTransition from "../components/PageTransition";

const Blog = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
