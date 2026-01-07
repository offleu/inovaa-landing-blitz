import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const DoubtSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center space-y-5 sm:space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark px-2">
            Ainda tem dúvidas?{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent block sm:inline">
              FALE COM UM ESPECIALISTA!
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-text-gray leading-relaxed max-w-2xl mx-auto px-2">
            Nossa equipe de consultores está pronta para analisar seu negócio e propor a melhor estratégia. 
            <strong className="text-text-dark"> Diagnóstico gratuito!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <InovaaButton size="default" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <Link to="/formulario-contato">
                📋 Solicitar Diagnóstico
              </Link>
            </InovaaButton>
            
            <a
              href="https://wa.me/5514991302496?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20para%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto text-sm sm:text-base"
            >
              💬 Chat no WhatsApp
            </a>
          </div>

          {/* Urgência adicional */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 max-w-md mx-auto mx-4 sm:mx-auto">
            <p className="text-xs sm:text-sm text-yellow-800 font-medium">
              ⚡ <strong>Vagas limitadas:</strong> Nossa agenda de consultoria tem capacidade restrita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSection;