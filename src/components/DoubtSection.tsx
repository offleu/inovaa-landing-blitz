import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const DoubtSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 bg-white" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Ainda tem dúvidas?{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              FALE COM UM ESPECIALISTA!
            </span>
          </h2>
          
          <p className="text-xl text-text-gray leading-relaxed max-w-2xl mx-auto">
            Nossa equipe de consultores está pronta para analisar seu negócio e propor a melhor estratégia. 
            <strong className="text-text-dark"> Diagnóstico gratuito!</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InovaaButton size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
              <Link to="/formulario-contato">
                📋 Solicitar Diagnóstico
              </Link>
            </InovaaButton>
            
            <a
              href="https://wa.me/5514991302496?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20para%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto min-w-[200px]"
            >
              💬 Chat no WhatsApp
            </a>
          </div>

          {/* Urgência adicional */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-yellow-800 font-medium">
              ⚡ <strong>Vagas limitadas:</strong> Nossa agenda de consultoria tem capacidade restrita para garantir qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtSection;