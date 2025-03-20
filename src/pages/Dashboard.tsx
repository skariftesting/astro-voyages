
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, CreditCard, Rocket, Settings, LogOut, Bell, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';
import { Progress } from '@/components/ui/progress';

// Mock data for upcoming trips
const upcomingTrips = [
  {
    id: 'trip-1',
    destination: 'Orbital Luxury Hotel',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    departureDate: new Date('2025-06-15T10:00:00'),
    class: 'Business',
    status: 'Confirmed'
  },
  {
    id: 'trip-2',
    destination: 'Lunar Base Alpha',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    departureDate: new Date('2025-09-22T08:30:00'),
    class: 'Zero-Gravity VIP',
    status: 'Pending'
  }
];

// Mock data for travel tips
const travelTips = [
  {
    id: 'tip-1',
    title: 'Preparing for Zero Gravity',
    content: 'To prepare for zero gravity, practice slow movements and always secure yourself to avoid drifting. Taking motion sickness medication before departure is recommended for first-time space travelers.'
  },
  {
    id: 'tip-2',
    title: 'What to Pack for Your Space Journey',
    content: 'Pack light, breathable clothing. All toiletries are provided, but bring any special medications. Electronic devices are welcome but must be approved by our safety team before departure.'
  },
  {
    id: 'tip-3',
    title: 'Understanding Space Radiation Safety',
    content: 'Our vessels are equipped with state-of-the-art radiation shielding. Follow crew instructions during solar activity periods and wear provided monitoring badges throughout your journey.'
  }
];

const Dashboard = () => {
  const [stars, setStars] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    setStars(generateStars(100));
    
    // Update the time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getCountdown = (targetDate: Date) => {
    const difference = targetDate.getTime() - currentTime.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  };
  
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-panel p-6 mb-6 animate-slide-in-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-space-cyan/20 flex items-center justify-center">
                    <User className="text-space-cyan" size={24} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-space-white">John Doe</h2>
                    <p className="text-sm text-space-gray">Voyager Level: Platinum</p>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <Link to="/dashboard" className="flex items-center space-x-3 text-space-cyan px-3 py-2 rounded-md bg-space-cyan/10">
                    <Rocket size={18} />
                    <span>Dashboard</span>
                  </Link>
                  <Link to="/bookings" className="flex items-center space-x-3 text-space-light-gray hover:text-space-white px-3 py-2 rounded-md hover:bg-space-light-blue/20 transition-colors">
                    <Ticket size={18} />
                    <span>My Bookings</span>
                  </Link>
                  <Link to="/profile" className="flex items-center space-x-3 text-space-light-gray hover:text-space-white px-3 py-2 rounded-md hover:bg-space-light-blue/20 transition-colors">
                    <User size={18} />
                    <span>Profile</span>
                  </Link>
                  <Link to="/payment" className="flex items-center space-x-3 text-space-light-gray hover:text-space-white px-3 py-2 rounded-md hover:bg-space-light-blue/20 transition-colors">
                    <CreditCard size={18} />
                    <span>Payment Methods</span>
                  </Link>
                  <Link to="/notifications" className="flex items-center space-x-3 text-space-light-gray hover:text-space-white px-3 py-2 rounded-md hover:bg-space-light-blue/20 transition-colors">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </Link>
                  <Link to="/settings" className="flex items-center space-x-3 text-space-light-gray hover:text-space-white px-3 py-2 rounded-md hover:bg-space-light-blue/20 transition-colors">
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                  <div className="pt-4 mt-4 border-t border-space-light-blue/20">
                    <Button variant="ghost" className="w-full justify-start text-space-gray hover:text-space-white hover:bg-space-light-blue/20">
                      <LogOut size={18} className="mr-3" />
                      Sign Out
                    </Button>
                  </div>
                </nav>
              </div>
              
              <div className="glass-panel p-6 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-display font-semibold text-space-white mb-4">Voyager Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-space-light-gray">Total Distance</span>
                      <span className="text-space-white">384,400 km</span>
                    </div>
                    <Progress value={38} className="h-2 bg-space-light-blue/30" indicatorClassName="bg-space-cyan" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-space-light-gray">Trips Completed</span>
                      <span className="text-space-white">1 / 3</span>
                    </div>
                    <Progress value={33} className="h-2 bg-space-light-blue/30" indicatorClassName="bg-space-pink" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-space-light-gray">Voyager Points</span>
                      <span className="text-space-white">12,500 / 25,000</span>
                    </div>
                    <Progress value={50} className="h-2 bg-space-light-blue/30" indicatorClassName="bg-space-purple" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Welcome section */}
              <div className="glass-panel p-8 relative overflow-hidden animate-slide-in-right">
                <div className="relative z-10">
                  <h1 className="text-3xl font-display font-bold text-space-white mb-2">Welcome back, John</h1>
                  <p className="text-space-light-gray mb-6">
                    Your next space adventure is approaching. Here's your journey status.
                  </p>
                  
                  <Link to="/destinations">
                    <Button className="bg-space-cyan text-space-blue hover:bg-space-cyan/90">
                      Book New Journey
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute right-0 bottom-0 w-40 h-40 bg-space-cyan/10 rounded-full filter blur-[60px]"></div>
                <div className="absolute right-20 top-0 w-20 h-20 bg-space-pink/10 rounded-full filter blur-[40px]"></div>
              </div>
              
              {/* Upcoming trips */}
              <div className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-display font-semibold text-space-white mb-6">Upcoming Journeys</h2>
                
                <div className="space-y-6">
                  {upcomingTrips.map((trip) => {
                    const countdown = getCountdown(trip.departureDate);
                    
                    return (
                      <div key={trip.id} className="glass-panel overflow-hidden rounded-lg">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <img src={trip.image} alt={trip.destination} className="h-40 md:h-full w-full object-cover" />
                          </div>
                          
                          <div className="p-6 md:w-2/3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-display font-semibold text-space-white mb-1">{trip.destination}</h3>
                                <div className="flex items-center text-space-light-gray text-sm mb-4">
                                  <Calendar size={14} className="mr-1" />
                                  <span>
                                    {trip.departureDate.toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'long', 
                                      day: 'numeric' 
                                    })}
                                  </span>
                                  <span className="mx-2">•</span>
                                  <Clock size={14} className="mr-1" />
                                  <span>
                                    {trip.departureDate.toLocaleTimeString('en-US', { 
                                      hour: '2-digit', 
                                      minute: '2-digit' 
                                    })}
                                  </span>
                                </div>
                              </div>
                              
                              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                trip.status === 'Confirmed' 
                                  ? 'bg-green-500/20 text-green-500' 
                                  : 'bg-yellow-500/20 text-yellow-500'
                              }`}>
                                {trip.status}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-space-gray mb-1">Class</p>
                                <p className="text-space-white font-medium">{trip.class}</p>
                              </div>
                              
                              <div className="text-center">
                                <p className="text-sm text-space-gray mb-1">Launching in</p>
                                <div className="flex space-x-3">
                                  <div className="text-center">
                                    <p className="text-xl font-bold text-space-white">{countdown.days}</p>
                                    <p className="text-xs text-space-gray">Days</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-xl font-bold text-space-white">{countdown.hours}</p>
                                    <p className="text-xs text-space-gray">Hours</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-xl font-bold text-space-white">{countdown.minutes}</p>
                                    <p className="text-xs text-space-gray">Mins</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Link to={`/bookings/${trip.id}`}>
                                <Button variant="outline" className="text-space-cyan border-space-cyan hover:bg-space-cyan/10">
                                  View Details
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Travel Tips */}
              <div className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-display font-semibold text-space-white mb-6">Space Travel Tips</h2>
                
                <div className="space-y-4">
                  {travelTips.map((tip) => (
                    <div key={tip.id} className="glass-panel p-6 rounded-lg">
                      <h3 className="text-lg font-display font-semibold text-space-white mb-2">{tip.title}</h3>
                      <p className="text-space-gray">{tip.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-right">
                  <Link to="/travel-guide">
                    <Button variant="ghost" className="text-space-cyan hover:text-space-cyan hover:bg-space-cyan/10">
                      View Complete Travel Guide
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
