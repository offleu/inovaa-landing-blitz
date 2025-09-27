import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { Search, Facebook, Instagram, Target, BarChart3, Megaphone } from "lucide-react";

const MarketingDigital = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Marketing Digital
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Gestão completa de tráfego pago e orgânico para maximizar seus resultados online
              </p>
              <InovaaButton size="lg" variant="yellow" className="text-lg">
                Aumentar Minhas Vendas
              </InovaaButton>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
              Nossa Estratégia de Marketing Digital
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">1. Definição de Público</h3>
                <p className="text-text-gray">
                  Identificamos e segmentamos seu público-alvo ideal com precisão
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Megaphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">2. Criação de Campanhas</h3>
                <p className="text-text-gray">
                  Desenvolvemos campanhas personalizadas para cada plataforma
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">3. SEO e Conteúdo</h3>
                <p className="text-text-gray">
                  Otimizamos seu site e criamos conteúdo para tráfego orgânico
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">4. Tráfego Pago</h3>
                <p className="text-text-gray">
                  Gerenciamos anúncios no Google Ads, Facebook e Instagram Ads
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">5. Análise e Otimização</h3>
                <p className="text-text-gray">
                  Monitoramos resultados e otimizamos campanhas constantemente
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">6. Relatórios Detalhados</h3>
                <p className="text-text-gray">
                  Fornecemos relatórios completos com ROI e métricas importantes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Nossos Serviços de Marketing
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <h3 className="text-2xl font-semibold mb-6 text-text-dark flex items-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    Tráfego Orgânico (SEO)
                  </h3>
                  <ul className="space-y-3 text-text-gray">
                    <li>• Otimização on-page e off-page</li>
                    <li>• Pesquisa e análise de palavras-chave</li>
                    <li>• Criação de conteúdo otimizado</li>
                    <li>• Link building estratégico</li>
                    <li>• Otimização técnica do site</li>
                    <li>• Acompanhamento de rankings</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <h3 className="text-2xl font-semibold mb-6 text-text-dark flex items-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    Tráfego Pago (Ads)
                  </h3>
                  <ul className="space-y-3 text-text-gray">
                    <li>• Google Ads (Search e Display)</li>
                    <li>• Facebook e Instagram Ads</li>
                    <li>• YouTube Ads</li>
                    <li>• TikTok Ads</li>
                    <li>• Remarketing estratégico</li>
                    <li>• Otimização de conversões</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-dark">
                Resultados Comprovados
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-primary text-white rounded-lg p-8">
                  <div className="text-4xl font-bold mb-2">+250%</div>
                  <div className="text-lg opacity-90">Aumento médio em vendas</div>
                </div>
                
                <div className="bg-gradient-secondary text-white rounded-lg p-8">
                  <div className="text-4xl font-bold mb-2">5x</div>
                  <div className="text-lg opacity-90">Retorno sobre investimento</div>
                </div>
                
                <div className="bg-yellow-brand text-white rounded-lg p-8">
                  <div className="text-4xl font-bold mb-2">-60%</div>
                  <div className="text-lg opacity-90">Redução no custo por aquisição</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Escalar Suas Vendas?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para criar estratégias personalizadas que geram resultados reais
            </p>
            <InovaaButton size="lg" variant="yellow">
              Começar Campanha Agora
            </InovaaButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingDigital;