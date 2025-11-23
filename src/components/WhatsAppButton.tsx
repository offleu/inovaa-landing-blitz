import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { trackWhatsAppClick } from "../utils/tracking";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Número de WhatsApp - formato internacional sem + e sem espaços
  const whatsappNumber = "5514991302496"; // Número real da empresa
  const message = encodeURIComponent("Olá! Vim pelo site da Inovaa E-commerce e gostaria de saber mais sobre os serviços.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClick = () => {
    trackWhatsAppClick('floating_button');
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main Button */}
        <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          
          {/* Tooltip Text */}
          <span 
            className={`whitespace-nowrap font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden ${
              isHovered ? 'max-w-xs opacity-100 pr-2' : 'max-w-0 opacity-0'
            }`}
          >
            Fale Conosco
          </span>
        </div>

        {/* Badge de notificação */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
          1
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
