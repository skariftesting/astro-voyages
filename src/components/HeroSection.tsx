import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { generateStars, generateNebula, floatAnimation, pulseGlowAnimation, rotateAnimation, scaleAnimation, shimmerAnimation } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [stars, setStars] = useState<any[]>([]);
  const [nebulae, setNebulae] = useState<any[]>([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setStars(generateStars(200));
    setNebulae(generateNebula(4));
  }, []);

  const handleBookingClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast({
        title: "Authentication Required",
        description: "Please log in to book your space journey.",
        variant: "destructive",
      });
      navigate('/login');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden">
      {/* Stars background */}
      <div className="star-field">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`star ${star.size}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              color: star.color,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      {nebulae.map((nebula, i) => (
        <motion.div
          key={i}
          className="nebula"
          style={{
            left: `${nebula.x}%`,
            top: `${nebula.y}%`,
            width: `${nebula.size}px`,
            height: `${nebula.size}px`,
            backgroundColor: nebula.color,
            filter: `blur(${nebula.blur}px)`,
          }}
          animate={scaleAnimation}
        />
      ))}

      {/* Content */}
      <div className="z-10 max-w-5xl mx-auto mt-16 md:mt-0">
        <motion.div 
          className="animate-fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6 animate-glow shimmer">
            STARPORT DUBAI
          </span>
        </motion.div>
        
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-gradient">Beyond Earth, Beyond Limits</span><br />
          <span className="text-space-white font-light">Only in Dubai, Where Stars Permit!</span>
        </motion.h1>
        
        <motion.p 
          className="section-subtitle mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Discover the thrill of space travel with our premium voyages to orbital stations, 
          lunar resorts, and beyond. The ultimate adventure awaits.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link to="/destinations">
            <Button className="primary-button w-60 sm:w-auto flex items-center gap-2 group animate-float">
              Explore Destinations
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/booking" onClick={handleBookingClick}>
            <Button variant="outline" className="outlined-button w-60 sm:w-auto animate-float" style={{ animationDelay: '0.2s' }}>
              Book Your Flight
            </Button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={floatAnimation}
        >
          <ChevronDown className="text-space-light-gray" size={28} />
        </motion.div>
      </div>
      
      {/* Enhanced Gradient orbs */}
      <motion.div 
        className="absolute bottom-0 left-[20%] w-72 h-72 bg-space-cyan/20 rounded-full filter blur-[100px]"
        animate={pulseGlowAnimation}
      ></motion.div>
      <motion.div 
        className="absolute top-1/4 right-[10%] w-80 h-80 bg-space-pink/10 rounded-full filter blur-[120px]"
        animate={pulseGlowAnimation}
        style={{ animationDelay: '2s' }}
      ></motion.div>
      <motion.div 
        className="absolute top-[60%] left-[5%] w-64 h-64 bg-space-purple/10 rounded-full filter blur-[100px]"
        animate={pulseGlowAnimation}
        style={{ animationDelay: '3s' }}
      ></motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-32 h-32 border border-space-cyan/20 rounded-full"
        animate={rotateAnimation}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-24 h-24 border border-space-pink/20 rounded-full"
        animate={rotateAnimation}
        style={{ animationDirection: 'reverse' }}
      />
    </div>
  );
};

export default HeroSection;
