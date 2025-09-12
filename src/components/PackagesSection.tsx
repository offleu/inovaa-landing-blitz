import { Laptop, Package, Palette } from "lucide-react";
import { InovaaButton } from "./ui/inovaa-button";

const PackagesSection = () => {
  const packages = [
    {
      icon: Laptop,
      title: "Montagem de Loja Virtual",
      price: "R$ 1.490,00",
      description: "Desenvolvimento completo da sua loja virtual com design profissional, integração de pagamento e todas as funcionalidades essenciais."
    },
    {
      icon: Package,
      title: "Cadastro de Produtos",
      price: "R$ 350,00",
      description: "Cadastro profissional dos seus produtos com descrições otimizadas, imagens tratadas e categorização adequada."
    },
    {
      icon: Palette,
      title: "Design para E-commerce",
      price: "R$ 290,00",
      description: "Criação de identidade visual personalizada para sua loja com logo, cores, tipografia e elementos gráficos únicos."
    }
  ];

  return (
    <section id="pacotes" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4 px-2">
            Conheça os pacotes mais vendidos pela Inovaa
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
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
            <a href="https://api.whatsapp.com/send/?phone=5514991302496&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              Quero minha Loja Online
            </a>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;