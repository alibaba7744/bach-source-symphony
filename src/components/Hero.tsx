
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        const xOffset = x * speed * 20;
        const yOffset = y * speed * 20;
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      ref={containerRef}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-secondary opacity-70"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Simplicité. Élégance. Clarté.
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6 text-balance"
          >
            Le minimalisme <br className="hidden md:block" />
            dans toute sa <span className="text-gradient">perfection</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
          >
            L'harmonie du design épuré se révèle dans les détails. Une expérience utilisateur élégante qui vous inspire.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#caracteristiques"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white bg-primary rounded-md transition-colors duration-200 hover:bg-primary/90 focus:outline-none"
            >
              Découvrir
            </a>
            <a
              href="#a-propos"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-primary border border-primary rounded-md transition-colors duration-200 hover:bg-primary/5 focus:outline-none"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10">
        <div 
          className="parallax absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r from-secondary to-secondary/50 blur-3xl opacity-50"
          data-speed="1.5"
        ></div>
        <div 
          className="parallax absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-l from-muted to-muted/30 blur-3xl opacity-40"
          data-speed="2"
        ></div>
        <div 
          className="parallax absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-t from-accent to-accent/30 blur-3xl opacity-30"
          data-speed="1.2"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
