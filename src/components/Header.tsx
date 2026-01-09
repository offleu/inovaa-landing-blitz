import inovaaLogo from "../assets/inovaa-logo.png";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
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
    { name: "Consultoria Estratégica", path: "/servicos/criacao-site-ecommerce" },
    { name: "Gestão de E-commerce", path: "/servicos/gestao-ecommerce" },
    { name: "Treinamentos", path: "/servicos/treinamentos" },
    { name: "Automação e IA", path: "/servicos/ferramentas-ia" },
    { name: "Integrações e Sistemas", path: "/servicos/microservicos" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md border-b border-purple-200/30 shadow-sm' 
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 transition-all duration-300">
          <div className="flex items-center">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img 
                src={inovaaLogo} 
                alt="Inovaa Consultoria - Especialistas em E-commerce" 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center text-sm lg:text-base transition-all duration-300 hover:scale-105 text-text-gray hover:text-purple-brand"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Serviços
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-xl py-2 z-50 animate-fade-in bg-white/95 backdrop-blur-md border border-gray-200">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleServiceClick}
                      className="block px-4 py-3 text-sm transition-all duration-300 hover:translate-x-1 text-text-gray hover:text-purple-brand hover:bg-purple-50"
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
              className="text-sm lg:text-base transition-all duration-300 hover:scale-105 text-text-gray hover:text-purple-brand"
            >
              Pacotes
            </a>
            <a 
              href="#como-funciona" 
              onClick={(e) => handleAnchorClick(e, '#como-funciona')}
              className="text-sm lg:text-base transition-all duration-300 hover:scale-105 text-text-gray hover:text-purple-brand"
            >
              Como Funciona
            </a>
            <Link 
              to="/formulario-contato" 
              className="text-sm lg:text-base transition-all duration-300 hover:scale-105 text-text-gray hover:text-purple-brand"
            >
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-colors text-text-gray hover:text-purple-brand"
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
          <nav className="md:hidden py-4 border-t animate-fade-in border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-1">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-text-gray hover:text-purple-brand"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 rounded-lg py-2 mx-4 animate-fade-in bg-purple-50/50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={handleServiceClick}
                      className="block px-4 py-2 text-sm transition-colors text-text-gray hover:text-purple-brand"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <a 
                href="#pacotes" 
                onClick={(e) => handleAnchorClick(e, '#pacotes')}
                className="block px-4 py-3 text-sm transition-colors text-text-gray hover:text-purple-brand"
              >
                Pacotes
              </a>
              <a 
                href="#como-funciona" 
                onClick={(e) => handleAnchorClick(e, '#como-funciona')}
                className="block px-4 py-3 text-sm transition-colors text-text-gray hover:text-purple-brand"
              >
                Como Funciona
              </a>
              <Link 
                to="/formulario-contato" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm transition-colors text-text-gray hover:text-purple-brand"
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