
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [stars, setStars] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }
    
    // Mock login - in a real app this would call an API
    toast({
      title: 'Login successful',
      description: 'Welcome back!',
    });
    
    console.log({ email, password, rememberMe });
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
      
      <main className="pt-24 px-4 pb-20 flex justify-center items-center">
        <div className="container max-w-md mx-auto">
          <div className="glass-panel p-8 animate-scale-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-display font-bold text-space-white mb-2">Welcome Back</h1>
              <p className="text-space-gray">Sign in to continue your space journey</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-space-light-gray">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white placeholder:text-space-gray"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-space-light-gray">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-xs text-space-cyan hover:text-space-cyan/80 transition-colors">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white placeholder:text-space-gray pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-space-gray hover:text-space-white transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="data-[state=checked]:bg-space-cyan data-[state=checked]:border-space-cyan"
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium text-space-light-gray leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me for 30 days
                </label>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-space-cyan text-space-blue hover:bg-space-cyan/90"
              >
                Sign In
              </Button>
              
              <div className="text-center text-space-light-gray text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-space-cyan hover:text-space-cyan/80 transition-colors">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
