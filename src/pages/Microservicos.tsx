import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { Database, Globe, Link, Puzzle, Server, Shield } from "lucide-react";

const Microservicos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Microserviços
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Cadastro de produtos, apontamento de domínios, integrações de plataformas e soluções técnicas especializadas
              </p>
              <InovaaButton size="lg" variant="yellow" className="text-lg">
                Solicitar Serviço
              </InovaaButton>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
              Nossos Microserviços Especializados
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">1. Análise de Necessidades</h3>
                <p className="text-text-gray">
                  Identificamos exatamente qual serviço você precisa para otimizar seu negócio
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Puzzle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">2. Planejamento Técnico</h3>
                <p className="text-text-gray">
                  Desenvolvemos a estratégia técnica mais adequada para sua situação
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">3. Implementação</h3>
                <p className="text-text-gray">
                  Executamos o serviço com precisão técnica e atenção aos detalhes
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Link className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">4. Integração</h3>
                <p className="text-text-gray">
                  Conectamos todos os sistemas para funcionarem em perfeita harmonia
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">5. Testes e Validação</h3>
                <p className="text-text-gray">
                  Testamos tudo para garantir que funcione perfeitamente
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">6. Documentação e Suporte</h3>
                <p className="text-text-gray">
                  Entregamos documentação completa e oferecemos suporte técnico
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Disponíveis */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Serviços Disponíveis
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Cadastro de Produtos</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Importação em massa</li>
                    <li>• Categorização automática</li>
                    <li>• Otimização de descrições</li>
                    <li>• Configuração de variações</li>
                    <li>• Ajuste de preços</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Apontamento de Domínios</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Configuração DNS</li>
                    <li>• Certificados SSL</li>
                    <li>• Redirecionamentos</li>
                    <li>• Subdomínios</li>
                    <li>• Backup de configurações</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Link className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Integrações de Plataformas</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• APIs de pagamento</li>
                    <li>• Sistemas de estoque</li>
                    <li>• CRMs e ERPs</li>
                    <li>• Marketplaces</li>
                    <li>• Ferramentas de marketing</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Configurações Técnicas</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Otimização de performance</li>
                    <li>• Configuração de CDN</li>
                    <li>• Backup automatizado</li>
                    <li>• Monitoramento de uptime</li>
                    <li>• Análise de logs</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Puzzle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Migrações</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Migração de plataformas</li>
                    <li>• Transferência de dados</li>
                    <li>• Preservação de SEO</li>
                    <li>• Testes de funcionalidade</li>
                    <li>• Minimização de downtime</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-text-dark">Segurança e Manutenção</h3>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Auditoria de segurança</li>
                    <li>• Atualizações de sistema</li>
                    <li>• Correção de vulnerabilidades</li>
                    <li>• Monitoramento proativo</li>
                    <li>• Planos de contingência</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preços por Serviço */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Preços por Serviço
              </h2>
              
              <div className="bg-white rounded-lg p-8 shadow-elegant">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-text-gray">Cadastro de produtos (até 50)</span>
                      <span className="font-semibold text-text-dark">A partir de R$ 150</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-text-gray">Apontamento de domínio</span>
                      <span className="font-semibold text-text-dark">A partir de R$ 80</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-text-gray">Integração simples</span>
                      <span className="font-semibold text-text-dark">A partir de R$ 200</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-text-gray">Migração de plataforma</span>
                      <span className="font-semibold text-text-dark">A partir de R$ 500</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-text-gray">Configuração técnica</span>
                      <span className="font-semibold text-text-dark">A partir de R$ 120</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-text-gray">Auditoria de segurança</span>
                      <span className="font-semibold text-text-dark">A partir de R$ 250</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-text-gray mb-4">
                    *Preços podem variar de acordo com a complexidade do projeto
                  </p>
                  <InovaaButton size="lg">
                    Solicitar Orçamento Personalizado
                  </InovaaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de um Serviço Específico?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Nossa equipe técnica especializada está pronta para resolver suas necessidades específicas com agilidade e qualidade
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

export default Microservicos;