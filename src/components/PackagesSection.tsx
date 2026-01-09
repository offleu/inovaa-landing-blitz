import { Laptop, ShoppingCart, Zap, GraduationCap, TrendingUp, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PackagesSection = () => {
  const [selectedType, setSelectedType] = useState<"ecommerce" | "treinamentos">("ecommerce");
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const packagesByType = {
    ecommerce: [
      {
        icon: Laptop,
        title: "Diagnóstico",
        price: "R$ 1.490,00",
        description: "Análise completa do seu e-commerce com relatório detalhado de oportunidades, gargalos e plano de ação estratégico."
      },
      {
        icon: ShoppingCart,
        title: "Consultoria",
        price: "R$ 2.990,00",
        description: "Acompanhamento mensal com reuniões estratégicas, implementação de melhorias e monitoramento de KPIs."
      },
      {
        icon: Zap,
        title: "Transformação",
        price: "R$ 4.990,00",
        description: "Consultoria executiva completa com squad dedicado, implementação de processos e gestão de performance."
      }
    ],
    treinamentos: [
      {
        icon: TrendingUp,
        title: "Vendas",
        price: "R$ 1.290,00",
        description: "Treinamento em técnicas avançadas de vendas para e-commerce, funil de conversão e atendimento consultivo."
      },
      {
        icon: Settings,
        title: "Sistemas de Gestão",
        price: "R$ 1.890,00",
        description: "Capacitação em ERPs, gestão de estoque, controle financeiro e integração entre sistemas."
      },
      {
        icon: GraduationCap,
        title: "Plataformas",
        price: "R$ 1.590,00",
        description: "Domine Nuvemshop, Tray, Shopify e Yampi com treinamento prático e hands-on."
      }
    ]
  };

  const typeLabels = {
    ecommerce: "E-commerce",
    treinamentos: "Treinamentos Especializados"
  };

  return (
    <section id="pacotes" className="py-12 sm:py-16 lg:py-20 bg-gray-50" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4 px-2">
            Soluções de Consultoria para Seu E-commerce
          </h2>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto mb-8">
            Selecione a área de atuação e encontre a consultoria ideal
          </p>

          {/* Type Selector */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            {(Object.keys(packagesByType) as Array<keyof typeof packagesByType>).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  selectedType === type
                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                    : "bg-white text-text-dark hover:shadow-md"
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {packagesByType[selectedType].map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-lg transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <pkg.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    A partir de {pkg.price}
                  </p>
                </div>
                
                <p className="text-sm sm:text-base text-text-gray leading-relaxed">
                  {pkg.description}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <InovaaButton size="sm" className="w-full" asChild>
                    <Link to="/formulario-contato">
                      Solicitar Orçamento
                    </Link>
                  </InovaaButton>
                  <a
                    href="https://wa.me/5514991302496?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20pacote%20de%20e-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:text-green-700 font-medium text-center py-2 transition-colors"
                  >
                    💬 Tirar dúvidas no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-3 sm:space-y-4 px-2">
          <p className="text-xs sm:text-sm text-text-gray">
            📊 <strong>Diagnóstico Gratuito:</strong> Agende uma análise inicial sem compromisso!
          </p>
          <InovaaButton size="default" className="w-full sm:w-auto" asChild>
            <Link to="/formulario-contato">
              Agendar Meu Diagnóstico
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;