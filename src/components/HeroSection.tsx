import { InovaaButton } from "./ui/inovaa-button";
const heroWomanNew = "/lovable-uploads/24340949-b521-4c03-85fa-c42e08ccd670.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white">
      {/* Layout Mobile */}
      <div className="lg:hidden">
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
        
        {/* Imagem abaixo do texto no mobile */}
        <div className="px-4">
          <img
            src={heroWomanNew}
            alt="Mulher sorrindo trabalhando com e-commerce"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden lg:flex min-h-screen items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-8">
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

            {/* Imagem à direita */}
            <div className="flex justify-end">
              <img
                src={heroWomanNew}
                alt="Mulher sorrindo trabalhando com e-commerce"
                className="w-full max-w-lg h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
