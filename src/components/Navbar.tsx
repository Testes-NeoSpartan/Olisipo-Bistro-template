import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { RESTAURANT_INFO } from '@/src/data/restaurant';

import { GoogleTranslate } from './GoogleTranslate';
import { useBooking } from '@/src/context/BookingContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Menu', href: '#menu' },
    { name: 'A Nossa Alma', href: '#about' },
    { name: 'Contactos', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 border-b border-brand-ink/5" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end">
        <Link to="/" className="group flex flex-col">
          <span className={cn(
            "editorial-heading text-4xl mb-1 transition-colors duration-300",
            isScrolled ? "text-brand-ink" : "text-white"
          )}>
            Olisipo
          </span>
          <span className={cn(
            "editorial-caps opacity-60",
            isScrolled ? "text-brand-ink" : "text-white"
          )}>
            Bistro — Lisboa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <GoogleTranslate />
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "editorial-caps hover:opacity-50 transition-opacity duration-300",
                isScrolled ? "text-brand-ink" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={openBooking}
            className={cn(
              "px-6 py-3 rounded-full border editorial-caps transition-all duration-300",
              isScrolled 
                ? "border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-brand-ink"
            )}
          >
            Reservar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className={isScrolled ? "text-brand-olive" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-brand-olive" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-12 px-6 flex flex-col items-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-brand-olive hover:text-brand-gold"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-slate-100 w-full justify-center">
              <Instagram size={24} className="text-brand-olive" />
              <Facebook size={24} className="text-brand-olive" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
