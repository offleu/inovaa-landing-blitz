import inovaaLogo from "../assets/inovaa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <img 
            src={inovaaLogo} 
            alt="Inovaa Consultoria para E-commerce" 
            className="h-10 sm:h-12 w-auto mx-auto"
          />
          
          <p className="text-base sm:text-lg font-semibold text-text-dark px-4">
            Consultoria estratégica para e-commerces de alta performance.
          </p>
          
          <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm text-text-gray px-4">
            {/* Company Information */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-6 space-y-1 sm:space-y-0">
                <p><span className="font-semibold">CNPJ:</span> 59.046.070/0001-23</p>
                <p><span className="font-semibold">Razão Social:</span> Inovaa Consultoria Empresarial</p>
              </div>
              <div className="text-center">
                <p><span className="font-semibold">Endereço:</span> Rua Alcindo Saul Amaral, 135</p>
                <p>Marília, SP - CEP: 17520-183</p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="space-y-1 border-t border-text-gray/20 pt-4">
              <p>Copyright 2025 - Inovaa Consultoria Empresarial. Todos os direitos reservados.</p>
              <p>Especialistas em e-commerce de alta performance</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="h-2 bg-gradient-primary"></div>
    </footer>
  );
};

export default Footer;