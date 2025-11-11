import { Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { InovaaButton } from "@/components/ui/inovaa-button";

export default function Obrigado() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-purple-brand/5">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl w-full text-center animate-scale-in">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-8 shadow-button animate-pulse">
              <Check className="w-12 h-12 text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Obrigado!
            </h1>

            {/* Welcome Message */}
            <p className="text-xl text-muted-foreground mb-8">
              Seja muito bem-vindo(a) à <span className="text-purple-brand font-semibold">Inovaa Digital</span>!
            </p>

            {/* WhatsApp Card */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-8 shadow-card">
              <MessageCircle className="w-16 h-16 text-purple-brand mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Próximos Passos
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe entrará em contato com você via <span className="font-semibold text-foreground">WhatsApp</span> para orientar os próximos passos e começar a transformar seu negócio digital.
              </p>
              <p className="text-sm text-muted-foreground">
                Fique atento às mensagens! 📱
              </p>
            </div>

            {/* Back to Home Button */}
            <Link to="/">
              <InovaaButton variant="primary" size="lg">
                Voltar para o Início
              </InovaaButton>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
