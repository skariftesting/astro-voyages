
import { useState, useEffect } from 'react';
import { Search, Filter, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { generateStars } from '@/utils/animations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data for destinations
const allDestinations = [
  {
    id: 'orbital-hotel',
    name: 'Orbital Luxury Hotel',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Experience zero gravity in our state-of-the-art orbital hotel with panoramic Earth views.',
    rating: 4.9,
    price: 28000,
    featured: true,
    distance: '400 km',
    travelTime: '6 hours',
    category: 'orbital'
  },
  {
    id: 'space-station-alpha',
    name: 'Space Station Alpha',
    image: 'https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Visit the largest commercial space station in orbit, with research facilities and entertainment spaces.',
    rating: 4.5,
    price: 32000,
    featured: false,
    distance: '420 km',
    travelTime: '8 hours',
    category: 'orbital'
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
    travelTime: '3 days',
    category: 'lunar'
  },
  {
    id: 'tranquility-resort',
    name: 'Tranquility Lunar Resort',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Luxury accommodation at the Sea of Tranquility with Earth views and lunar excursions.',
    rating: 4.8,
    price: 120000,
    featured: true,
    distance: '384,400 km',
    travelTime: '3 days',
    category: 'lunar'
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
    travelTime: '7 months',
    category: 'planetary'
  },
  {
    id: 'europa-research',
    name: 'Europa Research Station',
    image: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Journey to Jupiter\'s moon and witness the cutting-edge research into potential extraterrestrial life.',
    rating: 4.6,
    price: 380000,
    featured: false,
    distance: '628.3M km',
    travelTime: '15 months',
    category: 'planetary'
  },
  {
    id: 'titan-expedition',
    name: 'Titan Expedition',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Explore Saturn\'s largest moon with its methane lakes and unique atmosphere.',
    rating: 4.9,
    price: 420000,
    featured: true,
    distance: '1.2B km',
    travelTime: '2 years',
    category: 'planetary'
  },
  {
    id: 'venus-observatory',
    name: 'Venus Cloud Observatory',
    image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Float above Venus\' clouds in a specialized airship and witness the greenhouse planet up close.',
    rating: 4.3,
    price: 190000,
    featured: false,
    distance: '41M km',
    travelTime: '5 months',
    category: 'planetary'
  }
];

const Destinations = () => {
  const [stars, setStars] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  useEffect(() => {
    let filtered = allDestinations;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(dest => dest.category === category);
    }
    
    // Sort results
    if (sortBy === 'price-asc') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'distance') {
      filtered = [...filtered].sort((a, b) => {
        const distA = parseFloat(a.distance.replace(/[^0-9.]/g, ''));
        const distB = parseFloat(b.distance.replace(/[^0-9.]/g, ''));
        return distA - distB;
      });
    }
    
    setFilteredDestinations(filtered);
  }, [searchTerm, category, sortBy]);

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
          {/* Hero section */}
          <div className="text-center mb-16 animate-slide-down">
            <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              STARPORT DUBAI DESTINATIONS
            </span>
            <h1 className="section-title">
              <span className="text-gradient">Beyond Earth, Beyond Limits</span>
            </h1>
            <p className="section-subtitle mx-auto">
              From Earth orbit to the outer solar system, explore the wonders of space with our premium destinations. Only in Dubai.
            </p>
          </div>
          
          {/* Filters */}
          <div className="glass-panel p-6 mb-12 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-space-gray" size={16} />
                  <Input
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-space-light-blue/30 border-space-light-blue/30 text-space-white placeholder:text-space-gray"
                  />
                </div>
              </div>
              
              <div>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white">
                    <Filter size={16} className="mr-2 text-space-gray" />
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent className="bg-space-blue border-space-light-blue/30">
                    <SelectItem value="all" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">All Destinations</SelectItem>
                    <SelectItem value="orbital" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Orbital</SelectItem>
                    <SelectItem value="lunar" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Lunar</SelectItem>
                    <SelectItem value="planetary" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Planetary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white">
                    {sortBy.includes('price-asc') ? (
                      <ArrowUpCircle size={16} className="mr-2 text-space-gray" />
                    ) : sortBy.includes('price-desc') ? (
                      <ArrowDownCircle size={16} className="mr-2 text-space-gray" />
                    ) : (
                      <></>
                    )}
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-space-blue border-space-light-blue/30">
                    <SelectItem value="default" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Featured</SelectItem>
                    <SelectItem value="price-asc" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Price: High to Low</SelectItem>
                    <SelectItem value="rating" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Highest Rated</SelectItem>
                    <SelectItem value="distance" className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white">Closest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-8">
            <p className="text-space-light-gray mb-6">
              Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
            
            {filteredDestinations.length === 0 ? (
              <div className="glass-panel p-12 text-center">
                <h3 className="text-xl font-medium text-space-white mb-2">No destinations found</h3>
                <p className="text-space-gray">Try adjusting your search filters</p>
                <Button 
                  className="mt-6 bg-space-light-blue/40 text-space-white"
                  onClick={() => {
                    setSearchTerm('');
                    setCategory('all');
                    setSortBy('default');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination, index) => (
                  <div key={destination.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <DestinationCard
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
