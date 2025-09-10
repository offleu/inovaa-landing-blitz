import inovaaLogo from "../assets/inovaa-logo.png";

const Header = () => {
  return (
    <header className="top-12 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={inovaaLogo} 
              alt="Inovaa E-commerce - Criação de Loja Virtual" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-text-gray hover:text-purple-brand transition-colors">
              Serviços
            </a>
            <a href="#pacotes" className="text-text-gray hover:text-purple-brand transition-colors">
              Pacotes
            </a>
            <a href="#como-funciona" className="text-text-gray hover:text-purple-brand transition-colors">
              Como Funciona
            </a>
            <a href="#contato" className="text-text-gray hover:text-purple-brand transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;