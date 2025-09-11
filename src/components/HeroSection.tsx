import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-start overflow-hidden">

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row items-start md:items-end justify-between min-h-screen">

        {/* Texto */}
        <div className="max-w-2xl space-y-6 sm:space-y-8 md:mr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
            Transforme sua ideia em um e-commerce de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              sucesso
            </span>{" "}
            em tempo recorde!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-gray leading-relaxed">
            Criamos sua loja virtual completa, profissional e pronta para vender em até 20 dias. 
            Design exclusivo, funcionalidades completas e suporte dedicado.
          </p>

          <div>
            <InovaaButton size="lg">
              Quero minha Loja Online
            </InovaaButton>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={heroWoman}
            alt="Mulher sorrindo trabalhando com e-commerce"
            className="w-full max-w-md md:max-w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
