import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo size={40} />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
            NearBux
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'
            }`}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'
            }`}
          >
            For Businesses
          </a>
          <a 
            href="#how-it-works" 
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-accent-300'
            }`}
          >
            How It Works
          </a>
          
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <a 
              href="#features" 
              className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              For Businesses
            </a>
            <a 
              href="#how-it-works" 
              className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <button 
              className="mt-4 w-full px-5 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;