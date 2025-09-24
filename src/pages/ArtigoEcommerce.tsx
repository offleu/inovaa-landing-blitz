import { ArrowLeft, Calendar, User, Clock, ExternalLink, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { InovaaButton } from "../components/ui/inovaa-button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

const ArtigoEcommerce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/20 dark:to-purple-950/20">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-purple-brand transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-gradient-secondary text-white">
                E-commerce
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Equipe Inovaa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>15 de Janeiro, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>15 min de leitura</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Como Criar um E-commerce de Sucesso em 2025: O Guia Definitivo para Empreender Online
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O cenário do e-commerce brasileiro está em plena expansão e 2025 promete ser um ano de oportunidades para novos empreendedores. Com a crescente digitalização dos consumidores e a consolidação de novas tecnologias, nunca houve um momento tão propício para tirar o seu projeto do papel.
            </p>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/24340949-b521-4c03-85fa-c42e08ccd670.png" 
                alt="E-commerce de sucesso - Pessoa usando computador para vendas online"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                O Futuro é Agora: Por Que Investir em um E-commerce em 2025?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As estatísticas não mentem: o comércio eletrônico no Brasil continua em uma trajetória ascendente. Para 2025, as projeções indicam um crescimento robusto, impulsionado por um número cada vez maior de consumidores online e um aumento no ticket médio dos pedidos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As tendências para o próximo ano apontam para a consolidação de práticas como o <a href="https://www.ecommercebrasil.com.br/artigos/social-commerce-tendencia" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">social commerce <ExternalLink className="w-3 h-3 ml-1" /></a> (vendas através das redes sociais), a personalização da experiência de compra com o uso de <a href="https://www.sebrae.com.br/sites/PortalSebrae/artigos/inteligencia-artificial-no-ecommerce" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">inteligência artificial <ExternalLink className="w-3 h-3 ml-1" /></a> e a crescente busca por marcas com propósitos e práticas sustentáveis.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800 mb-8">
                <img 
                  src="/lovable-uploads/24340949-b521-4c03-85fa-c42e08ccd670.png" 
                  alt="Gráfico mostrando crescimento do e-commerce"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground italic">
                  Estar presente no ambiente digital não é mais uma opção, mas uma necessidade para quem deseja prosperar no varejo.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                O Passo a Passo para a Criação do seu Site Próprio
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Construir um e-commerce de sucesso exige planejamento e dedicação. Siga estas etapas fundamentais para garantir uma base sólida para o seu negócio:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-purple-brand pl-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    1. A Escolha do Nicho de Mercado
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Antes de mais nada, defina o que você vai vender e para quem. Pesquise por nichos de mercado com alta demanda e, preferencialmente, com os quais você tenha alguma afinidade. Analise a concorrência e identifique oportunidades para se diferenciar, seja através de produtos exclusivos, um atendimento excepcional ou um posicionamento de marca único.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📊 <a href="https://trends.google.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">Use o Google Trends <ExternalLink className="w-3 h-3 ml-1" /></a> para validar a demanda do seu nicho.
                  </p>
                </div>

                <div className="border-l-4 border-purple-brand pl-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    2. Plano de Negócios: O seu Mapa para o Sucesso
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Estruture um plano de negócios detalhado. Este documento será o seu guia, contemplando seus objetivos, o público-alvo, análise de concorrentes, estratégias de marketing, planejamento financeiro e projeções de vendas. Um plano bem elaborado é crucial para tomar decisões mais assertivas e buscar investimentos, se necessário.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📝 <a href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/mt/noticias/como-fazer-um-plano-de-negocios" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">Veja o modelo do SEBRAE <ExternalLink className="w-3 h-3 ml-1" /></a> para criar seu plano de negócios.
                  </p>
                </div>

                <div className="border-l-4 border-purple-brand pl-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    3. Questões Legais e Burocráticas
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Formalize o seu negócio. No Brasil, é essencial abrir um CNPJ para operar legalmente, emitir notas fiscais e transmitir confiança aos seus clientes. Consulte um contador para entender o regime tributário mais adequado para o seu e-commerce e esteja em dia com a <a href="https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">Lei Geral de Proteção de Dados (LGPD) <ExternalLink className="w-3 h-3 ml-1" /></a>, garantindo a privacidade e a segurança das informações dos seus clientes.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="/lovable-uploads/24340949-b521-4c03-85fa-c42e08ccd670.png" 
                  alt="Planejamento de e-commerce - Mesa com documentos e laptop"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Loja Própria ou Marketplaces? Eis a Questão!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Uma dúvida comum para quem está começando é sobre onde vender: em um site próprio ou em grandes marketplaces como <a href="https://www.mercadolivre.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">Mercado Livre <ExternalLink className="w-3 h-3 ml-1" /></a>, <a href="https://www.amazon.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">Amazon <ExternalLink className="w-3 h-3 ml-1" /></a> e <a href="https://www.magazineluiza.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center">Magazine Luiza <ExternalLink className="w-3 h-3 ml-1" /></a>? A resposta ideal pode ser um equilíbrio entre os dois.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-300">
                    Marketplaces
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Vantagens:</h4>
                      <p className="text-sm text-green-600 dark:text-green-500">
                        Acesso a uma base gigantesca de clientes já estabelecida, maior visibilidade inicial e a confiança que as grandes marcas transmitem.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Desvantagens:</h4>
                      <p className="text-sm text-green-600 dark:text-green-500">
                        Alta concorrência, taxas e comissões sobre as vendas, e menor controle sobre a identidade visual da sua marca e o relacionamento com o cliente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                    Loja Virtual Própria
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Vantagens:</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-500">
                        Controle total sobre a sua marca, personalização da experiência do cliente, margens de lucro maiores e a possibilidade de construir um relacionamento direto com o seu público.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Desvantagens:</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-500">
                        Exige maior investimento em marketing para atrair tráfego e construir a reputação da sua marca.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">💡 A Estratégia Híbrida:</h4>
                <p className="text-yellow-700 dark:text-yellow-400">
                  Muitos empreendedores de sucesso utilizam os marketplaces como um canal de aquisição de clientes, direcionando-os, posteriormente, para a sua loja virtual, onde podem oferecer uma experiência de compra mais completa e fidelizá-los.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                As Plataformas que Impulsionam o seu E-commerce: Tray, Nuvemshop e Yampi em Foco
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A escolha da plataforma de e-commerce é uma das decisões mais importantes. Ela será a base da sua loja virtual, por isso, é fundamental que seja robusta, escalável e atenda às suas necessidades. Analisamos três das principais plataformas do mercado brasileiro:
              </p>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">Tray</h3>
                    <a href="https://www.tray.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center text-sm">
                      Visitar site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Uma das plataformas mais tradicionais e completas do mercado, a Tray é conhecida por sua robustez e integração nativa com os principais marketplaces. É uma excelente opção para quem busca uma operação mais complexa e pretende vender em múltiplos canais.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong className="text-green-600">Ideal para:</strong> Lojas de médio a grande porte que buscam uma solução completa e com forte integração com marketplaces.</p>
                    <p className="text-sm"><strong className="text-blue-600">Destaques:</strong> Ampla gama de funcionalidades, personalização avançada e um ecossistema de aplicativos e serviços.</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">Nuvemshop</h3>
                    <a href="https://www.nuvemshop.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center text-sm">
                      Visitar site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Líder em número de lojas virtuais na América Latina, a Nuvemshop se destaca pela sua facilidade de uso e por oferecer planos para todos os tamanhos de negócio, incluindo um plano inicial gratuito. É uma plataforma intuitiva e com um ótimo suporte, ideal para quem está começando.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong className="text-green-600">Ideal para:</strong> Empreendedores iniciantes e pequenas e médias empresas que buscam uma plataforma intuitiva e com bom custo-benefício.</p>
                    <p className="text-sm"><strong className="text-blue-600">Destaques:</strong> Plano gratuito, facilidade de configuração, layouts modernos e uma loja de aplicativos em constante crescimento.</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">Yampi</h3>
                    <a href="https://www.yampi.com.br" target="_blank" rel="noopener noreferrer" className="text-purple-brand hover:underline inline-flex items-center text-sm">
                      Visitar site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A Yampi vem ganhando espaço no mercado com uma proposta focada em conversão e checkout transparente. A plataforma oferece ferramentas robustas de recuperação de carrinho abandonado e upsell, o que pode aumentar significativamente o faturamento da loja.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong className="text-green-600">Ideal para:</strong> Lojistas que buscam otimizar a taxa de conversão e oferecer uma experiência de checkout simplificada.</p>
                    <p className="text-sm"><strong className="text-blue-600">Destaques:</strong> Checkout transparente de alta conversão, ferramentas de marketing integradas e planos flexíveis.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="/lovable-uploads/24340949-b521-4c03-85fa-c42e08ccd670.png" 
                  alt="Comparativo de plataformas de e-commerce"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Rumo ao Topo: Estratégias de Marketing Digital para o seu E-commerce
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Com a sua loja no ar, é hora de atrair clientes. Invista em uma estratégia de marketing digital sólida, contemplando:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">🔍 SEO (Search Engine Optimization)</h3>
                  <p className="text-purple-700 dark:text-purple-400 text-sm">
                    Otimize o seu site para que ele seja encontrado nos primeiros resultados de busca do Google, atraindo visitas orgânicas e qualificadas.
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-500 mt-2">
                    <a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                      Guia de SEO para iniciantes <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📝 Marketing de Conteúdo</h3>
                  <p className="text-blue-700 dark:text-blue-400 text-sm">
                    Crie um blog e produza conteúdo relevante para o seu público-alvo, estabelecendo a sua marca como uma autoridade no seu nicho.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-3">📱 Redes Sociais</h3>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Esteja presente nas redes sociais onde o seu público está. Crie conteúdo engajador, interaja com os seus seguidores e utilize as ferramentas de vendas das próprias plataformas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-3">💰 Tráfego Pago</h3>
                  <p className="text-orange-700 dark:text-orange-400 text-sm">
                    Invista em anúncios no <a href="https://ads.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">Google Ads <ExternalLink className="w-3 h-3 ml-1" /></a> e nas redes sociais para alcançar um público maior e acelerar as suas vendas.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para Criar seu E-commerce de Sucesso?
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Na Inovaa E-commerce, transformamos sua visão em realidade. Nossa equipe especializada cuida de toda a criação e gestão da sua loja virtual, desde o design até as estratégias de marketing digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InovaaButton 
                  variant="secondary" 
                  size="lg"
                  asChild
                >
                  <a href="/formulario-contato">
                    Quero Minha Loja Online
                  </a>
                </InovaaButton>
                <InovaaButton 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-purple-brand"
                  asChild
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </InovaaButton>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-foreground mb-4">
                Criar um e-commerce de sucesso em 2025 é um desafio empolgante e totalmente alcançável. Com planejamento, a escolha das ferramentas certas e uma estratégia de marketing bem definida, você estará no caminho certo para construir um negócio online lucrativo e duradouro.
              </p>
              <p className="text-muted-foreground font-medium">
                O futuro do varejo é digital, e a sua jornada de sucesso começa agora. 🚀
              </p>
            </div>

            <Separator className="my-12" />

            {/* Share Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Compartilhe este artigo:</span>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Como Criar um E-commerce de Sucesso em 2025')}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-brand transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-brand transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-brand transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ArtigoEcommerce;