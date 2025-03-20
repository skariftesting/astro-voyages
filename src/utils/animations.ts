export const generateStars = (count: number = 150): { x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string; color: string }[] => {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
    const colors = ['#ffffff', '#b3e5fc', '#e3f2fd', '#bbdefb', '#e1f5fe', '#b2ebf2'];
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
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 200,
    color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
    blur: Math.random() * 100 + 50
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
