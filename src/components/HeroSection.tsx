import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen">

      <div className="relative flex items-center justify-between min-h-screen bg-[#fceefe] px-12">
  {/* Texto à esquerda */}
  <div className="max-w-xl">
    <h1 className="text-5xl font-bold leading-tight">
      Transforme sua ideia <br /> em um e-commerce <br />
      de <span className="text-pink-500">sucesso</span> em tempo recorde!
    </h1>
    <p className="mt-4 text-lg text-gray-600">
      Criamos sua loja virtual completa, profissional e pronta para vender
      em até 20 dias. Design exclusivo, funcionalidades completas e suporte dedicado.
    </p>
    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md">
      Quero minha Loja Online
    </button>
  </div>

  {/* Imagem à direita */}
  <div className="relative flex items-end justify-center h-full">
    <img
      src={heroWoman}
      alt="Mulher sorrindo trabalhando com e-commerce"
      className="h-[90vh] w-auto object-contain"
    />
  </div>
</div>
    </section>
  );
};

export default HeroSection;