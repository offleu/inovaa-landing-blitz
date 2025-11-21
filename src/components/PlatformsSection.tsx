const PlatformsSection = () => {
  const platforms = [
    { name: "Nuvemshop", url: "https://www.nuvemshop.com.br/" },
    { name: "Tray", url: "https://tray.com.br/" },
    { name: "Yampi", url: "https://www.yampi.com.br/" },
    { name: "Shopify", url: "https://www.shopify.com/br" },
  ];

  // Duplicar as plataformas para criar loop infinito suave
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-dark mb-2">
            Plataformas de E-commerce
          </h2>
          <p className="text-sm sm:text-base text-text-gray">
            Trabalhamos com as principais plataformas do mercado
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradientes nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Container do carrossel */}
          <div className="flex animate-scroll">
            {duplicatedPlatforms.map((platform, index) => (
              <div
                key={`${platform.name}-${index}`}
                className="flex-shrink-0 mx-8 sm:mx-12"
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-32 h-16 sm:w-40 sm:h-20 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300">
                    <span className="text-lg sm:text-xl font-bold text-text-dark">
                      {platform.name}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs sm:text-sm text-text-gray">
            E muitas outras plataformas personalizadas
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PlatformsSection;