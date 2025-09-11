import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
<<<<<<< HEAD
    <section className="relative w-full min-h-screen flex items-start overflow-hidden">

      {/* Background desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroWoman})` }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row items-start md:items-end justify-between min-h-screen">

        {/* Texto */}
        <div className="max-w-2xl space-y-6 sm:space-y-8 md:mr-8 md:-mt-16">
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
=======
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

>>>>>>> parent of bd3c704 (asdas)
            <InovaaButton size="lg">
              Quero minha Loja Online
            </InovaaButton>
          </div>
<<<<<<< HEAD
=======

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end items-end w-full h-full">
            <img
              src={heroWoman}
              alt="Mulher sorrindo trabalhando com e-commerce"
              className="max-h-[90vh] lg:max-h-[95vh] min-h-[400px] w-auto object-contain"
            />
          </div>
>>>>>>> parent of bd3c704 (asdas)
        </div>

        {/* Imagem Mobile */}
        <div className="md:hidden w-full mt-16 flex justify-center">
          <img
            src={heroWoman}
            alt="Mulher sorrindo trabalhando com e-commerce"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
