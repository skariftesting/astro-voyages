
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black mt-16 py-12 px-4 md:px-6 mx-4 md:mx-8 lg:mx-12 mb-4 md:mb-8 lg:mb-12 rounded-md border border-space-cyan/30 shadow-lg relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="text-space-white font-display text-xl font-bold tracking-tight">
                STARPORT<span className="text-space-cyan">DUBAI</span>
              </h2>
            </Link>
            <p className="mt-4 text-space-white text-sm leading-relaxed">
              Beyond Earth, Beyond Limits only in Dubai
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-space-white hover:text-space-cyan transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-space-white hover:text-space-cyan transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-space-white hover:text-space-cyan transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-space-white hover:text-space-cyan transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-space-white font-medium text-base mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-space-white font-medium text-base mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-space-white text-sm hover:text-space-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-space-white font-medium text-base mb-4">Subscribe</h3>
            <p className="text-space-white text-sm mb-4">
              Stay updated with the latest missions and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-space-light-blue/70 backdrop-blur-md border border-space-light-blue/60 text-space-white rounded-l-lg px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-space-cyan"
              />
              <button
                type="submit"
                className="bg-space-cyan text-space-blue rounded-r-lg px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-space-white text-xs">
              By subscribing, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>

        <div className="border-t border-space-light-blue/60 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-space-white text-sm">
            &copy; {new Date().getFullYear()} Starport Dubai. All rights reserved.
          </p>
          <p className="text-space-white text-sm mt-4 md:mt-0">
            Beyond Earth, Beyond Limits only in Dubai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
