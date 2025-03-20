
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [stars] = useState(() => generateStars(100));
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/dashboard');
      }
    };
    
    checkSession();
  }, [navigate]);

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        throw error;
      }

      toast.success('Login successful', {
        description: 'Welcome back!',
      });

      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } catch (error: unknown) {
      toast.error('Login failed', {
        description: error instanceof Error ? error.message : 'Please check your credentials and try again',
      });
    } finally {
      setIsLoading(false);
    }
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-space-light-gray">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="you@example.com"
                          className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white placeholder:text-space-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between">
                        <FormLabel className="text-space-light-gray">Password</FormLabel>
                        <Link to="/forgot-password" className="text-xs text-space-cyan hover:text-space-cyan/80 transition-colors">
                          Forgot Password?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            type={showPassword ? 'text' : 'password'}
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-space-cyan data-[state=checked]:border-space-cyan"
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-medium text-space-light-gray leading-none cursor-pointer">
                        Remember me for 30 days
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-space-cyan text-space-blue hover:bg-space-cyan/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
                
                <div className="text-center text-space-light-gray text-sm">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-space-cyan hover:text-space-cyan/80 transition-colors">
                    Sign up
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
