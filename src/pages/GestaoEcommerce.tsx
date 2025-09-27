import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { BarChart, TrendingUp, Users, Target, Shield, Lightbulb } from "lucide-react";

const GestaoEcommerce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Gestão de E-commerce
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Gerenciamento completo do seu e-commerce com acompanhamento de resultados, performance e consultorias especializadas
              </p>
              <InovaaButton size="lg" variant="yellow" className="text-lg">
                Solicitar Consultoria
              </InovaaButton>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
              Como Gerenciamos Seu E-commerce
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">1. Análise de Performance</h3>
                <p className="text-text-gray">
                  Monitoramos métricas essenciais como conversão, ticket médio e ROI
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">2. Otimização Contínua</h3>
                <p className="text-text-gray">
                  Implementamos melhorias baseadas em dados para aumentar as vendas
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">3. Gestão de Clientes</h3>
                <p className="text-text-gray">
                  Acompanhamos jornada do cliente e implementamos estratégias de retenção
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">4. Estratégias de Vendas</h3>
                <p className="text-text-gray">
                  Desenvolvemos campanhas e promoções para maximizar o faturamento
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">5. Segurança e Backup</h3>
                <p className="text-text-gray">
                  Garantimos a segurança dos dados e backups automáticos regulares
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">6. Consultoria Estratégica</h3>
                <p className="text-text-gray">
                  Orientamos decisões estratégicas para crescimento sustentável
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Incluídos */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Serviços de Gestão Incluídos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Monitoramento Diário</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Acompanhamento de vendas em tempo real</li>
                    <li>• Análise de tráfego e comportamento</li>
                    <li>• Monitoramento de estoque</li>
                    <li>• Relatórios de performance</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Otimizações Técnicas</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Melhoria da velocidade de carregamento</li>
                    <li>• Otimização para SEO</li>
                    <li>• Ajustes de usabilidade</li>
                    <li>• Correção de bugs e problemas</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Estratégias Comerciais</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Criação de campanhas promocionais</li>
                    <li>• Gestão de preços e margens</li>
                    <li>• Análise da concorrência</li>
                    <li>• Estratégias de cross-selling</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Consultoria Mensal</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Reuniões de alinhamento estratégico</li>
                    <li>• Relatórios detalhados de resultados</li>
                    <li>• Planejamento de ações futuras</li>
                    <li>• Suporte para tomada de decisões</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Maximize os Resultados do Seu E-commerce
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Nossa equipe especializada cuida de todos os aspectos da gestão para você focar no crescimento do seu negócio
            </p>
            <InovaaButton size="lg" variant="yellow">
              Começar Gestão Agora
            </InovaaButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GestaoEcommerce;