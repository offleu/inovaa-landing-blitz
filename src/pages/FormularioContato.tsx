import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { InovaaButton } from "../components/ui/inovaa-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

const FormularioContato = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    nomeNegocio: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.nomeNegocio) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Construir mensagem para WhatsApp
    const mensagem = `Olá! Gostaria de criar minha loja online.

*Dados de contato:*
• Nome: ${formData.nome}
• Email: ${formData.email}
• Telefone: ${formData.telefone}
• Nome do Negócio: ${formData.nomeNegocio}

Aguardo retorno para mais informações sobre os pacotes disponíveis.`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5514991302496&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header da página */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
                Solicite sua Loja Online
              </h1>
              <p className="text-lg text-text-gray">
                Preencha os dados abaixo e entraremos em contato via WhatsApp para apresentar as melhores soluções para seu negócio.
              </p>
            </div>

            {/* Formulário */}
            <Card className="shadow-elegant border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-text-dark">
                  Informações de Contato
                </CardTitle>
                <CardDescription className="text-text-gray">
                  Todos os campos são obrigatórios
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-sm font-semibold text-text-dark">
                      Nome Completo *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-text-dark">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digite seu melhor email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>

                  {/* Telefone WhatsApp */}
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-sm font-semibold text-text-dark">
                      Telefone (WhatsApp) *
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(14) 99999-9999"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>

                  {/* Nome do Negócio */}
                  <div className="space-y-2">
                    <Label htmlFor="nomeNegocio" className="text-sm font-semibold text-text-dark">
                      Nome do seu Negócio *
                    </Label>
                    <Input
                      id="nomeNegocio"
                      name="nomeNegocio"
                      type="text"
                      placeholder="Digite o nome da sua empresa ou negócio"
                      value={formData.nomeNegocio}
                      onChange={handleInputChange}
                      className="h-12"
                      required
                    />
                  </div>

                  {/* Botões */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <InovaaButton
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => navigate('/')}
                      className="flex-1"
                    >
                      Voltar
                    </InovaaButton>
                    
                    <InovaaButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="flex-1"
                    >
                      Enviar via WhatsApp
                    </InovaaButton>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Informações adicionais */}
            <div className="mt-8 text-center text-sm text-text-gray">
              <p>
                Ao enviar este formulário, você será redirecionado para o WhatsApp com suas informações já preenchidas.
              </p>
              <p className="mt-2">
                Nossa equipe entrará em contato em até 24 horas para apresentar as melhores soluções para seu negócio.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FormularioContato;