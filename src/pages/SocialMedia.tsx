import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { Palette, Camera, Layout, Brush, Sparkles, Calendar } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Social Media
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Pacotes completos de posts, banners, edição de temas, layouts e branding para suas redes sociais
              </p>
              <InovaaButton size="lg" variant="yellow" className="text-lg">
                Ver Pacotes
              </InovaaButton>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
              Como Criamos Sua Identidade Digital
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Brush className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">1. Análise de Marca</h3>
                <p className="text-text-gray">
                  Estudamos sua marca, público e concorrência para definir a estratégia visual
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">2. Criação de Identidade</h3>
                <p className="text-text-gray">
                  Desenvolvemos paleta de cores, tipografias e elementos visuais únicos
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Layout className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">3. Templates Personalizados</h3>
                <p className="text-text-gray">
                  Criamos templates exclusivos para diferentes tipos de posts e campanhas
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">4. Produção de Conteúdo</h3>
                <p className="text-text-gray">
                  Criamos posts, stories, banners e materiais visuais de alta qualidade
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">5. Planejamento Mensal</h3>
                <p className="text-text-gray">
                  Organizamos cronograma de postagens alinhado com suas estratégias de negócio
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">6. Entrega e Revisões</h3>
                <p className="text-text-gray">
                  Entregamos todo o material com possibilidade de ajustes e revisões
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pacotes */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Nossos Pacotes de Social Media
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <h3 className="text-2xl font-semibold mb-4 text-text-dark">Pacote Básico</h3>
                  <div className="text-3xl font-bold text-purple-brand mb-6">15 Posts</div>
                  <ul className="space-y-3 text-text-gray mb-8">
                    <li>• 15 posts para feed</li>
                    <li>• 5 stories personalizados</li>
                    <li>• Identidade visual básica</li>
                    <li>• 2 revisões incluídas</li>
                    <li>• Entrega em 7 dias</li>
                  </ul>
                  <InovaaButton className="w-full" variant="outline">
                    Escolher Básico
                  </InovaaButton>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant border-2 border-purple-brand relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-brand text-white px-4 py-1 rounded-full text-sm">
                    Mais Popular
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-text-dark">Pacote Profissional</h3>
                  <div className="text-3xl font-bold text-purple-brand mb-6">30 Posts</div>
                  <ul className="space-y-3 text-text-gray mb-8">
                    <li>• 30 posts para feed</li>
                    <li>• 15 stories personalizados</li>
                    <li>• Branding completo</li>
                    <li>• Templates exclusivos</li>
                    <li>• Calendário editorial</li>
                    <li>• 5 revisões incluídas</li>
                    <li>• Entrega em 10 dias</li>
                  </ul>
                  <InovaaButton className="w-full" variant="primary">
                    Escolher Profissional
                  </InovaaButton>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <h3 className="text-2xl font-semibold mb-4 text-text-dark">Pacote Premium</h3>
                  <div className="text-3xl font-bold text-purple-brand mb-6">50 Posts</div>
                  <ul className="space-y-3 text-text-gray mb-8">
                    <li>• 50 posts para feed</li>
                    <li>• 25 stories personalizados</li>
                    <li>• Branding premium</li>
                    <li>• Templates ilimitados</li>
                    <li>• Banners promocionais</li>
                    <li>• Gestão de cronograma</li>
                    <li>• Revisões ilimitadas</li>
                    <li>• Entrega em 15 dias</li>
                  </ul>
                  <InovaaButton className="w-full" variant="secondary">
                    Escolher Premium
                  </InovaaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Extras */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Serviços Complementares
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Branding e Identidade</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Criação de logotipo</li>
                    <li>• Manual de marca</li>
                    <li>• Paleta de cores</li>
                    <li>• Tipografia personalizada</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Edição de Layouts</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Capas para redes sociais</li>
                    <li>• Templates para stories</li>
                    <li>• Banners promocionais</li>
                    <li>• Artes para campanhas</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Temas Personalizados</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Temas sazonais</li>
                    <li>• Campanhas especiais</li>
                    <li>• Lançamentos de produtos</li>
                    <li>• Datas comemorativas</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-elegant">
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Gestão de Conteúdo</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Planejamento editorial</li>
                    <li>• Cronograma de postagens</li>
                    <li>• Análise de performance</li>
                    <li>• Otimização contínua</li>
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
              Transforme Suas Redes Sociais
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Deixe suas redes sociais com a cara da sua marca e atraia mais clientes com conteúdo visual profissional
            </p>
            <InovaaButton size="lg" variant="yellow">
              Solicitar Orçamento
            </InovaaButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialMedia;