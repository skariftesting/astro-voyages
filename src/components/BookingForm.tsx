import { useState } from 'react';
import { Calendar as CalendarIcon, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface BookingFormProps {
  destinationId?: string;
  destinationName?: string;
  selectedClass?: string;
}

const BookingForm = ({ 
  destinationId, 
  destinationName = 'Select a destination',
  selectedClass 
}: BookingFormProps) => {
  const [date, setDate] = useState<Date>();
  const [passengers, setPassengers] = useState('1');
  const [classType, setClassType] = useState(selectedClass || '');
  const [step, setStep] = useState(1);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const destinations = [
    { id: 'orbital-hotel', name: 'Orbital Luxury Hotel' },
    { id: 'lunar-base', name: 'Lunar Base Alpha' },
    { id: 'mars-colony', name: 'Mars Colony' },
    { id: 'europa-research', name: 'Europa Research Station' },
    { id: 'titan-expedition', name: 'Titan Expedition' },
  ];
  
  const classTypes = [
    { id: 'economy', name: 'Economy', price: 3500 },
    { id: 'business', name: 'Business', price: 9500 },
    { id: 'luxury', name: 'Luxury', price: 25000 },
    { id: 'zero-gravity-vip', name: 'Zero-Gravity VIP', price: 45000 },
  ];
  
  const handleContinue = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to complete your booking.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    if (step === 1) {
      if (!destinationId && !date) {
        toast({
          title: "Please select both a destination and date",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!classType) {
        toast({
          title: "Please select a class",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      toast({
        title: "Success!",
        description: "Your booking has been submitted.",
        variant: "default",
      });
      
      // Here would go the API call to submit the booking
      console.log({
        destinationId: destinationId || 'Not selected',
        date,
        passengers,
        classType
      });
    }
  };
  
  const selectedClassPrice = classTypes.find(c => c.id === classType || c.name === classType)?.price || 0;
  const totalPrice = selectedClassPrice * parseInt(passengers || '1');
  
  return (
    <div className="glass-panel w-full max-w-md mx-auto">
      <div className="p-6">
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className="flex flex-col items-center"
              onClick={() => s < step && setStep(s)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                s === step 
                  ? 'bg-space-cyan text-space-blue' 
                  : s < step 
                    ? 'bg-space-cyan/20 text-space-cyan' 
                    : 'bg-space-light-blue/40 text-space-gray'
              }`}>
                {s < step ? <CheckCircle2 size={16} /> : s}
              </div>
              <span className={`text-xs mt-2 ${
                s <= step ? 'text-space-white' : 'text-space-gray'
              }`}>
                {s === 1 ? 'Trip Details' : s === 2 ? 'Class Selection' : 'Confirmation'}
              </span>
            </div>
          ))}
        </div>
        
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-display font-bold text-space-white">Trip Details</h3>
            
            {!destinationId && (
              <div className="space-y-2">
                <label className="text-sm text-space-light-gray">Destination</label>
                <Select>
                  <SelectTrigger className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white">
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-space-blue border-space-light-blue/30">
                    {destinations.map((destination) => (
                      <SelectItem 
                        key={destination.id} 
                        value={destination.id}
                        className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white"
                      >
                        {destination.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            
            {destinationId && (
              <div className="space-y-2">
                <label className="text-sm text-space-light-gray">Destination</label>
                <div className="bg-space-light-blue/30 border border-space-light-blue/30 p-3 rounded-md text-space-white">
                  {destinationName}
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm text-space-light-gray">Departure Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full border-space-light-blue/30 bg-space-light-blue/30 text-left font-normal",
                      !date && "text-space-gray"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-space-blue border-space-light-blue/30">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-space-light-gray">Number of Passengers</label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white">
                  <SelectValue placeholder="Select number of passengers" />
                </SelectTrigger>
                <SelectContent className="bg-space-blue border-space-light-blue/30">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem 
                      key={num} 
                      value={num.toString()}
                      className="text-space-white focus:bg-space-light-blue/20 focus:text-space-white"
                    >
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-display font-bold text-space-white">Select Your Class</h3>
            
            <div className="space-y-4">
              {classTypes.map((classOption) => (
                <div 
                  key={classOption.id}
                  className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    classType === classOption.id || classType === classOption.name
                      ? 'bg-space-cyan/10 border border-space-cyan/30'
                      : 'glass-panel hover:bg-space-light-blue/40'
                  }`}
                  onClick={() => setClassType(classOption.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-space-white">{classOption.name}</h4>
                      <p className="text-sm text-space-light-gray mt-1">
                        {classOption.id === 'economy' && 'Basic amenities with standard seating'}
                        {classOption.id === 'business' && 'Enhanced comfort with extra space'}
                        {classOption.id === 'luxury' && 'Premium experience with gourmet dining'}
                        {classOption.id === 'zero-gravity-vip' && 'Ultimate luxury with private quarters'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-space-white">${classOption.price.toLocaleString()}</p>
                      <p className="text-xs text-space-light-gray">per person</p>
                    </div>
                  </div>
                  
                  {(classType === classOption.id || classType === classOption.name) && (
                    <div className="absolute top-2 right-2 text-space-cyan">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-xl font-display font-bold text-space-white">Confirm Your Booking</h3>
            
            <div className="space-y-4">
              <div className="glass-panel p-4">
                <h4 className="text-sm text-space-light-gray">Destination</h4>
                <p className="text-space-white font-medium">{destinationName}</p>
              </div>
              
              <div className="glass-panel p-4">
                <h4 className="text-sm text-space-light-gray">Departure Date</h4>
                <p className="text-space-white font-medium">{date ? format(date, "PPP") : 'Not selected'}</p>
              </div>
              
              <div className="glass-panel p-4">
                <h4 className="text-sm text-space-light-gray">Passengers</h4>
                <p className="text-space-white font-medium">{passengers}</p>
              </div>
              
              <div className="glass-panel p-4">
                <h4 className="text-sm text-space-light-gray">Class</h4>
                <p className="text-space-white font-medium">
                  {classTypes.find(c => c.id === classType || c.name === classType)?.name || 'Not selected'}
                </p>
              </div>
              
              <div className="glass-panel p-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm text-space-light-gray">Price per person</h4>
                  <p className="text-space-white font-medium">${selectedClassPrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <h4 className="text-sm text-space-light-gray">Number of passengers</h4>
                  <p className="text-space-white font-medium">× {passengers}</p>
                </div>
                <div className="border-t border-space-light-blue/30 my-2 pt-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-space-white">Total Price</h4>
                    <p className="text-space-cyan font-bold text-lg">${totalPrice.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <Button 
              variant="outline" 
              className="border-space-light-blue/30 hover:bg-space-light-blue/20 text-space-white"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
          )}
          <Button 
            className={`${step === 3 ? 'bg-space-cyan text-space-blue' : 'bg-space-light-blue/50'} ml-auto`}
            onClick={handleContinue}
          >
            {step === 3 ? 'Confirm Booking' : 'Continue'}
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
