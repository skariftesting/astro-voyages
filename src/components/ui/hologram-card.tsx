import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardProps } from '@/components/ui/card';

interface HologramCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'blue' | 'cyan' | 'red' | 'yellow' | 'green';
  glowIntensity?: 'low' | 'medium' | 'high';
  hologramLines?: boolean;
  scanEffect?: boolean;
  className?: string;
}

const HologramCard = ({
  children,
  glowColor = 'cyan',
  glowIntensity = 'medium',
  hologramLines = true,
  scanEffect = true,
  className,
  ...props
}: HologramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Map colors to tailwind classes and CSS values
  const colorMap = {
    blue: {
      glow: 'rgba(75, 213, 238, 0.3)',
      border: 'rgba(75, 213, 238, 0.2)',
      scan: 'rgba(75, 213, 238, 0.1)',
      lines: 'rgba(75, 213, 238, 0.15)'
    },
    cyan: {
      glow: 'rgba(75, 213, 238, 0.3)',
      border: 'rgba(75, 213, 238, 0.2)',
      scan: 'rgba(75, 213, 238, 0.1)',
      lines: 'rgba(75, 213, 238, 0.15)'
    },
    red: {
      glow: 'rgba(255, 45, 45, 0.3)',
      border: 'rgba(255, 45, 45, 0.2)',
      scan: 'rgba(255, 45, 45, 0.1)',
      lines: 'rgba(255, 45, 45, 0.15)'
    },
    yellow: {
      glow: 'rgba(255, 232, 31, 0.3)',
      border: 'rgba(255, 232, 31, 0.2)',
      scan: 'rgba(255, 232, 31, 0.1)',
      lines: 'rgba(255, 232, 31, 0.15)'
    },
    green: {
      glow: 'rgba(76, 217, 100, 0.3)',
      border: 'rgba(76, 217, 100, 0.2)',
      scan: 'rgba(76, 217, 100, 0.1)',
      lines: 'rgba(76, 217, 100, 0.15)'
    }
  };
  
  // Map intensity to glow values
  const intensityMap = {
    low: {
      glow: '0 0 10px',
      opacity: 0.7
    },
    medium: {
      glow: '0 0 15px',
      opacity: 0.8
    },
    high: {
      glow: '0 0 20px',
      opacity: 0.9
    }
  };
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Background with glow effect */}
      <div 
        className="absolute inset-0 bg-space-light-blue/20 backdrop-blur-xl border rounded-lg transition-all duration-500"
        style={{
          borderColor: colorMap[glowColor].border,
          boxShadow: `${intensityMap[glowIntensity].glow} ${colorMap[glowColor].glow}`,
          opacity: isHovered ? intensityMap[glowIntensity].opacity : 0.6
        }}
      />
      
      {/* Hologram scan effect */}
      {scanEffect && (
        <motion.div 
          className="absolute inset-0 w-full h-1 opacity-70"
          style={{ 
            background: colorMap[glowColor].scan,
            boxShadow: `0 0 10px 5px ${colorMap[glowColor].scan}`
          }}
          animate={{
            top: ['-10%', '110%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            repeatDelay: 1
          }}
        />
      )}
      
      {/* Hologram lines */}
      {hologramLines && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-full h-px opacity-30"
              style={{
                top: `${i * 10}%`,
                background: colorMap[glowColor].lines
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-full w-px opacity-30"
              style={{
                left: `${i * 10}%`,
                background: colorMap[glowColor].lines
              }}
            />
          ))}
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { HologramCard };