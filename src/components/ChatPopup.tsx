import { useState, useEffect } from "react";
import { X, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { trackChatPopupInteraction, trackWhatsAppClick } from "../utils/tracking";

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    // Verificar se já foi fechado nesta sessão
    const wasClosed = sessionStorage.getItem("chatPopupClosed");
    if (wasClosed) {
      setIsClosed(true);
      return;
    }

    // Mostrar popup após 10 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      trackChatPopupInteraction('popup_shown');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem("chatPopupClosed", "true");
    trackChatPopupInteraction('popup_closed');
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    trackChatPopupInteraction(`option_clicked_${option}`);
    trackWhatsAppClick('chat_popup');
  };

  if (isClosed || !isVisible) return null;

  const quickOptions = [
    { 
      id: "pricing", 
      label: "Preços e Pacotes",
      message: "Quero saber mais sobre os pacotes e preços"
    },
    { 
      id: "ecommerce", 
      label: "Criar E-commerce",
      message: "Preciso criar uma loja virtual"
    },
    { 
      id: "landing", 
      label: "Landing Page",
      message: "Quero uma landing page"
    },
    { 
      id: "marketing", 
      label: "Marketing Digital",
      message: "Interesse em marketing digital"
    }
  ];

  const whatsappNumber = "5514991302496"; // Número real da empresa
  const getWhatsAppUrl = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-96 max-w-[calc(100vw-3rem)] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-primary p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base">
                Olá! 👋
              </h3>
              <p className="text-white/90 text-xs">
                Como podemos ajudar?
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Fechar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4 bg-gray-50">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm text-text-gray leading-relaxed">
              Estamos aqui para te ajudar! Escolha uma das opções abaixo ou fale diretamente com um especialista.
            </p>
          </div>

          {/* Quick Options */}
          <div className="space-y-2">
            {quickOptions.map((option) => (
              <a
                key={option.id}
                href={getWhatsAppUrl(option.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOptionClick(option.id)}
                className="block bg-white hover:bg-purple-50 rounded-lg p-3 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-purple-brand group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-dark group-hover:text-purple-brand transition-colors">
                    {option.label}
                  </span>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-purple-brand transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA Principal */}
          <div className="pt-2 space-y-2">
            <a
              href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de falar com um especialista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 font-semibold text-center transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            
            <Link
              to="/formulario-contato"
              onClick={handleClose}
              className="block w-full bg-purple-brand hover:bg-purple-dark text-white rounded-lg py-3 px-4 font-semibold text-center transition-all duration-300 hover:shadow-lg"
            >
              Preencher Formulário
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="text-center pt-2">
            <p className="text-xs text-text-gray">
              ⚡ Resposta em até 5 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
