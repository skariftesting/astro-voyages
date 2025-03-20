export const generateStars = (count: number = 200): { x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string; color: string }[] => {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
    // Use more white stars for Star Wars theme
    const colors = ['#ffffff', '#ffffff', '#ffffff', '#ffe81f', '#e1f5fe', '#b2ebf2'];
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      color: colors[Math.floor(Math.random() * colors.length)],
      animationDelay: `${Math.random() * 5}s`
    };
  });
};

export const generateNebula = (count: number = 3): { x: number; y: number; size: number; color: string; blur: number }[] => {
  // Star Wars themed colors - blues, reds, and purples
  const colors = [
    'rgba(75, 213, 238, 0.1)',  // Blue (lightsaber blue)
    'rgba(255, 45, 45, 0.1)',   // Red (lightsaber red)
    'rgba(78, 91, 148, 0.1)',   // Purple (space)
    'rgba(255, 232, 31, 0.1)',  // Yellow (Star Wars yellow)
  ];
  
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 200,
    color: colors[Math.floor(Math.random() * colors.length)],
    blur: Math.random() * 100 + 50
  }));
};

export const generateHyperspaceStars = (count: number = 50): { x: number; y: number; length: number; angle: number; delay: string }[] => {
  return Array.from({ length: count }, () => ({
    x: 50 + (Math.random() * 40 - 20),  // Centered with some variation
    y: 50 + (Math.random() * 40 - 20),  // Centered with some variation
    length: Math.random() * 100 + 50,   // Length of the hyperspace star
    angle: Math.random() * 360,         // Random angle
    delay: `${Math.random() * 2}s`      // Random delay
  }));
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const fadeInRightVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const pulseGlowAnimation = {
  scale: [1, 1.1, 1],
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear"
  }
};

export const scaleAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const shimmerAnimation = {
  backgroundPosition: ['0% 0%', '100% 100%'],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }
};

// Star Wars specific animations
export const lightsaberIgniteAnimation = {
  width: [0, '100%'],
  opacity: [0.7, 1],
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const saberGlowAnimation = {
  boxShadow: ['0 0 5px 2px currentColor', '0 0 15px 5px currentColor', '0 0 5px 2px currentColor'],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const hyperspaceJumpAnimation = {
  scale: [1, 1.5, 3],
  opacity: [0, 0.8, 0],
  transition: {
    duration: 2,
    ease: "easeInOut"
  }
};

export const textCrawlAnimation = {
  y: ['100%', '-100%'],
  transition: {
    duration: 60,
    ease: "linear"
  }
};

// Changed to a function that returns a HOC function instead of using JSX directly
import React from 'react';

export const createPageTransition = (Component: React.ComponentType<any>) => {
  return function PageTransitionWrapper(props: any) {
    // Using React.createElement instead of JSX syntax
    return React.createElement(
      'div',
      { className: 'page-transition-enter-active' },
      React.createElement(Component, props)
    );
  };
};
