import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  generateStars, 
  generateNebula, 
  generateHyperspaceStars,
  floatAnimation, 
  pulseGlowAnimation, 
  rotateAnimation, 
  scaleAnimation, 
  shimmerAnimation,
  lightsaberIgniteAnimation,
  saberGlowAnimation
} from '@/utils/animations';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([]);
  const [nebulae, setNebulae] = useState<ReturnType<typeof generateNebula>>([]);
  const [hyperspaceStars, setHyperspaceStars] = useState<ReturnType<typeof generateHyperspaceStars>>([]);
  const [showHyperspace, setShowHyperspace] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setStars(generateStars(300)); // More stars for space feel
    setNebulae(generateNebula(4));
    setHyperspaceStars(generateHyperspaceStars(50));
    
    // Show hyperspace effect on initial load
    setShowHyperspace(true);
    const timer = setTimeout(() => setShowHyperspace(false), 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Force hide hyperspace effect after component mounts
  useEffect(() => {
    // Ensure hyperspace is hidden after a delay
    const forceHideTimer = setTimeout(() => {
      setShowHyperspace(false);
    }, 2000);
    
    return () => clearTimeout(forceHideTimer);
  }, []);
  
  // Additional cleanup effect to ensure hyperspace is hidden when component unmounts
  useEffect(() => {
    return () => {
      setShowHyperspace(false);
    };
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
      {/* Stars background - ensuring it stays at the back with z-index */}
      <div className="star-field" style={{ zIndex: 1 }}>
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

      {/* Nebula effects - adding z-index to ensure proper layering */}
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
            zIndex: 2
          }}
          animate={scaleAnimation}
        />
      ))}

      {/* Hyperspace effect - setting z-index to 5 to ensure it stays behind content */}
      {showHyperspace && (
        <div className="absolute inset-0 z-5 overflow-hidden" style={{ pointerEvents: 'none' }}>
          <div className="absolute inset-0 bg-hyperspace opacity-80">
            {hyperspaceStars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  height: '2px',
                  width: '0',
                  transformOrigin: 'left center',
                  transform: `rotate(${star.angle}deg)`,
                  animationDelay: star.delay
                }}
                animate={{
                  width: ['0px', `${star.length}px`],
                  opacity: [0, 1, 0],
                  x: [0, star.length * 2]
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="z-30 relative max-w-5xl mx-auto mt-16 md:mt-0">
        <motion.div 
          className="animate-fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-space-saber-blue/10 text-space-white px-4 py-1.5 rounded-md text-xs md:text-sm font-medium inline-block mb-6 animate-saber-glow">
          Beyond Earth, Beyond Limits, only in Dubai, where stars permit !
          </span>
        </motion.div>
        
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-gradient">A Journey to the Stars</span><br />
          <span className="text-space-white font-light">In a Galaxy Not So Far Away</span>
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
            <div className="relative">
              <Button className="primary-button w-60 sm:w-auto flex items-center gap-2 group">
                Explore Destinations
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <motion.div 
                className="absolute -bottom-1 left-0 h-1 bg-space-saber-blue w-0"
                animate={lightsaberIgniteAnimation}
                style={{boxShadow: '0 0 10px 2px #4bd5ee'}}
              />
            </div>
          </Link>
          <Link to="/booking" onClick={handleBookingClick}>
            <div className="relative">
              <Button variant="outline" className="outlined-button w-60 sm:w-auto" style={{ animationDelay: '0.2s' }}>
                Book Your Journey
              </Button>
              <motion.div 
                className="absolute -bottom-1 left-0 h-1 bg-space-white w-0"
                animate={lightsaberIgniteAnimation}
                style={{boxShadow: '0 0 10px 2px #ffe81f', animationDelay: '0.3s'}}
              />
            </div>
          </Link>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={floatAnimation}
        >
          <ChevronDown className="text-space-light-gray" size={28} />
        </motion.div>
      </div>
      
      {/* Enhanced Gradient orbs - adding z-index to ensure they stay behind content */}
      <motion.div 
        className="absolute bottom-0 left-[20%] w-72 h-72 bg-space-cyan/20 rounded-full filter blur-[100px]"
        animate={pulseGlowAnimation}
        style={{ zIndex: 5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/4 right-[10%] w-80 h-80 bg-space-pink/10 rounded-full filter blur-[120px]"
        animate={pulseGlowAnimation}
        style={{ animationDelay: '2s', zIndex: 5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-[60%] left-[5%] w-64 h-64 bg-space-purple/10 rounded-full filter blur-[100px]"
        animate={pulseGlowAnimation}
        style={{ animationDelay: '3s', zIndex: 5 }}
      ></motion.div>

      {/* Decorative elements - adding z-index to ensure they stay behind content */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-32 h-32 border border-space-cyan/20 rounded-full"
        animate={rotateAnimation}
        style={{ zIndex: 5 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-24 h-24 border border-space-pink/20 rounded-full"
        animate={rotateAnimation}
        style={{ animationDirection: 'reverse', zIndex: 5 }}
      />
    </div>
  );
};

export default HeroSection;
