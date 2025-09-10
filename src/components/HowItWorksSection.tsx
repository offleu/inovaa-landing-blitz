import { MessageCircle, Cog, CheckCircle, TrendingUp } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Você nos conta sua ideia",
      description: "Conte-nos sobre sua ideia e necessidades específicas para o seu e-commerce"
    },
    {
      icon: Cog,
      title: "Desenvolvemos sua loja",
      description: "Nossa equipe desenvolve toda a loja virtual e design personalizado"
    },
    {
      icon: CheckCircle,
      title: "Loja pronta para vender",
      description: "Loja configurada, produtos cadastrados e completamente pronta para vendas"
    },
    {
      icon: TrendingUp,
      title: "Acompanhamos você",
      description: "Te acompanhamos nas primeiras etapas para garantir seu sucesso"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como Funciona
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto border border-white/30">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                
                <p className="text-white/90 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <InovaaButton variant="yellow" size="lg">
            Quero minha Loja Online
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;