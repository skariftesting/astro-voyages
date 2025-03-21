
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ArrowRight, Calendar, Rocket, MapPin, Users, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface Booking {
  id: string;
  user_id: string;
  destination_id: string;
  destination_name: string;
  departure_date: string;
  passengers: number;
  class_type: string;
  total_price: number;
  booking_status: string;
  created_at: string;
}

interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
}

const Dashboard = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: 'small' | 'medium' | 'large'; animationDelay: string; color: string }[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setStars(generateStars(100));
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    const fetchUserData = async () => {
      try {
        setLoading(true);
        
        // Fetch user profile
        if (user) {
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
            
          if (profileError) {
            console.error('Error fetching profile:', profileError);
          } else {
            setUserProfile(profileData);
          }
          
          // Fetch bookings
          const { data: bookingsData, error: bookingsError } = await supabase
            .from('bookings')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });
            
          if (bookingsError) {
            console.error('Error fetching bookings:', bookingsError);
            toast({
              title: "Error Loading Bookings",
              description: bookingsError.message,
              variant: "destructive",
            });
          } else {
            console.log("Retrieved bookings:", bookingsData);
            setBookings(bookingsData || []);
          }
        }
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [isAuthenticated, user, navigate]);

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
          <div className="animate-fade-in">
            <span className="bg-space-cyan/10 text-space-cyan px-4 py-1.5 rounded-full text-xs md:text-sm font-medium inline-block mb-6">
              MY DASHBOARD
            </span>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-space-white mb-4 md:mb-0">
                Welcome, <span className="text-gradient">{userProfile?.full_name || user?.email?.split('@')[0] || 'Space Traveler'}</span>
              </h1>
              
              <Button className="bg-space-cyan text-space-blue hover:bg-space-cyan/90 self-start" onClick={() => navigate('/booking')}>
                Book New Trip <Rocket size={16} className="ml-2" />
              </Button>
            </div>
            
            {loading ? (
              <div className="glass-panel p-10 text-center">
                <div className="animate-spin w-8 h-8 border-4 border-space-cyan border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-space-gray">Loading your space adventures...</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-display font-semibold text-space-white mb-6">Your Upcoming Journeys</h2>
                
                {bookings.length === 0 ? (
                  <div className="glass-panel p-10 text-center">
                    <div className="w-16 h-16 bg-space-light-blue/40 rounded-full mx-auto flex items-center justify-center mb-4">
                      <Rocket size={32} className="text-space-gray" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-space-white mb-2">No Bookings Yet</h3>
                    <p className="text-space-gray mb-6">You haven't booked any space adventures yet. Ready to begin your journey?</p>
                    <Button className="primary-button" onClick={() => navigate('/destinations')}>
                      Explore Destinations <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookings.map((booking, index) => (
                      <motion.div 
                        key={booking.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="glass-panel hover:shadow-lg hover:shadow-space-cyan/5 transition-all duration-300"
                      >
                        <div className="relative">
                          {/* Booking status badge */}
                          <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium
                            ${booking.booking_status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 
                              booking.booking_status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                              'bg-red-500/20 text-red-400'}`}
                          >
                            <div className="flex items-center">
                              {booking.booking_status === 'confirmed' && <CheckCircle size={12} className="mr-1" />}
                              {booking.booking_status === 'pending' && <Clock size={12} className="mr-1" />}
                              {booking.booking_status.charAt(0).toUpperCase() + booking.booking_status.slice(1)}
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h3 className="text-xl font-display font-bold text-space-white mb-2">
                              {booking.destination_name}
                            </h3>
                            
                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="flex items-center text-space-gray">
                                <Calendar size={16} className="mr-2 text-space-cyan" />
                                {booking.departure_date 
                                  ? format(new Date(booking.departure_date), "MMM d, yyyy")
                                  : 'Date to be confirmed'}
                              </div>
                              
                              <div className="flex items-center text-space-gray">
                                <Users size={16} className="mr-2 text-space-cyan" />
                                {booking.passengers} {booking.passengers === 1 ? 'Passenger' : 'Passengers'}
                              </div>
                              
                              <div className="flex items-center text-space-gray">
                                <MapPin size={16} className="mr-2 text-space-cyan" />
                                {booking.class_type}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-6">
                              <div>
                                <p className="text-space-light-gray text-xs">Total Price</p>
                                <p className="text-space-cyan font-bold text-lg">
                                  د.إ {booking.total_price.toLocaleString()}
                                </p>
                              </div>
                              
                              <Button variant="outline" className="outlined-button" size="sm">
                                View Details <ArrowRight size={14} className="ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Quick links */}
                <div className="mt-16">
                  <h2 className="text-2xl font-display font-semibold text-space-white mb-6">Quick Links</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: 'All Destinations', icon: <MapPin size={20} />, link: '/destinations' },
                      { title: 'Travel Packages', icon: <Rocket size={20} />, link: '/pricing' },
                      { title: 'Book New Trip', icon: <Calendar size={20} />, link: '/booking' },
                      { title: 'Safety Information', icon: <CheckCircle size={20} />, link: '/safety' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.03 }}
                        className="glass-panel p-4 flex items-center cursor-pointer"
                        onClick={() => navigate(item.link)}
                      >
                        <div className="w-10 h-10 bg-space-light-blue/40 rounded-lg flex items-center justify-center mr-4">
                          <div className="text-space-cyan">{item.icon}</div>
                        </div>
                        <span className="text-space-white font-medium">{item.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
