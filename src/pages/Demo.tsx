import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Star, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { LightsaberButton } from '@/components/ui/lightsaber-button';
import { HologramCard } from '@/components/ui/hologram-card';
import SpaceParallax from '@/components/SpaceParallax';
import StarWarsTextCrawl from '@/components/StarWarsTextCrawl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Demo = () => {
  const [showTextCrawl, setShowTextCrawl] = useState(false);
  const [activeSection, setActiveSection] = useState('components');
  
  const handleTextCrawlComplete = () => {
    setShowTextCrawl(false);
  };
  
  return (
    <div className="min-h-screen bg-space-blue overflow-hidden relative">
      {showTextCrawl ? (
        <StarWarsTextCrawl
          title="Astro Voyages"
          subtitle="A Journey Beyond Stars"
          text={`In a galaxy not so far away, Starport Dubai offers the most luxurious space travel experience in the solar system.\n\nFrom orbital hotels to Mars colonies, our destinations span the cosmos, providing unparalleled adventures for the discerning space traveler.\n\nEmbark on a journey that will take you beyond Earth, beyond limits, only in Dubai, where stars permit!`}
          onComplete={handleTextCrawlComplete}
          speed="medium"
        />
      ) : (
        <SpaceParallax starDensity="high" parallaxStrength="medium" showPlanets={true}>
          <Navbar />
          
          <main className="pt-28 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <span className="bg-space-saber-blue/10 text-space-white px-4 py-1.5 rounded-md text-xs md:text-sm font-medium inline-block mb-6 animate-saber-glow">
                  STAR WARS INSPIRED COMPONENTS
                </span>
                <h1 className="section-title">
                  <span className="text-gradient">Interactive Demo</span>
                </h1>
                <p className="section-subtitle mx-auto">
                  Explore our collection of Star Wars inspired UI components for an immersive space travel experience.
                </p>
                
                <div className="flex justify-center mt-8 space-x-4">
                  <Button 
                    variant={activeSection === 'components' ? 'default' : 'outline'}
                    onClick={() => setActiveSection('components')}
                    className={activeSection === 'components' ? 'bg-space-saber-blue text-space-blue' : ''}
                  >
                    Components
                  </Button>
                  <Button 
                    variant={activeSection === 'animations' ? 'default' : 'outline'}
                    onClick={() => setActiveSection('animations')}
                    className={activeSection === 'animations' ? 'bg-space-saber-blue text-space-blue' : ''}
                  >
                    Animations
                  </Button>
                  <Button 
                    variant={activeSection === 'effects' ? 'default' : 'outline'}
                    onClick={() => setActiveSection('effects')}
                    className={activeSection === 'effects' ? 'bg-space-saber-blue text-space-blue' : ''}
                  >
                    Effects
                  </Button>
                </div>
              </div>
              
              {activeSection === 'components' && (
                <div className="space-y-16">
                  {/* Lightsaber Buttons */}
                  <section>
                    <h2 className="text-2xl font-display font-bold text-space-white mb-6">Lightsaber Buttons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">