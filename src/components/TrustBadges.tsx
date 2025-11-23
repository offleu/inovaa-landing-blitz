import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Pagamento protegido"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Até 20 dias úteis"
    },
    {
      icon: Award,
      title: "Garantia Total",
      description: "Ou seu dinheiro de volta"
    },
    {
      icon: ThumbsUp,
      title: "Satisfação",
      description: "98% de aprovação"
    }
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-purple-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-purple-brand" />
              </div>
              <div>
                <div className="font-semibold text-text-dark text-sm sm:text-base">
                  {badge.title}
                </div>
                <div className="text-xs sm:text-sm text-text-gray">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
