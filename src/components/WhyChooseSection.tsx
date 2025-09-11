import { Clock, HeadphonesIcon, Award } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Loja 100% pronta para vender em até 20 dias",
      description: "Desenvolvimento completo da sua loja virtual com design profissional e todas as funcionalidades necessárias para começar a vender imediatamente."
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte eficiente e acompanhamento de tarefas",
      description: "Nossa equipe oferece suporte dedicado durante todo o processo, com acompanhamento detalhado de cada etapa do desenvolvimento."
    },
    {
      icon: Award,
      title: "Serviços individualizados de qualidade",
      description: "Cada projeto é único e desenvolvido especialmente para o seu negócio, garantindo uma solução personalizada e de alta qualidade."
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Por que escolher a Inovaa E-commerce?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4 p-4 sm:p-6">
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