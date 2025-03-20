import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: number;
  featured?: boolean;
  distance?: string;
  travelTime?: string;
}

const DestinationCard = ({
  id,
  name,
  image,
  description,
  rating,
  price,
  featured = false,
  distance,
  travelTime
}: DestinationCardProps) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBookingClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast({
        title: "Authentication Required",
        description: "Please log in to book your space journey.",
        variant: "destructive",
      });
      navigate('/login');
    }
  };

  return (
    <div className={`glass-panel overflow-hidden card-hover ${featured ? 'border-space-cyan/30' : ''}`}>
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-space-cyan text-space-blue text-xs font-medium px-2.5 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-display font-semibold text-space-white">{name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-space-cyan fill-space-cyan" />
            <span className="ml-1 text-sm text-space-white">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-space-gray text-sm line-clamp-2 mb-4">{description}</p>
        
        {(distance || travelTime) && (
          <div className="flex space-x-4 mb-4">
            {distance && (
              <div>
                <p className="text-xs text-space-light-gray">Distance</p>
                <p className="text-sm font-medium text-space-white">{distance}</p>
              </div>
            )}
            {travelTime && (
              <div>
                <p className="text-xs text-space-light-gray">Travel Time</p>
                <p className="text-sm font-medium text-space-white">{travelTime}</p>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-xs text-space-light-gray">Starting from</p>
            <p className="text-xl font-bold text-space-white">${price.toLocaleString()}</p>
          </div>
          
          <Link to={`/booking/${id}`} onClick={handleBookingClick}>
            <Button variant="ghost" className="text-space-cyan hover:text-space-cyan hover:bg-space-cyan/10 p-2 h-auto">
              <span className="flex items-center">
                Book Now
                <ChevronRight size={16} className="ml-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
