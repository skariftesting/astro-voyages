
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';

const About = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string; color: string }[]>([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  const teamMembers = [
    {
      name: "Hazzaa AlMansoori",
      role: "First Emirati astronaut in space",
      bio: "Inspired by Hazzaa AlMansoori — the first Emirati to reach space — we bring you the chance to follow his path, from Earth to the stars.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sultan AlNeyadi",
      role: "First Arab astronaut to perform a spacewalk",
      bio: "Guided by the pioneering spirit of Sultan AlNeyadi, our platform pushes the boundaries of what's possible in commercial space travel.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Nora AlMatrooshi",
      role: "First female Arab astronaut",
      bio: "Inspired by trailblazer Nora AlMatrooshi, we believe space belongs to everyone — and the journey starts right here from Dubai.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-space-blue overflow-hidden relative">
      {/* Star background */}
      <div className="star-field">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`star ${star.size} animate-star-twinkle`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <main className="pt-24 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="bg-space-purple/10 text-space-pink px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              ABOUT US
            </span>
            <h1 className="section-title">
              Pioneering <span className="text-gradient">Space Tourism</span> from Dubai
            </h1>
            <p className="section-subtitle mx-auto">
              At Astro Voyages, we're making the dream of space travel a reality for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="glass-panel p-8 order-2 lg:order-1">
              <h2 className="text-2xl font-display font-bold text-space-white mb-6">Our Mission</h2>
              <p className="text-space-white mb-4">
                Founded in 2023 in Dubai, Astro Voyages is leading the charge in democratizing access to space. We believe that space tourism shouldn't be limited to billionaires and astronauts - it should be accessible to adventurers, dreamers, and explorers from all walks of life.
              </p>
              <p className="text-space-white mb-4">
                With cutting-edge technology and partnerships with leading aerospace companies, we're making space travel safer, more affordable, and more accessible than ever before. Our mission is to open up the final frontier to a new generation of space travelers, starting right here in Dubai.
              </p>
              <p className="text-space-white">
                From orbital luxury hotels to lunar bases and even Mars expeditions, we're constantly pushing the boundaries of what's possible in commercial space travel. Join us on this historic journey as we take humanity to the stars.
              </p>
            </div>
            
            <div className="glass-panel overflow-hidden h-80 lg:h-auto order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Space Station" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              OUR TEAM
            </span>
            <h2 className="section-title">
              Meet Our <span className="text-gradient">Space Pioneers</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Inspired by the UAE's greatest astronauts, our team is dedicated to making space accessible for all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring", 
                  stiffness: 50 
                }}
                className="glass-panel hover:scale-105 transition-all duration-500 group perspective"
              >
                <div className="relative h-full flip-card-inner">
                  <div className="group-hover:twinkle absolute inset-0 bg-gradient-to-br from-space-cyan/10 to-space-pink/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"></div>
                  
                  {/* Image with lightsaber-like glow on hover */}
                  <div className="relative w-24 h-24 mx-auto mt-8 mb-6 overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-space-cyan/40 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 animate-glow-pulse"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute -inset-3 border-2 border-transparent rounded-full group-hover:border-space-cyan/30 group-hover:animate-slow-spin transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <motion.h3 
                      className="text-xl font-display font-bold text-space-white mb-1 group-hover:text-space-cyan transition-colors duration-300"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 2,
                        delay: index * 0.3
                      }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-space-pink mb-4 text-sm">{member.role}</p>
                    <p className="text-space-gray text-sm">{member.bio}</p>
                    
                    {/* Star Wars inspired particle effects */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-space-cyan rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            bottom: '0%',
                          }}
                          animate={{
                            y: [0, -100 - Math.random() * 50],
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1.2, 0.5]
                          }}
                          transition={{
                            duration: 1.5 + Math.random() * 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: Math.random() * 2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="glass-panel p-10 md:p-16 text-center rounded-2xl overflow-hidden relative">
            <div className="absolute top-0 left-[20%] w-64 h-64 bg-space-cyan/10 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 right-[30%] w-64 h-64 bg-space-pink/10 rounded-full filter blur-[80px]"></div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-space-white mb-4">Join Our Mission</h2>
            <p className="text-space-white text-lg max-w-2xl mx-auto mb-8">
              Be part of the journey as we make history with the first commercial space flights from Dubai. The stars are waiting.
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/booking" 
                className="primary-button inline-block px-8 py-3 rounded-lg font-medium text-space-blue bg-space-cyan hover:bg-space-cyan/90 transition-colors duration-300"
              >
                Book Your Flight
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
