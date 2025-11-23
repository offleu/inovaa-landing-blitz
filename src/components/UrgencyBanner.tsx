import { Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Definir countdown para 24 horas a partir de agora
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setHours(23, 59, 59, 999);
      
      const difference = tomorrow.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-sm sm:text-base">
              OFERTA ESPECIAL!
            </span>
          </div>
          
          <span className="text-xs sm:text-sm font-medium">
            Ganhe 15% de desconto em qualquer pacote
          </span>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            <TrendingUp className="w-4 h-4" />
            <div className="flex gap-1 font-mono font-bold text-sm">
              <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span>:</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span>:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
