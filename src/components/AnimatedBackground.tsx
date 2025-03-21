import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { generateStars, generateNebula, generateHyperspaceStars } from '@/utils/animations';

interface AnimatedBackgroundProps {
  density?: number;
  showNebula?: boolean;
  showHyperspace?: boolean;
  hyperspaceDuration?: number;
}

const AnimatedBackground = ({
  density = 100,
  showNebula = true,
  showHyperspace = false,
  hyperspaceDuration = 1500
}: AnimatedBackgroundProps) => {
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([]);
  const [nebulae, setNebulae] = useState<ReturnType<typeof generateNebula>>([]);
  const [hyperspaceStars, setHyperspaceStars] = useState<ReturnType<typeof generateHyperspaceStars>>([]);
  const [isHyperspaceActive, setIsHyperspaceActive] = useState(showHyperspace);

  useEffect(() => {
    setStars(generateStars(density));
    if (showNebula) {
      setNebulae(generateNebula(4));
    }
    if (showHyperspace) {
      setHyperspaceStars(generateHyperspaceStars(50));
      setIsHyperspaceActive(true);
      
      const timer = setTimeout(() => {
        setIsHyperspaceActive(false);
      }, hyperspaceDuration);
      
      return () => clearTimeout(timer);
    }
  }, [density, showNebula, showHyperspace, hyperspaceDuration]);

  return (
    <div className="animated-background">
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
              color: star.color
            }}
          />
        ))}
      </div>

      {/* Nebula effects */}
      {showNebula && nebulae.map((nebula, i) => (
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
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hyperspace effect */}
      {isHyperspaceActive && (
        <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: 'none', zIndex: 3 }}>
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
    </div>
  );
};

export default AnimatedBackground;