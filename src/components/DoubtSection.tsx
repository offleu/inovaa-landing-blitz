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
              FALE COM A GENTE!!!
            </span>
          </h2>
          
          <p className="text-xl text-text-gray leading-relaxed max-w-2xl mx-auto">
            Deixe que a Inovaa E-commerce cuida de tudo: loja, produtos e design. 
            Você foca no que realmente importa: vender e crescer.
          </p>
          
          <InovaaButton size="lg" className="mx-auto" asChild>
            <Link to="/formulario-contato">
              Tirar dúvidas
            </Link>
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default DoubtSection;