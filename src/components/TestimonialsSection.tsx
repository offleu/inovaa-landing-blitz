import { Star, Quote, MapPin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Carla Mendes",
      role: "Proprietária",
      company: "Bella Moda Feminina",
      city: "Marília, SP",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "A consultoria da Inovaa transformou nosso e-commerce. Em 6 meses, triplicamos as vendas online. O diagnóstico inicial foi certeiro e o acompanhamento mensal fez toda a diferença."
    },
    {
      name: "Roberto Silva",
      role: "Diretor Comercial",
      company: "Casa & Decoração",
      city: "Assis, SP",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O treinamento em sistemas de gestão capacitou toda nossa equipe. Hoje operamos com muito mais eficiência e o controle de estoque ficou impecável. Recomendo demais!"
    },
    {
      name: "Fernanda Costa",
      role: "CEO",
      company: "Natural Fit Suplementos",
      city: "Marília, SP",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Migramos para a Nuvemshop com a ajuda da Inovaa e foi a melhor decisão. O treinamento na plataforma nos deu autonomia total para gerenciar a loja."
    },
    {
      name: "Marcos Oliveira",
      role: "Fundador",
      company: "TechParts Informática",
      city: "Tupã, SP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O diagnóstico estratégico identificou gargalos que nem imaginávamos. Com as recomendações implementadas, nosso ticket médio aumentou 40% em apenas 3 meses."
    },
    {
      name: "Juliana Ferreira",
      role: "Gerente de E-commerce",
      company: "Doce Encanto Confeitaria",
      city: "Ourinhos, SP",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "A Inovaa nos ajudou a estruturar todo o processo de vendas online. O treinamento em vendas para e-commerce foi excepcional. Nossa equipe agora converte muito mais!"
    },
    {
      name: "Eduardo Santos",
      role: "Proprietário",
      company: "Agro Center Máquinas",
      city: "Garça, SP",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Atendimento próximo e personalizado. Por serem da região, entendem as particularidades do nosso mercado. A consultoria foi fundamental para nossa expansão digital."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50/30">
      <div className="container mx-auto px-4">
        <div
          ref={elementRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Clientes da Região
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Empresas de Marília e região que transformaram seus negócios com nossa consultoria e treinamentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-brand/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-text-gray leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-text-dark text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-text-gray">
                    {testimonial.role} • {testimonial.company}
                  </p>
                  <p className="text-xs text-purple-brand font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-purple-brand">200+</p>
            <p className="text-sm text-text-gray mt-1">Clientes Atendidos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-purple-brand">4.9</p>
            <p className="text-sm text-text-gray mt-1">Avaliação Média</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-purple-brand">15+</p>
            <p className="text-sm text-text-gray mt-1">Cidades Atendidas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-purple-brand">98%</p>
            <p className="text-sm text-text-gray mt-1">Taxa de Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
