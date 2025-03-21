
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-space-blue-900/95 border-t border-space-light-blue/20 py-12 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-space-white text-lg font-display font-bold">Astro Voyages</h2>
            <p className="text-space-white text-sm">
              Pioneering space tourism from Dubai to the stars. Experience the wonders of space travel with our premium packages.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-space-white hover:text-space-cyan transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-space-white hover:text-space-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-space-white hover:text-space-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@astrovoyages.com" className="text-space-white hover:text-space-cyan transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-space-white font-display font-bold mb-4">Destinations</h3>
            <ul className="space-y-2 text-space-white">
              <li><Link to="/destinations" className="hover:text-space-cyan transition-colors">Orbital Hotel</Link></li>
              <li><Link to="/destinations" className="hover:text-space-cyan transition-colors">Lunar Base</Link></li>
              <li><Link to="/destinations" className="hover:text-space-cyan transition-colors">Mars Colony</Link></li>
              <li><Link to="/destinations" className="hover:text-space-cyan transition-colors">Europa Research</Link></li>
              <li><Link to="/destinations" className="hover:text-space-cyan transition-colors">Titan Expedition</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-space-white font-display font-bold mb-4">Information</h3>
            <ul className="space-y-2 text-space-white">
              <li><Link to="/about" className="hover:text-space-cyan transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-space-cyan transition-colors">Pricing</Link></li>
              <li><Link to="/booking" className="hover:text-space-cyan transition-colors">Booking</Link></li>
              <li><Link to="/safety" className="hover:text-space-cyan transition-colors">Safety</Link></li>
              <li><Link to="/faq" className="hover:text-space-cyan transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-space-white font-display font-bold mb-4">Contact</h3>
            <address className="not-italic text-space-white">
              <p className="mb-2">Museum of the Future, Dubai</p>
              <p className="mb-2">United Arab Emirates</p>
              <p className="mb-2">+971 4 123 4567</p>
              <p className="mb-2">info@astrovoyages.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-space-light-blue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-space-white text-sm">
          <p>&copy; {new Date().getFullYear()} Astro Voyages. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-space-cyan transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-space-cyan transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-space-cyan transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
