import inovaaLogo from "../assets/inovaa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <img 
            src={inovaaLogo} 
            alt="Inovaa E-commerce" 
            className="h-10 sm:h-12 w-auto mx-auto"
          />
          
          <p className="text-base sm:text-lg font-semibold text-text-dark px-4">
            Tudo para seu e-commerce em um único lugar.
          </p>
          
          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-text-gray px-4">
            <p>Copyright 2025 - Inovaa E-commerce. Todos os direitos reservados.</p>
            <p>Desenvolvido por Inovaa E-commerce</p>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-primary"></div>
    </footer>
  );
};

export default Footer;