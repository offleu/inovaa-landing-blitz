import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InovaaButton } from "@/components/ui/inovaa-button";
import { Bot, Zap, MessageSquare, Settings, Brain, Workflow } from "lucide-react";

const FerramentasIA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Ferramentas de IA
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Chatbots inteligentes e automações operacionais digitais para otimizar seu atendimento e processos
              </p>
              <InovaaButton size="lg" variant="yellow" className="text-lg">
                Automatizar Processos
              </InovaaButton>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
              Como Implementamos IA no Seu Negócio
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">1. Análise de Processos</h3>
                <p className="text-text-gray">
                  Identificamos oportunidades de automação nos seus processos atuais
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">2. Desenvolvimento de Chatbot</h3>
                <p className="text-text-gray">
                  Criamos chatbots personalizados para atender seus clientes 24/7
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">3. Automações Inteligentes</h3>
                <p className="text-text-gray">
                  Implementamos fluxos automatizados para vendas, suporte e gestão
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">4. Integração Multi-canal</h3>
                <p className="text-text-gray">
                  Conectamos com WhatsApp, Facebook, site e outras plataformas
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">5. Configuração e Treino</h3>
                <p className="text-text-gray">
                  Configuramos e treinamos a IA com informações específicas do seu negócio
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-elegant border border-gray-100">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-text-dark">6. Monitoramento e Otimização</h3>
                <p className="text-text-gray">
                  Acompanhamos performance e otimizamos continuamente os resultados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções de IA */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Nossas Soluções de IA
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <h3 className="text-2xl font-semibold mb-6 text-text-dark flex items-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    Chatbots Inteligentes
                  </h3>
                  <ul className="space-y-3 text-text-gray mb-6">
                    <li>• Atendimento automático 24/7</li>
                    <li>• Qualificação de leads</li>
                    <li>• Suporte técnico automatizado</li>
                    <li>• Integração com CRM</li>
                    <li>• Respostas personalizadas</li>
                    <li>• Escalação para humanos</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-elegant">
                  <h3 className="text-2xl font-semibold mb-6 text-text-dark flex items-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                    Automações Operacionais
                  </h3>
                  <ul className="space-y-3 text-text-gray mb-6">
                    <li>• Processamento de pedidos</li>
                    <li>• Gestão de estoque automática</li>
                    <li>• Follow-up de vendas</li>
                    <li>• Envio de notificações</li>
                    <li>• Relatórios automatizados</li>
                    <li>• Integração de sistemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-dark">
                Benefícios das Ferramentas de IA
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-2">Redução de Custos</h3>
                      <p className="text-text-gray">Diminua até 80% dos custos operacionais com automação inteligente</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-2">Atendimento 24/7</h3>
                      <p className="text-text-gray">Seus clientes recebem atendimento instantâneo a qualquer hora</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-2">Inteligência de Dados</h3>
                      <p className="text-text-gray">Colete e analise dados para tomar decisões mais assertivas</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-2">Maior Eficiência</h3>
                      <p className="text-text-gray">Automatize tarefas repetitivas e foque no que realmente importa</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-2">Escalabilidade</h3>
                      <p className="text-text-gray">Cresça seu negócio sem proporcionalmente aumentar custos operacionais</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark mb-2">Experiência do Cliente</h3>
                      <p className="text-text-gray">Proporcione experiências mais rápidas e personalizadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Automatize Seu Negócio com IA
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Revolucione seus processos com inteligência artificial e mantenha-se à frente da concorrência
            </p>
            <InovaaButton size="lg" variant="yellow">
              Implementar IA Agora
            </InovaaButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FerramentasIA;