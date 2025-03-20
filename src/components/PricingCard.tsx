
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: PricingFeature[];
  popular?: boolean;
  className?: string;
  destinationId?: string;
}

const PricingCard = ({
  title,
  description,
  price,
  features,
  popular = false,
  className = '',
  destinationId
}: PricingCardProps) => {
  return (
    <div
      className={`glass-panel relative ${popular ? 'border-space-cyan/40 ring-1 ring-space-cyan/20' : ''} ${className}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-space-cyan text-space-blue text-xs font-medium px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-space-white">{title}</h3>
        <p className="mt-2 text-space-gray text-sm">{description}</p>
        
        <div className="mt-4 mb-6">
          <span className="text-3xl font-bold text-space-white">د.إ {price.toLocaleString()}</span>
          <span className="text-space-gray text-sm ml-1">/ person</span>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`rounded-full p-1 mr-3 ${feature.included ? 'bg-space-cyan/20 text-space-cyan' : 'bg-space-light-blue/20 text-space-gray'}`}>
                <Check size={12} />
              </div>
              <span className={`text-sm ${feature.included ? 'text-space-white' : 'text-space-gray line-through'}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Link to={destinationId ? `/booking/${destinationId}?class=${encodeURIComponent(title)}` : '/booking'}>
            <Button 
              className={`w-full ${
                popular 
                  ? 'bg-space-cyan text-space-blue hover:bg-space-cyan/90' 
                  : 'bg-space-light-blue/50 text-space-white hover:bg-space-light-blue/70'
              }`}
            >
              Select Package
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
