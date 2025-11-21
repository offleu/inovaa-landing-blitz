import { motion } from "framer-motion";

const CasesSection = () => {
  const cases = [
    {
      name: "Bioera Nutrition",
      url: "https://www.bioeranutrition.com.br/",
      image: "/placeholder.svg"
    },
    {
      name: "Bella Aura Beauty",
      url: "https://bellaaurabeauty.commercesuite.com.br/loja/loja.php?loja=1437449&iniSession=1",
      image: "/placeholder.svg"
    },
    {
      name: "Maria Makeup",
      url: "https://www.mariamakeup.com.br/",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto">
            Conheça alguns projetos desenvolvidos pela Inovaa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {cases.map((caso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Phone Frame */}
                <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <iframe
                      src={caso.url}
                      className="w-full h-full border-0"
                      title={caso.name}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Side Button */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
                  <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r"></div>
                  <div className="absolute left-0 top-44 w-1 h-8 bg-gray-800 rounded-r"></div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0 blur-2xl rounded-[3rem]"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-text-dark text-center">
                {caso.name}
              </h3>
              <a
                href={caso.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-primary hover:underline"
              >
                Visitar Site
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;