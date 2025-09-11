import { InovaaButton } from "./ui/inovaa-button";
const heroWomanNew = "/lovable-uploads/24340949-b521-4c03-85fa-c42e08ccd670.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Imagem de fundo para todas as telas */}
      <img
        src={heroWomanNew}
        alt="Mulher sorrindo trabalhando com e-commerce"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay gradient para contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:from-white/90 lg:via-white/50 lg:to-transparent"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center min-h-screen">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
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

          <InovaaButton size="lg">
            Quero minha Loja Online
          </InovaaButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
