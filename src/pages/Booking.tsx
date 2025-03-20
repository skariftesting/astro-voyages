
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { generateStars } from '@/utils/animations';

// Mock data for destinations
const destinationsData = [
  {
    id: 'orbital-hotel',
    name: 'Orbital Luxury Hotel',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Experience zero gravity in our state-of-the-art orbital hotel with panoramic Earth views.',
    longDescription: 'The Orbital Luxury Hotel floats 400 kilometers above Earth, offering unparalleled views of our home planet. With accommodations for up to 60 guests, this state-of-the-art facility features private suites, gourmet dining, and various zero-gravity recreational areas. Experience the thrill of spacewalks, witness stunning sunrises and sunsets every 90 minutes, and enjoy the unique sensation of weightlessness in luxury.',
    highlights: [
      'Zero-gravity luxury suites with panoramic Earth views',
      'Gourmet dining with ingredients sourced from Earth',
      'Daily spacewalk opportunities (subject to conditions)',
      'Zero-gravity recreational areas and activities',
      'Educational workshops on space science and astronomy'
    ]
  },
  {
    id: 'lunar-base',
    name: 'Lunar Base Alpha',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Visit humanity\'s first permanent lunar settlement and experience 1/6th gravity.',
    longDescription: 'Lunar Base Alpha is humanity\'s first permanent settlement on the Moon, located near the lunar South Pole. Experience 1/6th Earth gravity as you explore the base\'s research facilities, hydroponic gardens, and living quarters. Take guided excursions onto the lunar surface, drive lunar rovers across the dusty terrain, and witness Earth rise from the perspective that few humans have ever experienced.',
    highlights: [
      'Experience 1/6th Earth gravity in all accommodation areas',
      'Guided lunar surface excursions in pressurized rovers',
      'Visit to active lunar mining and research operations',
      'Earth-rise viewing from specialized observation domes',
      'Participation in ongoing lunar science projects'
    ]
  },
  {
    id: 'mars-colony',
    name: 'Mars Colony',
    image: 'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Be among the first tourists to visit the red planet and explore its mysterious landscapes.',
    longDescription: 'The Mars Colony represents humanity\'s first permanent settlement on another planet. Located in Arcadia Planitia, the colony offers visitors a once-in-a-lifetime opportunity to experience the Martian environment. Tour the habitats, research facilities, and Martian greenhouses, and take excursions onto the Martian surface in specialized pressure vehicles. Witness the ongoing terraforming efforts and contribute to humanity\'s greatest adventure.',
    highlights: [
      'Full tour of the first human settlement on another planet',
      'Martian surface excursions in pressurized vehicles',
      'Opportunity to participate in Martian gardening experiments',
      'Visits to nearby geological features including ancient riverbeds',
      'Experience Martian gravity (38% of Earth\'s) in all colony areas'
    ]
  },
  {
    id: 'europa-research',
    name: 'Europa Research Station',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Journey to Jupiter\'s moon and witness the cutting-edge research into potential extraterrestrial life.',
    longDescription: 'The Europa Research Station is humanity\'s first outpost in the Jupiter system, dedicated to studying Europa\'s subsurface ocean and its potential for harboring life. Visitors will tour the station\'s laboratories, observe drilling operations through Europa\'s icy crust, and witness real-time data processing from submersible probes exploring the alien ocean below. This is truly the frontier of human exploration and the search for life beyond Earth.',
    highlights: [
      'Tour of astrobiology laboratories searching for alien life',
      'Observation of ice drilling operations through Europa\'s crust',
      'Spectacular views of Jupiter from specialized observation domes',
      'Virtual reality experiences of submersible missions in Europa\'s ocean',
      'Participation in sample analysis and data processing'
    ]
  },
  {
    id: 'titan-expedition',
    name: 'Titan Expedition',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Explore Saturn\'s largest moon with its methane lakes and unique atmosphere.',
    longDescription: 'Titan Expedition takes visitors to Saturn\'s largest moon, the only place in our solar system beyond Earth with liquid lakes and seas on its surface. From the safety of the research station, observe Titan\'s methane lakes and thick atmosphere. Take excursions in specialized vehicles designed to operate in Titan\'s unique environment, and even sail on a methane lake in a specially designed craft. Witness the stunning views of Saturn and its magnificent rings from Titan\'s surface.',
    highlights: [
      'Experience the only place beyond Earth with surface liquids',
      'Excursions to methane lakes in specialized vehicles',
      'Sailing expedition on Kraken Mare, Titan\'s largest methane sea',
      'Spectacular views of Saturn and its rings from Titan\'s surface',
      'Tour of advanced research facilities studying Titan\'s unique chemistry'
    ]
  }
];

const Booking = () => {
  const { destinationId } = useParams();
  const [searchParams] = useSearchParams();
  const selectedClass = searchParams.get('class');
  const [stars, setStars] = useState<{ x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string; color: string }[]>([]);
  const [destination, setDestination] = useState<typeof destinationsData[0] | null>(null);

  useEffect(() => {
    setStars(generateStars(100));
    
    if (destinationId) {
      const found = destinationsData.find(d => d.id === destinationId);
      if (found) {
        setDestination(found);
      }
    }
  }, [destinationId]);

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
          <div className="text-center mb-12 animate-slide-down">
            <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              {destination ? `BOOK YOUR TRIP TO ${destination.name.toUpperCase()}` : 'BOOK YOUR JOURNEY'}
            </span>
            <h1 className="section-title">
              {destination ? 
                destination.name : 
                <span>Begin Your <span className="text-gradient">Space Adventure</span></span>
              }
            </h1>
            {!destination && (
              <p className="section-subtitle mx-auto">
                Select your destination, travel dates, and preferred accommodation class to start your journey.
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {destination && (
              <div className="lg:col-span-3 animate-slide-in-left">
                <div className="glass-panel overflow-hidden rounded-lg mb-6">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="glass-panel p-6 mb-6">
                  <h2 className="text-xl font-display font-bold text-space-white mb-4">About this Destination</h2>
                  <p className="text-space-light-gray mb-6">{destination.longDescription}</p>
                  
                  <h3 className="text-lg font-display font-semibold text-space-white mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {destination.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-space-cyan/20 text-space-cyan rounded-full p-1 mr-3">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-space-gray">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            <div className={`${destination ? 'lg:col-span-2' : 'lg:col-span-3 lg:col-start-2'} animate-slide-in-right`}>
              <BookingForm 
                destinationId={destinationId} 
                destinationName={destination?.name} 
                selectedClass={selectedClass || undefined}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;
