
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  // Add Dashboard link if user is authenticated
  if (isAuthenticated) {
    navLinks.push({ name: 'Dashboard', path: '/dashboard' });
  }

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut();
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-blue/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center flex-col">
            <span className="text-space-white font-display text-xl md:text-2xl font-bold tracking-tight">
              STARPORT<span className="text-space-cyan">DUBAI</span>
            </span>
            <span className="text-space-light-gray text-xs italic mt-1 hidden md:block"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-space-cyan font-medium'
                    : 'text-space-light-gray hover:text-space-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="text-space-light-gray text-sm mr-2">
                  {user?.email}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-space-light-gray hover:text-space-white hover:bg-space-light-blue/20"
                  onClick={handleSignOut}
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-space-light-gray hover:text-space-white hover:bg-space-light-blue/20">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-space-cyan text-space-blue hover:bg-space-cyan/90">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-space-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-space-light-blue/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base py-2 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-space-cyan font-medium'
                      : 'text-space-light-gray hover:text-space-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-space-light-blue/30">
                {isAuthenticated ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-space-light-gray hover:text-space-white hover:bg-space-light-blue/20"
                    onClick={handleSignOut}
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Link to="/login" className="w-1/2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full text-space-light-gray hover:text-space-white hover:bg-space-light-blue/20">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/register" className="w-1/2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-space-cyan text-space-blue hover:bg-space-cyan/90">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
