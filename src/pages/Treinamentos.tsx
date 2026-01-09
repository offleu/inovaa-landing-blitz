import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";
import { GraduationCap, TrendingUp, Settings, Monitor, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

const Treinamentos = () => {
  const treinamentos = [
    {
      icon: TrendingUp,
      title: "Treinamento em Vendas",
      description: "Capacite sua equipe com técnicas avançadas de vendas para e-commerce e varejo digital.",
      topics: [
        "Funil de vendas e jornada do cliente",
        "Técnicas de conversão e fechamento",
        "Atendimento consultivo ao cliente",
        "Cross-selling e upselling estratégico",
        "Gestão de objeções e negociação"
      ]
    },
    {
      icon: Settings,
      title: "Sistemas de Gestão",
      description: "Domine os principais ERPs e sistemas de gestão para otimizar operações.",
      topics: [
        "Implantação e configuração de ERPs",
        "Gestão de estoque e inventário",
        "Controle financeiro e fluxo de caixa",
        "Relatórios gerenciais e KPIs",
        "Integração entre sistemas"
      ]
    },
    {
      icon: Monitor,
      title: "Plataformas de E-commerce",
      description: "Aprenda a operar e gerenciar as principais plataformas do mercado.",
      topics: [
        "Nuvemshop, Tray, Shopify e Yampi",
        "Configuração de produtos e categorias",
        "Gestão de pedidos e logística",
        "Integrações com marketplaces",
        "Otimização de performance"
      ]
    }
  ];

  const beneficios = [
    {
      icon: Users,
      title: "Equipe Capacitada",
      description: "Time preparado para entregar resultados superiores"
    },
    {
      icon: Target,
      title: "Metodologia Prática",
      description: "Treinamentos hands-on com casos reais do seu negócio"
    },
    {
      icon: TrendingUp,
      title: "ROI Mensurável",
      description: "Acompanhamento de métricas antes e depois do treinamento"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Capacitação Profissional
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Treinamentos Especializados para{" "}
                <span className="text-purple-brand">E-commerce</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Capacite sua equipe em vendas, sistemas de gestão e plataformas de e-commerce 
                com metodologia prática e resultados mensuráveis.
              </p>
              <Link
                to="/formulario-contato"
                className="inline-flex items-center gap-2 bg-purple-brand hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Treinamentos */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Nossos Treinamentos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Programas desenvolvidos para acelerar o crescimento do seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {treinamentos.map((treinamento, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <treinamento.icon className="w-7 h-7 text-purple-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {treinamento.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {treinamento.description}
                  </p>
                  <ul className="space-y-3">
                    {treinamento.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Por que escolher nossos treinamentos?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <beneficio.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {beneficio.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {beneficio.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-purple-brand">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Pronto para capacitar sua equipe?
            </h2>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">
              Entre em contato e receba uma proposta personalizada para o seu negócio.
            </p>
            <Link
              to="/formulario-contato"
              className="inline-flex items-center gap-2 bg-white text-purple-brand hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Treinamentos;
