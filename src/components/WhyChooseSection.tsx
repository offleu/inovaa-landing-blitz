import { Clock, HeadphonesIcon, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhyChooseSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: Clock,
      title: "Diagnóstico estratégico completo",
      description: "Análise aprofundada do seu negócio digital para identificar oportunidades de crescimento, gargalos operacionais e estratégias de otimização."
    },
    {
      icon: HeadphonesIcon,
      title: "Acompanhamento executivo contínuo",
      description: "Consultores dedicados que monitoram métricas, ajustam estratégias e garantem a implementação correta de cada etapa do plano de ação."
    },
    {
      icon: Award,
      title: "Soluções personalizadas e mensuráveis",
      description: "Cada consultoria é desenvolvida sob medida para seu negócio, com metas claras, KPIs definidos e relatórios de performance."
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-white" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Por que escolher a Inovaa Consultoria?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`text-center space-y-4 p-4 sm:p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-text-dark px-2">
                {benefit.title}
              </h3>
              
              <p className="text-sm sm:text-base text-text-gray leading-relaxed px-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;