
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { generateStars } from '@/utils/animations';

const HeroSection = () => {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    setStars(generateStars(150));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      {/* Stars background */}
      <div className="star-field">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`star ${star.size} animate-star-twinkle`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="z-10 max-w-5xl mx-auto mt-16 md:mt-0">
        <div className="animate-fade-in">
          <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
            STARPORT DUBAI
          </span>
        </div>
        
        <h1 className="section-title animate-slide-down" style={{ animationDelay: '0.2s' }}>
          <span className="text-gradient">Beyond Earth, Beyond Limits</span><br />
          <span className="text-space-white font-light">only in Dubai</span>
        </h1>
        
        <p className="section-subtitle mx-auto animate-slide-down" style={{ animationDelay: '0.4s' }}>
          Discover the thrill of space travel with our premium voyages to orbital stations, 
          lunar resorts, and beyond. The ultimate adventure awaits.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Link to="/destinations">
            <Button className="primary-button w-60 sm:w-auto flex items-center gap-2 group">
              Explore Destinations
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/booking">
            <Button variant="outline" className="outlined-button w-60 sm:w-auto">
              Book Your Flight
            </Button>
          </Link>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-space-light-gray" size={28} />
        </div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-[20%] w-72 h-72 bg-space-cyan/20 rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute top-1/4 right-[10%] w-80 h-80 bg-space-pink/10 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[60%] left-[5%] w-64 h-64 bg-space-purple/10 rounded-full filter blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default HeroSection;
