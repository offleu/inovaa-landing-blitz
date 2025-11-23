import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import heroWoman from "../assets/hero-woman.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-start overflow-hidden">

      {/* Background desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroWoman})` }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 pt-16 md:pt-24 flex flex-col md:flex-row items-start justify-between min-h-screen">

        {/* Texto */}
        <div className="max-w-2xl space-y-6 sm:space-y-8 md:mr-8 mt-8 md:mt-0">
          {/* Badge de prova social */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
            <span className="text-2xl">🔥</span>
            <span className="text-sm font-semibold text-purple-brand">+500 lojas criadas com sucesso</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
            Sua Loja Virtual{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pronta em 20 Dias
            </span>{" "}
            ou seu dinheiro de volta!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-gray leading-relaxed">
            <strong className="text-text-dark">Do zero às vendas em tempo recorde:</strong> Loja completa, design profissional, 
            produtos cadastrados e integração com meios de pagamento. Tudo pronto para você começar a vender!
          </p>

          {/* Benefícios rápidos */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span className="text-sm font-medium text-text-dark">Sem mensalidade</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span className="text-sm font-medium text-text-dark">Suporte dedicado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <span className="text-green-500 font-bold text-lg">✓</span>
              <span className="text-sm font-medium text-text-dark">Garantia total</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <InovaaButton size="lg" className="group" asChild>
              <Link to="/formulario-contato">
                <span>Criar Minha Loja Agora</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </InovaaButton>
            
            <a 
              href="https://wa.me/5514991302496?text=Olá!%20Quero%20saber%20mais%20sobre%20criar%20minha%20loja%20virtual"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              💬 Falar com Especialista
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-brand border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-8 h-8 rounded-full bg-pink-brand border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
                <div className="w-8 h-8 rounded-full bg-purple-blue border-2 border-white flex items-center justify-center text-white text-xs font-bold">J</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-text-dark">4.9/5 ⭐</div>
                <div className="text-xs text-text-gray">200+ avaliações</div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem Mobile */}
        <div className="md:hidden w-full mt-8 flex justify-center">
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
