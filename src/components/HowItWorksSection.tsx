import { MessageCircle, Cog, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const steps = [
    {
      icon: MessageCircle,
      title: "Diagnóstico Inicial",
      description: "Analisamos seu e-commerce, identificamos oportunidades e mapeamos os principais desafios"
    },
    {
      icon: Cog,
      title: "Plano Estratégico",
      description: "Desenvolvemos um plano de ação personalizado com metas claras e cronograma definido"
    },
    {
      icon: CheckCircle,
      title: "Implementação Guiada",
      description: "Acompanhamos a execução das estratégias com reuniões periódicas e ajustes contínuos"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Monitoramos resultados e otimizamos processos para garantir crescimento consistente"
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-gradient-primary relative overflow-hidden" ref={elementRef}>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Como Funciona
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-center space-y-4 p-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto border border-white/30">
                  <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-white px-2">
                  {step.title}
                </h3>
                
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <InovaaButton variant="yellow" size="lg" asChild>
            <Link to="/formulario-contato">
              Iniciar Minha Consultoria
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;