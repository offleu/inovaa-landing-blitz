import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { CheckCircle, Code, Palette, Smartphone, Globe, Zap } from "lucide-react";

const CriacaoSiteEcommerce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Criação de Site e E-commerce
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Montagem de loja virtual sob demanda com design profissional e funcionalidades completas
              </p>
              <InovaaButton size="lg" variant="yellow" className="text-lg">
                Solicitar Orçamento
              </InovaaButton>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
              Como Funciona Nosso Processo
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">1. Análise de Requisitos</h3>
                <p className="text-text-gray">
                  Entendemos seu negócio, público-alvo e objetivos para criar a solução ideal
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">2. Design Personalizado</h3>
                <p className="text-text-gray">
                  Criamos layouts únicos que refletem a identidade da sua marca
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">3. Desenvolvimento</h3>
                <p className="text-text-gray">
                  Desenvolvemos com as melhores tecnologias para performance e segurança
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">4. Responsividade</h3>
                <p className="text-text-gray">
                  Garantimos que funcione perfeitamente em todos os dispositivos
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">5. Otimização</h3>
                <p className="text-text-gray">
                  Otimizamos para SEO, velocidade de carregamento e conversão
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">6. Entrega e Suporte</h3>
                <p className="text-text-gray">
                  Entregamos o projeto completo com treinamento e suporte técnico
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Incluídas */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                O Que Está Incluído
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Design responsivo profissional",
                  "Catálogo de produtos completo",
                  "Carrinho de compras otimizado",
                  "Sistema de pagamento integrado",
                  "Painel administrativo",
                  "Gestão de estoque",
                  "Sistema de cupons e promoções",
                  "Integração com redes sociais",
                  "SEO otimizado",
                  "Certificado SSL incluído",
                  "Backup automático",
                  "Suporte técnico por 30 dias"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-text-gray">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e receba um orçamento personalizado para sua loja virtual
            </p>
            <InovaaButton size="lg" variant="yellow">
              Falar com Especialista
            </InovaaButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CriacaoSiteEcommerce;