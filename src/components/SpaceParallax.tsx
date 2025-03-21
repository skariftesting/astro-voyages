import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SpaceParallaxProps {
  children: React.ReactNode;
  starDensity?: 'low' | 'medium' | 'high';
  parallaxStrength?: 'subtle' | 'medium' | 'strong';
  showPlanets?: boolean;
}

const SpaceParallax = ({
  children,
  starDensity = 'medium',
  parallaxStrength = 'medium',
  showPlanets = true
}: SpaceParallaxProps) => {
  const { scrollY } = useScroll();
  const [stars, setStars] = useState<Array<{x: number; y: number; size: number; opacity: number}>>([]);
  const [planets, setPlanets] = useState<Array<{x: number; y: number; size: number; image: string}>>([]);
  
  // Map density to star count
  const densityMap = {
    low: 50,
    medium: 100,
    high: 200
  };
  
  // Map parallax strength to movement multiplier
  const strengthMap = {
    subtle: 0.2,
    medium: 0.5,
    strong: 0.8
  };
  
  // Generate stars on component mount
  useEffect(() => {
    const starCount = densityMap[starDensity];
    const generatedStars = Array.from({ length: starCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3
    }));
    
    setStars(generatedStars);
    
    if (showPlanets) {
      // Planet images (could be replaced with actual planet images)
      const planetImages = [
        '/public/planets/planet1.svg',
        '/public/planets/planet2.svg',
        '/public/planets/planet3.svg',
        '/public/planets/planet4.svg'
      ];
      
      // Generate 2-4 planets
      const planetCount = Math.floor(Math.random() * 3) + 2;
      const generatedPlanets = Array.from({ length: planetCount }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 50 + 30, // Planets are bigger than stars
        image: planetImages[Math.floor(Math.random() * planetImages.length)]
      }));
      
      setPlanets(generatedPlanets);
    }
  }, [starDensity, showPlanets]);
  
  // Create parallax effect for different star layers
  const y1 = useTransform(scrollY, [0, 1000], [0, 100 * strengthMap[parallaxStrength]]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200 * strengthMap[parallaxStrength]]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 300 * strengthMap[parallaxStrength]]);
  
  // Split stars into three layers for different parallax effects
  const starsLayer1 = stars.slice(0, stars.length / 3);
  const starsLayer2 = stars.slice(stars.length / 3, (stars.length / 3) * 2);
  const starsLayer3 = stars.slice((stars.length / 3) * 2);
  
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background layers with parallax effect */}
      <div className="fixed inset-0 bg-space-blue z-0" />
      
      {/* Stars layer 1 (slowest moving) */}
      <motion.div className="fixed inset-0 z-0" style={{ y: y1 }}>
        {starsLayer1.map((star, i) => (
          <div
            key={`star1-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`
            }}
          />
        ))}
      </motion.div>
      
      {/* Stars layer 2 (medium speed) */}
      <motion.div className="fixed inset-0 z-0" style={{ y: y2 }}>
        {starsLayer2.map((star, i) => (
          <div
            key={`star2-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`
            }}
          />
        ))}
      </motion.div>
      
      {/* Stars layer 3 (fastest moving) */}
      <motion.div className="fixed inset-0 z-0" style={{ y: y3 }}>
        {starsLayer3.map((star, i) => (
          <div
            key={`star3-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`
            }}
          />
        ))}
        
        {/* Planets */}
        {showPlanets && planets.map((planet, i) => (
          <div
            key={`planet-${i}`}
            className="absolute rounded-full bg-space-light-blue/30"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              backgroundImage: `radial-gradient(circle at center, rgba(75, 213, 238, 0.2), rgba(0, 0, 0, 0.5))`,
              boxShadow: `0 0 20px rgba(75, 213, 238, 0.3)`
            }}
          />
        ))}
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SpaceParallax;