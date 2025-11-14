import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { InovaaButton } from "../components/ui/inovaa-button";

const BlogPost = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
        <Header />

        <main className="container mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Artigo não disponível
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            O blog está em desenvolvimento. Em breve teremos conteúdos exclusivos para você!
          </p>
          <InovaaButton asChild>
            <Link to="/blog">
              ← Voltar para o blog
            </Link>
          </InovaaButton>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
