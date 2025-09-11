import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section 
      className="relative bg-gradient-hero min-h-screen flex items-center"
      style={{ backgroundImage: `url(${heroWoman})`, backgroundSize: "cover", backgroundPosition: "center bottom" }}
    >
      <div className="container mx-auto px-4 py-12">
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
