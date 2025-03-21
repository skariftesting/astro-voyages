import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface LightsaberButtonProps extends ButtonProps {
  saberColor?: 'blue' | 'red' | 'green' | 'yellow';
  glowIntensity?: 'low' | 'medium' | 'high';
  igniteOnHover?: boolean;
  children: React.ReactNode;
}

const LightsaberButton = ({
  saberColor = 'blue',
  glowIntensity = 'medium',
  igniteOnHover = true,
  className,
  children,
  ...props
}: LightsaberButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isIgnited, setIsIgnited] = useState(!igniteOnHover);
  
  // Map saber colors to tailwind classes
  const colorMap = {
    blue: {
      bg: 'bg-space-saber-blue',
      text: 'text-space-blue',
      glow: 'space-saber-blue',
      shadow: '0 0 10px 2px #4bd5ee'
    },
    red: {
      bg: 'bg-space-saber-red',
      text: 'text-space-white',
      glow: 'space-saber-red',
      shadow: '0 0 10px 2px #ff2d2d'
    },
    green: {
      bg: 'bg-space-saber-green',
      text: 'text-space-blue',
      glow: 'space-saber-green',
      shadow: '0 0 10px 2px #4cd964'
    },
    yellow: {
      bg: 'bg-space-white',
      text: 'text-space-blue',
      glow: 'space-white',
      shadow: '0 0 10px 2px #ffe81f'
    }
  };
  
  // Map glow intensity to shadow values
  const intensityMap = {
    low: {
      shadowSize: '5px',
      animationDuration: '2s'
    },
    medium: {
      shadowSize: '10px',
      animationDuration: '1.5s'
    },
    high: {
      shadowSize: '15px',
      animationDuration: '1s'
    }
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (igniteOnHover) {
      setIsIgnited(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (igniteOnHover) {
      setIsIgnited(false);
    }
  };

  return (
    <div className="relative inline-block">
      <Button
        className={cn(
          `${colorMap[saberColor].bg} ${colorMap[saberColor].text} hover:bg-opacity-90 transition-all duration-500 font-medium rounded-md px-6 py-2.5`,
          isIgnited && 'animate-saber-glow',
          className
        )}
        style={{
          boxShadow: isIgnited ? colorMap[saberColor].shadow : 'none',
          animationDuration: intensityMap[glowIntensity].animationDuration
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Button>
      
      {/* Lightsaber ignition effect */}
      <motion.div 
        className={`absolute -bottom-1 left-0 h-1 ${colorMap[saberColor].bg} w-0`}
        animate={{
          width: isIgnited ? '100%' : '0%',
          opacity: isIgnited ? 1 : 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        style={{
          boxShadow: colorMap[saberColor].shadow
        }}
      />
    </div>
  );
};

export { LightsaberButton };