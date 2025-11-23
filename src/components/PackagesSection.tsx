import { Laptop, Package, Palette, ShoppingCart, FileText, Share2, Zap, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const PackagesSection = () => {
  const [selectedType, setSelectedType] = useState<"ecommerce" | "landing" | "social">("ecommerce");
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const packagesByType = {
    ecommerce: [
      {
        icon: Laptop,
        title: "Básico",
        price: "R$ 1.490,00",
        description: "Loja virtual completa com até 50 produtos, design responsivo e integração de pagamento."
      },
      {
        icon: ShoppingCart,
        title: "Profissional",
        price: "R$ 2.990,00",
        description: "Loja avançada com produtos ilimitados, sistema de cupons, gestão completa e integrações premium."
      },
      {
        icon: Zap,
        title: "Premium",
        price: "R$ 4.990,00",
        description: "E-commerce completo com IA, automações, app mobile, gestão avançada e suporte prioritário."
      }
    ],
    landing: [
      {
        icon: FileText,
        title: "Essencial",
        price: "R$ 890,00",
        description: "Landing page otimizada para conversão com design profissional e formulário de contato integrado."
      },
      {
        icon: TrendingUp,
        title: "Avançada",
        price: "R$ 1.590,00",
        description: "Landing page com múltiplas seções, animações, integração com CRM e otimização SEO avançada."
      },
      {
        icon: Heart,
        title: "Completa",
        price: "R$ 2.490,00",
        description: "Landing page premium com A/B testing, analytics avançado, chat integrado e automações de marketing."
      }
    ],
    social: [
      {
        icon: Share2,
        title: "Starter",
        price: "R$ 490,00",
        description: "Gestão de 1 rede social com 12 posts mensais e design de templates personalizados."
      },
      {
        icon: Palette,
        title: "Pro",
        price: "R$ 890,00",
        description: "Gestão de 2 redes sociais com 20 posts mensais, stories e planejamento estratégico."
      },
      {
        icon: Package,
        title: "Premium",
        price: "R$ 1.490,00",
        description: "Gestão completa de 3 redes sociais com 30 posts, stories, reels e relatórios mensais."
      }
    ]
  };

  const typeLabels = {
    ecommerce: "E-commerce",
    landing: "Landing Page",
    social: "Mídias Sociais"
  };

  return (
    <section id="pacotes" className="py-12 sm:py-16 lg:py-20 bg-gray-50" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4 px-2">
            Escolha o Pacote Ideal para Seu Negócio
          </h2>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto mb-8">
            Selecione o tipo de serviço e encontre o plano perfeito
          </p>

          {/* Type Selector */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {(Object.keys(packagesByType) as Array<keyof typeof packagesByType>).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <InovaaButton size="lg" asChild>
            <Link to="/formulario-contato">
              Quero minha Loja Online
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;