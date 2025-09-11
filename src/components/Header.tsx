import inovaaLogo from "../assets/inovaa-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <img 
              src={inovaaLogo} 
              alt="Inovaa E-commerce - Criação de Loja Virtual" 
              className="h-6 sm:h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#servicos" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-colors">
              Serviços
            </a>
            <a href="#pacotes" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-colors">
              Pacotes
            </a>
            <a href="#como-funciona" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-colors">
              Como Funciona
            </a>
            <a href="#contato" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-colors">
              Contato
            </a>
          </nav>
          
          {/* Menu mobile */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6 text-text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;