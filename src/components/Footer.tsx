import inovaaLogo from "../assets";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <img 
            src={inovaaLogo} 
            alt="Inovaa E-commerce" 
            className="h-12 w-auto mx-auto"
          />
          
          <p className="text-lg font-semibold text-text-dark">
            Tudo para seu e-commerce em um único lugar.
          </p>
          
          <div className="space-y-2 text-sm text-text-gray">
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