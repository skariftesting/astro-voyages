
export const generateStars = (count: number = 100): { x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string }[] => {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small';
    return {
      x: Math.random() * 100,
      y: Math.random() * 100,
      size,
      animationDelay: `${Math.random() * 5}s`
    };
  });
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
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
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
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
