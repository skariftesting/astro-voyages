
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
      className={`glass-panel relative bg-space-light-blue/80 ${popular ? 'border-space-cyan/40 ring-2 ring-space-cyan/20' : ''} ${className} transition-all duration-500`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-space-cyan text-space-blue text-xs font-medium px-3 py-1 rounded-full shadow-lg animate-pulse-glow">
            Most Popular
          </span>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-space-radial opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
      {popular && (
        <div className="absolute -z-10 inset-0 bg-space-cyan/5 rounded-md blur-md animate-pulse-glow"></div>
      )}
      
      <div className="p-6 relative z-10 group">
        <h3 className="text-xl font-display font-bold text-space-white group-hover:text-space-cyan transition-colors duration-300">{title}</h3>
        <p className="mt-2 text-space-white text-sm group-hover:text-space-white transition-colors duration-300">{description}</p>
        
        <div className="mt-4 mb-6 relative">
          <span className="text-3xl font-bold text-space-white group-hover:text-space-cyan transition-colors duration-300">د.إ {price.toLocaleString()}</span>
          <span className="text-space-white text-sm ml-1">/ person</span>
          <div className="absolute -right-3 -top-3 w-12 h-12 bg-space-cyan/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start group/feature hover:translate-x-1 transition-transform duration-300">
              <div className={`rounded-full p-1 mr-3 transition-colors duration-300 ${feature.included ? 'bg-space-cyan/20 text-space-cyan group-hover:bg-space-cyan/30' : 'bg-space-light-blue/50 text-space-white'}`}>
                <Check size={12} className={feature.included ? 'group-hover/feature:scale-110 transition-transform duration-300' : ''} />
              </div>
              <span className={`text-sm transition-colors duration-300 ${feature.included ? 'text-space-white group-hover/feature:text-space-cyan' : 'text-space-white/60 line-through'}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-space-cyan/10 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-lg"></div>
          <Link to={destinationId ? `/booking/${destinationId}?class=${encodeURIComponent(title)}` : '/booking'}>
            <Button 
              className={`w-full transition-all duration-300 hover:shadow-lg relative z-10 ${
                popular 
                  ? 'bg-space-cyan text-space-blue hover:bg-space-cyan/90 hover:shadow-space-cyan/30 hover:scale-105' 
                  : 'bg-space-light-blue/80 text-space-white hover:bg-space-light-blue/90 hover:shadow-space-light-blue/20 hover:scale-105'
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
