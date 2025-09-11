import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen">
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
          <div className="relative flex justify-center lg:justify-end w-full">
            <img
              src={heroWoman}
              alt="Mulher sorrindo trabalhando com e-commerce"
              className="w-3/4 md:w-2/3 lg:w-auto lg:h-[90vh] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
