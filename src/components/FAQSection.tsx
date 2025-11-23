import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const faqs = [
    {
      question: "Quanto tempo leva para criar minha loja virtual?",
      answer: "Sua loja fica pronta em até 20 dias úteis, ou seu dinheiro de volta! Trabalhamos com prazos garantidos para que você possa começar a vender o mais rápido possível."
    },
    {
      question: "Quais plataformas vocês trabalham?",
      answer: "Trabalhamos com as principais plataformas do mercado: Nuvemshop, Tray, Yampi, Shopify e outras plataformas personalizadas. Escolhemos a melhor opção de acordo com as necessidades do seu negócio."
    },
    {
      question: "O que está incluso nos pacotes?",
      answer: "Todos os pacotes incluem: design profissional personalizado, cadastro de produtos, integração com meios de pagamento, configuração de frete, SEO básico, treinamento completo e suporte dedicado. Os pacotes superiores incluem funcionalidades avançadas e mais produtos."
    },
    {
      question: "Vocês fazem o cadastro dos produtos?",
      answer: "Sim! Cuidamos do cadastro completo dos produtos, incluindo fotos, descrições, preços, variações e categorias. Você só precisa nos fornecer as informações e materiais."
    },
    {
      question: "Preciso pagar mensalidade da plataforma?",
      answer: "Nossos pacotes cobrem o desenvolvimento da loja. As plataformas de e-commerce (Nuvemshop, Shopify, etc) têm suas próprias mensalidades que variam de acordo com o plano escolhido. Te ajudamos a escolher a melhor opção custo-benefício."
    },
    {
      question: "Vocês dão suporte após a entrega?",
      answer: "Sim! Oferecemos treinamento completo para você gerenciar sua loja e suporte dedicado durante e após o desenvolvimento. Também oferecemos planos de manutenção e gestão contínua."
    },
    {
      question: "Como funciona a garantia de devolução?",
      answer: "Se sua loja não ficar pronta em 20 dias úteis conforme acordado, devolvemos 100% do valor investido. Trabalhamos com total transparência e comprometimento com prazos."
    },
    {
      question: "Posso fazer alterações depois que a loja estiver pronta?",
      answer: "Sim! Você terá total autonomia para fazer alterações através do painel administrativo da plataforma. Também oferecemos serviços de manutenção e customizações adicionais caso precise."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Perguntas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-700 hover:shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-text-dark text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-brand flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 sm:p-6 pt-0 text-text-gray text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-gray mb-4">Não encontrou sua resposta?</p>
          <a
            href="https://wa.me/5514991302496?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20serviços"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            💬 Falar com Especialista
          </a>
        </div>
      </div>

      {/* Schema.org FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQSection;
