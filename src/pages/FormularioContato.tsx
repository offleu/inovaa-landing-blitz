import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { InovaaButton } from "../components/ui/inovaa-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { trackFormSubmit, trackConversion } from "../utils/tracking";

// SEO Meta Tags
const updateContactMeta = () => {
  document.title = "Contato | Agende sua Consultoria E-commerce em Marília SP - Inovaa";
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", "Entre em contato com a Inovaa Consultoria em Marília SP. Agende sua consultoria gratuita para e-commerce, treinamentos ou diagnóstico empresarial. Resposta em até 24h!");
  }
};

// Comprehensive validation schema with security measures
const contactSchema = z.object({
  nome: z.string()
    .trim()
    .min(2, "Nome deve ter no mínimo 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres")
    .toLowerCase(),
  telefone: z.string()
    .trim()
    .min(10, "Telefone deve ter no mínimo 10 dígitos")
    .max(20, "Telefone deve ter no máximo 20 caracteres")
    .regex(/^[\d\s\(\)\-\+]+$/, "Telefone contém caracteres inválidos"),
  nomeNegocio: z.string()
    .trim()
    .min(2, "Nome do negócio deve ter no mínimo 2 caracteres")
    .max(100, "Nome do negócio deve ter no máximo 100 caracteres")
});

const FormularioContato = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    nomeNegocio: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    updateContactMeta();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Comprehensive validation using Zod
    try {
      const validatedData = contactSchema.parse(formData);
      
      // Construct WhatsApp message with sanitized data
      const mensagem = `Olá! Gostaria de solicitar um atendimento.

*Dados de contato:*
• Nome: ${validatedData.nome}
• Email: ${validatedData.email}
• Telefone: ${validatedData.telefone}
• Nome do Negócio: ${validatedData.nomeNegocio}

Aguardo retorno para mais informações.`;

      const whatsappUrl = `https://api.whatsapp.com/send/?phone=5514991302496&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`;
      
      // Track conversion
      trackFormSubmit();
      trackConversion('form_lead'); // SUBSTITUIR pelo label real
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast.success("Redirecionando para o WhatsApp...");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Map Zod errors to field names
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
        
        // Show first error message
        const firstError = error.errors[0];
        toast.error(firstError.message);
      } else {
        toast.error("Erro ao processar o formulário. Tente novamente.");
      }
    }
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
                Solicite um Atendimento
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
                      className={`h-12 ${errors.nome ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.nome && (
                      <p className="text-sm text-red-600">{errors.nome}</p>
                    )}
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
                      className={`h-12 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email}</p>
                    )}
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
                      className={`h-12 ${errors.telefone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.telefone && (
                      <p className="text-sm text-red-600">{errors.telefone}</p>
                    )}
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
                      className={`h-12 ${errors.nomeNegocio ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      required
                    />
                    {errors.nomeNegocio && (
                      <p className="text-sm text-red-600">{errors.nomeNegocio}</p>
                    )}
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