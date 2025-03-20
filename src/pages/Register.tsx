
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { generateStars } from '@/utils/animations';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const signUpSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const Register = () => {
  const [stars] = useState(() => generateStars(100));
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
          },
        },
      });

      if (error) {
        throw error;
      }

      toast.success('Registration successful!', {
        description: 'Check your email for the confirmation link.',
      });

      // Navigate to login page after successful registration
      navigate('/login');
    } catch (error: any) {
      toast.error('Registration failed', {
        description: error.message || 'Please try again later',
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
              <h1 className="text-2xl font-display font-bold text-space-white mb-2">Join AstroVoyages</h1>
              <p className="text-space-gray">Create your account to start your space journey</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-space-light-gray">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          className="bg-space-light-blue/30 border-space-light-blue/30 text-space-white placeholder:text-space-gray"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
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
                      <FormLabel className="text-space-light-gray">Password</FormLabel>
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
                
                <Button
                  type="submit"
                  className="w-full bg-space-cyan text-space-blue hover:bg-space-cyan/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
                
                <div className="text-center text-space-light-gray text-sm">
                  Already have an account?{' '}
                  <Link to="/login" className="text-space-cyan hover:text-space-cyan/80 transition-colors">
                    Sign in
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

export default Register;
