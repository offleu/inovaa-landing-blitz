import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-56px)] sm:min-h-screen flex items-start overflow-hidden">

      {/* Background desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroWoman})` }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 pt-8 sm:pt-16 md:pt-24 flex flex-col md:flex-row items-start justify-between">

        {/* Texto */}
        <div className="max-w-2xl space-y-4 sm:space-y-6 md:mr-8">
          {/* Badge de prova social */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-md">
            <span className="text-xl sm:text-2xl">📈</span>
            <span className="text-xs sm:text-sm font-semibold text-purple-brand">+500 empresas transformadas</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-dark leading-tight">
            Consultoria Estratégica para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              E-commerces de Alta Performance
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-text-gray leading-relaxed">
            <strong className="text-text-dark">Transformamos sua operação digital em resultados:</strong> Análise estratégica, 
            implementação de processos e acompanhamento contínuo.
          </p>

          {/* Benefícios rápidos */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm">
              <span className="text-green-500 font-bold text-base sm:text-lg">✓</span>
              <span className="text-xs sm:text-sm font-medium text-text-dark">Metodologia comprovada</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm">
              <span className="text-green-500 font-bold text-base sm:text-lg">✓</span>
              <span className="text-xs sm:text-sm font-medium text-text-dark">Consultores especializados</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm">
              <span className="text-green-500 font-bold text-base sm:text-lg">✓</span>
              <span className="text-xs sm:text-sm font-medium text-text-dark">Resultados mensuráveis</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <InovaaButton size="default" className="group w-full sm:w-auto" asChild>
              <Link to="/formulario-contato">
                <span className="text-sm sm:text-base">Diagnóstico Gratuito</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </InovaaButton>
            
            <a 
              href="https://wa.me/5514991302496?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20para%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              💬 Falar com Consultor
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-brand border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-brand border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-blue border-2 border-white flex items-center justify-center text-white text-xs font-bold">J</div>
              </div>
              <div className="text-xs sm:text-sm">
                <div className="font-semibold text-text-dark">4.9/5 ⭐</div>
                <div className="text-xs text-text-gray">200+ avaliações</div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem Mobile */}
        <div className="md:hidden w-full mt-6 flex justify-center">
          <img
            src={heroWoman}
            alt="Mulher sorrindo trabalhando com e-commerce"
            className="w-full max-w-xs sm:max-w-sm object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
