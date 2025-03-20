
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Users, Clock, Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import DestinationCard from '@/components/DestinationCard';
import PricingCard from '@/components/PricingCard';
import { generateStars } from '@/utils/animations';

// Mock data for destinations
const featuredDestinations = [
  {
    id: 'orbital-hotel',
    name: 'Orbital Luxury Hotel',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Experience zero gravity in our state-of-the-art orbital hotel with panoramic Earth views.',
    rating: 4.9,
    price: 28000,
    featured: true,
    distance: '400 km',
    travelTime: '6 hours'
  },
  {
    id: 'lunar-base',
    name: 'Lunar Base Alpha',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Visit humanity\'s first permanent lunar settlement and experience 1/6th gravity.',
    rating: 4.7,
    price: 85000,
    featured: false,
    distance: '384,400 km',
    travelTime: '3 days'
  },
  {
    id: 'mars-colony',
    name: 'Mars Colony',
    image: 'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Be among the first tourists to visit the red planet and explore its mysterious landscapes.',
    rating: 4.8,
    price: 240000,
    featured: false,
    distance: '54.6M km',
    travelTime: '7 months'
  }
];

const Index = () => {
  const [stars, setStars] = useState<any[]>([]);

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
      
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <span className="bg-space-purple/10 text-space-pink px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
                WHY CHOOSE US
              </span>
              <h2 className="section-title">Space Travel <span className="text-gradient">Redefined</span></h2>
              <p className="section-subtitle mx-auto">
                Our cutting-edge technology and luxury accommodations ensure your journey to the stars is 
                as comfortable as it is breathtaking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Rocket className="text-space-cyan" size={36} />,
                  title: 'Advanced Technology',
                  description: 'Our spacecraft feature the latest in propulsion and life support technologies.'
                },
                {
                  icon: <Calendar className="text-space-pink" size={36} />,
                  title: 'Flexible Scheduling',
                  description: 'Choose from weekly departures to all destinations with flexible return options.'
                },
                {
                  icon: <Users className="text-space-cyan" size={36} />,
                  title: 'Expert Crew',
                  description: 'Highly trained astronauts and hospitality specialists to ensure your comfort.'
                },
                {
                  icon: <MapPin className="text-space-pink" size={36} />,
                  title: 'Unique Destinations',
                  description: 'From orbital resorts to lunar bases, experience the wonders of space.'
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-6 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-panel inline-flex p-3 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-space-white mb-2">{feature.title}</h3>
                  <p className="text-space-gray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Destinations */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
                POPULAR DESTINATIONS
              </span>
              <h2 className="section-title">Explore the <span className="text-gradient">Cosmos</span></h2>
              <p className="section-subtitle mx-auto">
                Discover our range of extraordinary destinations, from orbital stations to distant planets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((destination, index) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  image={destination.image}
                  description={destination.description}
                  rating={destination.rating}
                  price={destination.price}
                  featured={destination.featured}
                  distance={destination.distance}
                  travelTime={destination.travelTime}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/destinations">
                <Button variant="outline" className="outlined-button">
                  View All Destinations <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="bg-space-pink/10 text-space-pink px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
                PRICING & PACKAGES
              </span>
              <h2 className="section-title">Choose Your <span className="text-gradient">Experience</span></h2>
              <p className="section-subtitle mx-auto">
                From basic accommodations to luxury suites, we offer packages to suit every space traveler.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Economy"
                description="Basic space travel experience with all necessary amenities."
                price={45000}
                features={[
                  { title: 'Standard Seating', included: true },
                  { title: 'Basic Life Support', included: true },
                  { title: 'Shared Quarters', included: true },
                  { title: 'Standard Meals', included: true },
                  { title: 'Spacewalk', included: false },
                  { title: 'Private Suite', included: false },
                ]}
                destinationId="orbital-hotel"
              />
              
              <PricingCard
                title="Business"
                description="Enhanced comfort and personalized service for your journey."
                price={95000}
                popular={true}
                features={[
                  { title: 'Premium Seating', included: true },
                  { title: 'Advanced Life Support', included: true },
                  { title: 'Semi-Private Quarters', included: true },
                  { title: 'Gourmet Meals', included: true },
                  { title: 'Spacewalk', included: true },
                  { title: 'Private Suite', included: false },
                ]}
                destinationId="lunar-base"
              />
              
              <PricingCard
                title="Zero-Gravity VIP"
                description="The ultimate luxury experience for the discerning space traveler."
                price={250000}
                features={[
                  { title: 'Luxury Seating', included: true },
                  { title: 'Premium Life Support', included: true },
                  { title: 'Private Luxury Suite', included: true },
                  { title: 'Personal Chef', included: true },
                  { title: 'Private Spacewalk', included: true },
                  { title: 'Exclusive Excursions', included: true },
                ]}
                destinationId="mars-colony"
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="glass-panel p-10 md:p-16 text-center rounded-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-[20%] w-64 h-64 bg-space-cyan/10 rounded-full filter blur-[80px]"></div>
              <div className="absolute bottom-0 right-[30%] w-64 h-64 bg-space-pink/10 rounded-full filter blur-[80px]"></div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-space-white mb-4">Ready for the Journey of a Lifetime?</h2>
              <p className="text-space-light-gray text-lg max-w-2xl mx-auto mb-8">
                Book your space adventure today and be among the pioneering travelers to explore the final frontier.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/booking">
                  <Button className="primary-button w-60 sm:w-auto">Book Your Flight</Button>
                </Link>
                <Link to="/destinations">
                  <Button variant="outline" className="outlined-button w-60 sm:w-auto">Explore Destinations</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
