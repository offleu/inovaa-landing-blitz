import inovaaLogo from "../assets/inovaa-logo.png";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 transition-all duration-300">
          <div className="flex items-center">
            <a href="/" className="transition-transform duration-300 hover:scale-105">
              <img 
                src={inovaaLogo} 
                alt="Inovaa E-commerce - Criação de Loja Virtual" 
                className="h-6 sm:h-8 w-auto"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="relative">
              <button 
                className="flex items-center text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Serviços
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 animate-fade-in"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="/servicos/criacao-site-ecommerce" className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1">
                    Criação de Site e E-commerce
                  </a>
                  <a href="/servicos/gestao-ecommerce" className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1">
                    Gestão de E-commerce
                  </a>
                  <a href="/servicos/marketing-digital" className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1">
                    Marketing Digital
                  </a>
                  <a href="/servicos/social-media" className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1">
                    Social Media
                  </a>
                  <a href="/servicos/ferramentas-ia" className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1">
                    Ferramentas de IA
                  </a>
                  <a href="/servicos/microservicos" className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1">
                    Microserviços
                  </a>
                </div>
              )}
            </div>
            <a href="#pacotes" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105">
              Pacotes
            </a>
            <a href="#como-funciona" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105">
              Como Funciona
            </a>
            <a href="#contato" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105">
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