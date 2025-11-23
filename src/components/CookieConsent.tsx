import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

// Declaração de tipo para gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Mostrar banner após 1 segundo
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    
    // Inicializar Google Analytics se ainda não foi inicializado
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-brand/10 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-purple-brand" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-text-dark mb-2">
                Cookies e Privacidade
              </h3>
              <p className="text-xs sm:text-sm text-text-gray mb-4 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. 
                Ao aceitar, você concorda com o uso de cookies do Google Analytics para nos ajudar a entender como você usa nosso site.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-purple-brand text-white rounded-lg font-medium text-sm hover:bg-purple-dark transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Aceitar Cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-gray-100 text-text-gray rounded-lg font-medium text-sm hover:bg-gray-200 transition-all duration-300"
                >
                  Recusar
                </button>
              </div>
            </div>

            <button
              onClick={handleDecline}
              className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
