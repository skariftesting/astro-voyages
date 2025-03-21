
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';

// Define the Star type based on the return type of generateStars
type Star = {
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  animationDelay: string;
  color: string;
};

const About = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

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
      
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="container mx-auto max-w-6xl px-4 mb-16">
          <div className="text-center">
            <span className="bg-space-purple/10 text-space-pink px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-space-white mb-6">
              Pioneering <span className="text-gradient">Space Travel</span>
            </h1>
            <p className="text-space-gray max-w-2xl mx-auto">
              Beyond the boundaries of Earth, we're opening up the cosmos to adventurous travelers seeking the ultimate journey.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-panel p-8 md:p-12 rounded-2xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-space-white mb-4">Our Mission</h2>
                  <p className="text-space-light-gray mb-4">
                    Founded in 2025, our mission is to make space travel accessible to adventurous civilians while maintaining the highest standards of safety and comfort.
                  </p>
                  <p className="text-space-light-gray">
                    With a team of former aerospace engineers, astronauts, and visionary entrepreneurs, we've developed revolutionary spacecraft technology that makes interplanetary travel not just possible, but luxurious.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-space-radial opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-space-cyan/20 animate-pulse-glow flex items-center justify-center">
                      <span className="text-space-cyan font-display font-bold text-2xl md:text-4xl">2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-space-white mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-space-light-blue/30 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-space-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-space-cyan text-2xl">✧</span>
                  </div>
                  <h3 className="font-display font-bold text-space-white text-xl mb-2">Innovation</h3>
                  <p className="text-space-light-gray">Pushing the boundaries of what's possible in space travel technology.</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-space-light-blue/30 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-space-pink/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-space-pink text-2xl">✧</span>
                  </div>
                  <h3 className="font-display font-bold text-space-white text-xl mb-2">Safety</h3>
                  <p className="text-space-light-gray">Rigorous testing and protocols to ensure our travelers return home safely.</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-space-light-blue/30 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-space-purple text-2xl">✧</span>
                  </div>
                  <h3 className="font-display font-bold text-space-white text-xl mb-2">Sustainability</h3>
                  <p className="text-space-light-gray">Committed to environmentally responsible space exploration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-space-white mb-4">Our Inspirations</h2>
              <p className="text-space-light-gray max-w-2xl mx-auto">
                Meet the pioneering astronauts whose achievements have inspired our mission to make space travel accessible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 - Hazzaa AlMansoori */}
              <div className="glass-panel p-6 rounded-xl text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-space-radial opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="lightsaber blue absolute top-0 left-0 w-0 h-2 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-700"></div>
                
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-space-light-blue overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629859258429-7436b13bd222?q=80&w=1000&auto=format&fit=crop" 
                    alt="Hazzaa AlMansoori" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-space-radial opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-display font-bold text-space-white mb-1">Hazzaa AlMansoori</h3>
                <p className="text-space-pink mb-3">First Emirati Astronaut</p>
                <p className="text-space-light-gray text-sm">
                  "Inspired by Hazzaa AlMansoori — the first Emirati to reach space — we bring you the chance to follow his path, from Earth to the stars."
                </p>
                
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-space-cyan/5 group-hover:bg-space-cyan/10 blur-2xl transition-all duration-700"></div>
              </div>
              
              {/* Team Member 2 - Sultan AlNeyadi */}
              <div className="glass-panel p-6 rounded-xl text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-space-radial opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="lightsaber red absolute top-0 left-0 w-0 h-2 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-700"></div>
                
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-space-light-blue overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1633885278172-448eb2eeab27?q=80&w=1000&auto=format&fit=crop" 
                    alt="Sultan AlNeyadi" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-space-radial opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-display font-bold text-space-white mb-1">Sultan AlNeyadi</h3>
                <p className="text-space-pink mb-3">Pioneer Spacewalker</p>
                <p className="text-space-light-gray text-sm">
                  "Guided by the pioneering spirit of Sultan AlNeyadi, our platform pushes the boundaries of what's possible in commercial space travel."
                </p>
                
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-space-pink/5 group-hover:bg-space-pink/10 blur-2xl transition-all duration-700"></div>
              </div>
              
              {/* Team Member 3 - Nora AlMatrooshi */}
              <div className="glass-panel p-6 rounded-xl text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-space-radial opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="lightsaber blue absolute top-0 left-0 w-0 h-2 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-700"></div>
                
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-space-light-blue overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1599298241738-c8d56c0dd86b?q=80&w=1000&auto=format&fit=crop" 
                    alt="Nora AlMatrooshi" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-space-radial opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-display font-bold text-space-white mb-1">Nora AlMatrooshi</h3>
                <p className="text-space-pink mb-3">First Female Arab Astronaut</p>
                <p className="text-space-light-gray text-sm">
                  "Inspired by trailblazer Nora AlMatrooshi, we believe space belongs to everyone — and the journey starts right here from Dubai."
                </p>
                
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-space-purple/5 group-hover:bg-space-purple/10 blur-2xl transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
