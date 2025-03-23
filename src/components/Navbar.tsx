
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className="text-2xl font-serif font-medium tracking-tight"
            >
              Bach
            </a>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Accueil', 'À propos', 'Caractéristiques', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium hover:text-black/70 transition-colors duration-200 link-hover"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <button 
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col space-y-1.5">
                <span className={`block h-0.5 bg-current transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 bg-current transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 pt-8">
              {['Accueil', 'À propos', 'Caractéristiques', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-2xl font-medium hover:text-black/70 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
