import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      
      {/* Imagem de fundo */}
      <img
        src={heroWoman}
        alt="Mulher sorrindo trabalhando com e-commerce"
        className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center"
      />

      {/* Overlay gradient (opcional, para melhorar contraste do texto) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
            Transforme sua ideia em um e-commerce de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              sucesso
            </span>{" "}
            em tempo recorde!
          </h1>

          <p className="text-lg md:text-xl text-text-gray leading-relaxed">
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
