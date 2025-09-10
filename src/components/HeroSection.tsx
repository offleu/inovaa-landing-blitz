import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen">
      {/* Yellow Footer Bar at top */}
      <div className="bg-gradient-secondary h-12 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 text-white font-semibold text-sm">
            <span>INOVAA</span>
            <span>INOVAA</span>
            <span>INOVAA</span>
            <span>INOVAA</span>
            <span>INOVAA</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                Transforme sua ideia em um e-commerce de{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  sucesso
                </span>{" "}
                em tempo recorde!
              </h1>
              
              <p className="text-lg md:text-xl text-text-gray leading-relaxed max-w-2xl">
                Criamos sua loja virtual completa, profissional e pronta para vender em até 20 dias. 
                Design exclusivo, funcionalidades completas e suporte dedicado.
              </p>
            </div>
            
            <InovaaButton size="lg">
              Quero minha Loja Online
            </InovaaButton>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110"></div>
              <img 
                src={heroWoman} 
                alt="Mulher sorrindo trabalhando com e-commerce" 
                className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;