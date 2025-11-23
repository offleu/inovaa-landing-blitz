import inovaaLogo from "../assets/inovaa-logo.png";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    { name: "Criação de Site e E-commerce", path: "/servicos/criacao-site-ecommerce" },
    { name: "Gestão de E-commerce", path: "/servicos/gestao-ecommerce" },
    { name: "Marketing Digital", path: "/servicos/marketing-digital" },
    { name: "Social Media", path: "/servicos/social-media" },
    { name: "Ferramentas de IA", path: "/servicos/ferramentas-ia" },
    { name: "Microserviços", path: "/servicos/microservicos" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 transition-all duration-300">
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img 
                src={inovaaLogo} 
                alt="Inovaa E-commerce - Criação de Loja Virtual" 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Serviços
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleServiceClick}
                      className="block px-4 py-3 text-sm text-text-gray hover:text-purple-brand hover:bg-gray-50 transition-all duration-300 hover:translate-x-1"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="#pacotes" 
              onClick={(e) => handleAnchorClick(e, '#pacotes')}
              className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105"
            >
              Pacotes
            </a>
            <a 
              href="#como-funciona" 
              onClick={(e) => handleAnchorClick(e, '#como-funciona')}
              className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105"
            >
              Como Funciona
            </a>
            <Link to="/formulario-contato" className="text-sm lg:text-base text-text-gray hover:text-purple-brand transition-all duration-300 hover:scale-105">
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-text-gray hover:text-purple-brand transition-colors"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="space-y-1">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-text-gray hover:text-purple-brand transition-colors"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2 mx-4 animate-fade-in">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleServiceClick}
                      className="block px-4 py-2 text-sm text-text-gray hover:text-purple-brand transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <a 
                href="#pacotes" 
                onClick={(e) => handleAnchorClick(e, '#pacotes')}
                className="block px-4 py-3 text-sm text-text-gray hover:text-purple-brand transition-colors"
              >
                Pacotes
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleAnchorClick(e, '#como-funciona')}
                className="block px-4 py-3 text-sm text-text-gray hover:text-purple-brand transition-colors"
              >
                Como Funciona
              </a>
              <Link 
                to="/formulario-contato" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm text-text-gray hover:text-purple-brand transition-colors"
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;