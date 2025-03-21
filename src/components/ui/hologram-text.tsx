import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HologramTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  glitchEffect?: 'none' | 'subtle' | 'medium' | 'strong';
  glowColor?: 'blue' | 'cyan' | 'red' | 'yellow' | 'green';
  scanlines?: boolean;
  className?: string;
  delay?: number;
}

const HologramText = ({
  children,
  as: Component = 'h2',
  glitchEffect = 'subtle',
  glowColor = 'cyan',
  scanlines = true,
  className,
  delay = 0
}: HologramTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Map colors to CSS values
  const colorMap = {
    blue: {
      glow: '0 0 10px rgba(75, 213, 238, 0.7)',
      textShadow: '0 0 5px #4bd5ee, 0 0 10px #4bd5ee',
      color: '#4bd5ee'
    },
    cyan: {
      glow: '0 0 10px rgba(75, 213, 238, 0.7)',
      textShadow: '0 0 5px #4bd5ee, 0 0 10px #4bd5ee',
      color: '#4bd5ee'
    },
    red: {
      glow: '0 0 10px rgba(255, 45, 45, 0.7)',
      textShadow: '0 0 5px #ff2d2d, 0 0 10px #ff2d2d',
      color: '#ff2d2d'
    },
    yellow: {
      glow: '0 0 10px rgba(255, 232, 31, 0.7)',
      textShadow: '0 0 5px #ffe81f, 0 0 10px #ffe81f',
      color: '#ffe81f'
    },
    green: {
      glow: '0 0 10px rgba(76, 217, 100, 0.7)',
      textShadow: '0 0 5px #4cd964, 0 0 10px #4cd964',
      color: '#4cd964'
    }
  };
  
  // Set up glitch effect intervals
  useEffect(() => {
    if (glitchEffect === 'none') return;
    
    // Determine glitch frequency based on intensity
    const glitchFrequency = {
      subtle: { min: 5000, max: 10000, duration: 150 },