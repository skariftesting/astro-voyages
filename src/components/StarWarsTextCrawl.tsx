import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface StarWarsTextCrawlProps {
  title: string;
  subtitle?: string;
  text: string;
  onComplete?: () => void;
  speed?: 'slow' | 'medium' | 'fast';
}

const StarWarsTextCrawl = ({
  title,
  subtitle,
  text,
  onComplete,
  speed = 'medium'
}: StarWarsTextCrawlProps) => {
  const [isComplete, setIsComplete] = useState(false);
  
  // Map speed to duration
  const speedMap = {
    slow: 90,
    medium: 60,
    fast: 40
  };
  
  // Handle animation complete
  useEffect(() => {
    if (isComplete && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isComplete, onComplete]);
  
  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-50 flex items-center justify-center">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}
      </div>
      
      {/* Logo */}
      <motion.div
        className="absolute w-full text-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <h1 className="text-space-white font-display text-5xl md:text-7xl font-bold tracking-tight">
          STARPORT<span className="text-space-cyan">DUBAI</span>
        </h1>
      </motion.div>
      
      {/* Text crawl */}
      <div className="w-full h-full perspective">
        <motion.div
          className="text-crawl"
          initial={{ rotateX: 60, y: '100vh' }}
          animate={{ y: '-300vh' }}
          transition={{
            duration: speedMap[speed],
            ease: "linear"
          }}
          onAnimationComplete={() => setIsComplete(true)}
        >
          <div className="text-center mb-16">
            <h2 className="text-space-white text-4xl md:text-6xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <h3 className="text-space-white text-2xl md:text-3xl font-medium">{subtitle}</h3>
            )}
          </div>
          
          <div className="max-w-2xl mx-auto text-space-white text-xl md:text-2xl leading-relaxed">
            {text.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-8">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Skip button */}
      <button
        className="absolute bottom-8 right-8 text-space-white text-sm opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => onComplete && onComplete()}
      >
        Skip
      </button>
      
      <style jsx>{`
        .perspective {
          perspective: 400px;
        }
        
        .text-crawl {
          position: relative;
          color: #ffe81f;
          font-weight: 500;
          letter-spacing: 1px;
          line-height: 1.5;
          text-align: justify;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }
      `}</style>
    </div>
  );
};

export default StarWarsTextCrawl;