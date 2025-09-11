import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Mobile: Layout em coluna */}
      <div className="lg:hidden relative z-10 w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
              Transforme sua ideia em um e-commerce de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                sucesso
              </span>{" "}
              em tempo recorde!
            </h1>

            <p className="text-base sm:text-lg text-text-gray leading-relaxed px-2">
              Criamos sua loja virtual completa, profissional e pronta para vender em até 20 dias. 
              Design exclusivo, funcionalidades completas e suporte dedicado.
            </p>

            <InovaaButton size="lg">
              Quero minha Loja Online
            </InovaaButton>
          </div>
        </div>
        
        {/* Imagem da moça abaixo do texto no mobile */}
        <div className="mt-8 px-4">
          <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden">
            <img
              src={heroWoman}
              alt="Mulher sorrindo trabalhando com e-commerce"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Desktop: Layout lado a lado */}
      <div className="hidden lg:flex relative w-full min-h-screen">
        {/* Imagem de fundo desktop */}
        <img
          src={heroWoman}
          alt="Mulher sorrindo trabalhando com e-commerce"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay gradient para contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent"></div>

        {/* Conteúdo do Hero desktop */}
        <div className="relative z-10 container mx-auto px-4 py-12 flex items-center">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-5xl xl:text-6xl font-bold text-text-dark leading-tight">
              Transforme sua ideia em um e-commerce de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                sucesso
              </span>{" "}
              em tempo recorde!
            </h1>

            <p className="text-xl text-text-gray leading-relaxed">
              Criamos sua loja virtual completa, profissional e pronta para vender em até 20 dias. 
              Design exclusivo, funcionalidades completas e suporte dedicado.
            </p>

            <InovaaButton size="lg">
              Quero minha Loja Online
            </InovaaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
