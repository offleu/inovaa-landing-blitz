import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { BarChart, TrendingUp, Users, Target, Shield, Lightbulb, Clock, Zap, Award, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const GestaoEcommerce = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economize Tempo",
      description: "Dedique-se ao crescimento enquanto cuidamos da operação técnica do seu e-commerce"
    },
    {
      icon: TrendingUp,
      title: "Aumente as Vendas",
      description: "Estratégias comprovadas de otimização para aumentar conversão e ticket médio"
    },
    {
      icon: Zap,
      title: "Performance Máxima",
      description: "Monitoramento contínuo garantindo velocidade e disponibilidade sempre"
    },
    {
      icon: Award,
      title: "Experiência Premium",
      description: "Equipe especializada com anos de experiência em e-commerce de sucesso"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Gestão Completa de E-commerce
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Deixe a operação técnica conosco e foque no que realmente importa: fazer seu negócio crescer. Gestão 360° com resultados mensuráveis.
              </p>
              <Link to="/formulario-contato">
                <InovaaButton size="lg" variant="yellow" className="text-lg shadow-2xl hover:scale-105 transition-transform">
                  Solicitar Consultoria Gratuita
                </InovaaButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-dark">
              Por Que Contratar Nossa Gestão?
            </h2>
            <p className="text-center text-text-gray text-lg mb-12 max-w-3xl mx-auto">
              Transforme seu e-commerce em uma máquina de vendas com gestão profissional e resultados comprovados
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-elegant border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-text-dark">{benefit.title}</h3>
                  <p className="text-text-gray leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-dark">
              Nossa Metodologia de Gestão
            </h2>
            <p className="text-center text-text-gray text-lg mb-16 max-w-3xl mx-auto">
              Processo estruturado que garante crescimento sustentável e resultados consistentes
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <BarChart className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Análise de Performance</h3>
                <p className="text-text-gray leading-relaxed">
                  Diagnóstico completo das métricas essenciais: conversão, taxa de abandono, ticket médio e ROI para identificar oportunidades
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <RefreshCw className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Otimização Contínua</h3>
                <p className="text-text-gray leading-relaxed">
                  Implementação de melhorias baseadas em dados reais para aumentar vendas, reduzir custos e melhorar experiência
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Gestão de Clientes</h3>
                <p className="text-text-gray leading-relaxed">
                  Estratégias de retenção, recuperação de carrinhos abandonados e programa de fidelização para maximizar LTV
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">04</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Estratégias de Vendas</h3>
                <p className="text-text-gray leading-relaxed">
                  Campanhas promocionais inteligentes, cross-sell, upsell e remarketing para aumentar faturamento
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">05</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Segurança e Backup</h3>
                <p className="text-text-gray leading-relaxed">
                  Proteção máxima dos dados, monitoramento de ameaças e backups automáticos para total tranquilidade
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">06</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Consultoria Estratégica</h3>
                <p className="text-text-gray leading-relaxed">
                  Reuniões mensais com insights do mercado, análise de concorrência e orientação para decisões estratégicas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Incluídos */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-dark">
                O Que Está Incluído na Gestão
              </h2>
              <p className="text-center text-text-gray text-lg mb-12">
                Serviço completo para você ter paz e resultados
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-dark">Monitoramento Diário</h3>
                  </div>
                  <ul className="space-y-3 text-text-gray">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Acompanhamento de vendas em tempo real com alertas automáticos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Análise detalhada de tráfego, origem e comportamento dos visitantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Gestão proativa de estoque com previsão de reposição</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Relatórios diários de performance e KPIs principais</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-dark">Otimizações Técnicas</h3>
                  </div>
                  <ul className="space-y-3 text-text-gray">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Melhoria contínua da velocidade e performance do site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Otimização avançada para SEO e ranqueamento no Google</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Ajustes de UX para melhorar conversão e reduzir abandono</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Correção rápida de bugs e problemas técnicos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-dark">Estratégias Comerciais</h3>
                  </div>
                  <ul className="space-y-3 text-text-gray">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Planejamento e execução de campanhas promocionais sazonais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Análise e otimização de precificação e margens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Monitoramento da concorrência e posicionamento de mercado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Implementação de estratégias de cross-selling e upselling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-dark">Consultoria Mensal</h3>
                  </div>
                  <ul className="space-y-3 text-text-gray">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Reuniões estratégicas com análise de resultados e metas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Relatórios executivos completos com insights acionáveis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Planejamento de ações e roadmap para próximos meses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Suporte consultivo para tomada de decisões estratégicas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Leve Seu E-commerce ao Próximo Nível
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Pare de perder tempo com operações técnicas. Nossa equipe cuida de tudo enquanto você foca em fazer seu negócio crescer.
            </p>
            <Link to="/formulario-contato">
              <InovaaButton size="lg" variant="yellow" className="text-lg shadow-2xl hover:scale-105 transition-transform">
                Agendar Consultoria Gratuita
              </InovaaButton>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Análise gratuita do seu e-commerce • Proposta personalizada em 24h
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GestaoEcommerce;