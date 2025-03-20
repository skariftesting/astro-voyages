
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { generateStars } from '@/utils/animations';

const Pricing = () => {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  const economyFeatures = [
    { title: 'Standard Seating', included: true },
    { title: 'Basic Life Support', included: true },
    { title: 'Shared Quarters', included: true },
    { title: 'Standard Meals', included: true },
    { title: 'Spacewalk', included: false },
    { title: 'Private Suite', included: false },
  ];

  const businessFeatures = [
    { title: 'Premium Seating', included: true },
    { title: 'Advanced Life Support', included: true },
    { title: 'Semi-Private Quarters', included: true },
    { title: 'Gourmet Meals', included: true },
    { title: 'Spacewalk', included: true },
    { title: 'Private Suite', included: false },
  ];

  const vipFeatures = [
    { title: 'Luxury Seating', included: true },
    { title: 'Premium Life Support', included: true },
    { title: 'Private Luxury Suite', included: true },
    { title: 'Personal Chef', included: true },
    { title: 'Private Spacewalk', included: true },
    { title: 'Exclusive Excursions', included: true },
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
      
      <main className="pt-28 pb-20">
        {/* Header */}
        <section className="container mx-auto max-w-6xl px-4 mb-16">
          <div className="text-center">
            <span className="bg-space-purple/10 text-space-pink px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              OUR PACKAGES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-space-white mb-6">
              Space Travel <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-space-gray max-w-2xl mx-auto">
              Choose from our range of carefully curated space travel experiences, 
              from basic orbital trips to luxurious interplanetary adventures.
            </p>
          </div>
        </section>
        
        {/* Basic Packages */}
        <section className="py-10 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-space-white">
                Standard Travel Packages
              </h2>
              <p className="text-space-gray mt-4 max-w-2xl mx-auto">
                Our most popular all-inclusive packages for destinations throughout the solar system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Economy"
                description="Basic space travel experience with all necessary amenities."
                price={45000}
                features={economyFeatures}
                destinationId="orbital-hotel"
              />
              
              <PricingCard
                title="Business"
                description="Enhanced comfort and personalized service for your journey."
                price={95000}
                popular={true}
                features={businessFeatures}
                destinationId="lunar-base"
              />
              
              <PricingCard
                title="Zero-Gravity VIP"
                description="The ultimate luxury experience for the discerning space traveler."
                price={250000}
                features={vipFeatures}
                destinationId="mars-colony"
              />
            </div>
          </div>
        </section>

        {/* Custom Packages */}
        <section className="py-16 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-panel p-10 md:p-16 text-center rounded-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-[20%] w-64 h-64 bg-space-cyan/10 rounded-full filter blur-[80px]"></div>
              <div className="absolute bottom-0 right-[30%] w-64 h-64 bg-space-pink/10 rounded-full filter blur-[80px]"></div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-space-white mb-4">
                Looking for a Custom Experience?
              </h2>
              <p className="text-space-light-gray text-lg max-w-2xl mx-auto mb-8">
                Our space travel consultants can help design a bespoke journey 
                tailored specifically to your preferences and requirements.
              </p>
              <div className="flex justify-center">
                <button className="bg-space-cyan text-space-blue hover:bg-space-cyan/90 px-8 py-3 rounded-lg font-medium">
                  Contact a Consultant
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
