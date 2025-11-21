import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { CheckCircle, Code, Palette, Smartphone, Globe, Zap, ShoppingCart, CreditCard, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CriacaoSiteEcommerce = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Catálogo Inteligente",
      description: "Sistema de produtos com filtros avançados, busca inteligente e recomendações personalizadas para aumentar suas vendas."
    },
    {
      icon: CreditCard,
      title: "Pagamento Integrado",
      description: "Integração completa com gateways de pagamento (cartão, boleto, Pix) e checkout otimizado para conversão."
    },
    {
      icon: Package,
      title: "Gestão de Estoque",
      description: "Controle total de estoque com alertas automáticos, histórico de movimentações e relatórios detalhados."
    },
    {
      icon: TrendingUp,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas de vendas, comportamento do usuário e relatórios de performance em tempo real."
    },
    {
      icon: Globe,
      title: "SEO Otimizado",
      description: "Estrutura otimizada para motores de busca com URLs amigáveis, meta tags e sitemap automático."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Design responsivo que proporciona experiência perfeita em smartphones, tablets e desktops."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Criação de Site e E-commerce
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                Transformamos sua visão em uma loja virtual profissional, completa e pronta para vender. Design exclusivo, tecnologia de ponta e suporte especializado.
              </p>
              <Link to="/formulario-contato">
                <InovaaButton size="lg" variant="yellow" className="text-lg shadow-2xl hover:scale-105 transition-transform">
                  Solicitar Orçamento Gratuito
                </InovaaButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Recursos Principais */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-dark">
              Recursos que Impulsionam Vendas
            </h2>
            <p className="text-center text-text-gray text-lg mb-12 max-w-3xl mx-auto">
              Cada funcionalidade foi pensada para oferecer a melhor experiência ao seu cliente e facilitar a gestão do seu negócio
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-elegant border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-text-dark">{feature.title}</h3>
                  <p className="text-text-gray leading-relaxed">
                    {feature.description}
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
              Nosso Processo de Criação
            </h2>
            <p className="text-center text-text-gray text-lg mb-16 max-w-3xl mx-auto">
              Um método comprovado que garante resultados excepcionais em cada etapa do desenvolvimento
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Análise de Requisitos</h3>
                <p className="text-text-gray leading-relaxed">
                  Mergulhamos no seu negócio para entender objetivos, público-alvo e diferenciais competitivos
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Design Personalizado</h3>
                <p className="text-text-gray leading-relaxed">
                  Criamos uma identidade visual única que conecta emocionalmente com seus clientes
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Desenvolvimento</h3>
                <p className="text-text-gray leading-relaxed">
                  Construímos com tecnologias modernas garantindo performance, segurança e escalabilidade
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">04</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Responsividade Total</h3>
                <p className="text-text-gray leading-relaxed">
                  Experiência perfeita em qualquer dispositivo - desktop, tablet ou smartphone
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">05</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Otimização Completa</h3>
                <p className="text-text-gray leading-relaxed">
                  SEO, velocidade e UX otimizados para maximizar conversões e ranqueamento
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elegant border-2 border-gray-100 hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">06</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">Lançamento e Suporte</h3>
                <p className="text-text-gray leading-relaxed">
                  Acompanhamento completo com treinamento, documentação e suporte especializado
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Incluídas */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-dark">
                Tudo que Você Precisa Incluído
              </h2>
              <p className="text-center text-text-gray text-lg mb-12">
                Um pacote completo para você começar a vender online com sucesso
              </p>
              
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { text: "Design responsivo profissional", highlight: true },
                    { text: "Catálogo de produtos ilimitado", highlight: false },
                    { text: "Carrinho de compras otimizado", highlight: false },
                    { text: "Integração com meios de pagamento", highlight: true },
                    { text: "Painel administrativo completo", highlight: false },
                    { text: "Gestão avançada de estoque", highlight: false },
                    { text: "Sistema de cupons e promoções", highlight: true },
                    { text: "Integração com redes sociais", highlight: false },
                    { text: "SEO otimizado para Google", highlight: true },
                    { text: "Certificado SSL de segurança", highlight: false },
                    { text: "Backup automático diário", highlight: false },
                    { text: "Suporte técnico por 60 dias", highlight: true }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <CheckCircle className={`w-6 h-6 flex-shrink-0 ${item.highlight ? 'text-primary' : 'text-green-500'}`} />
                      <span className={`${item.highlight ? 'text-text-dark font-semibold' : 'text-text-gray'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Comece hoje mesmo a vender online com uma loja profissional. Nossa equipe está pronta para tirar seu projeto do papel.
            </p>
            <Link to="/formulario-contato">
              <InovaaButton size="lg" variant="yellow" className="text-lg shadow-2xl hover:scale-105 transition-transform">
                Solicitar Orçamento Gratuito
              </InovaaButton>
            </Link>
            <p className="mt-6 text-sm opacity-75">
              Resposta em até 24 horas • Sem compromisso
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CriacaoSiteEcommerce;