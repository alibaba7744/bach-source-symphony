
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="à-propos" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/20" />
                      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/30" />
                      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/40" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-serif font-medium">B</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4 self-start">
                À propos
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
                L'harmonie du design minimaliste
              </h2>
              
              <p className="text-muted-foreground mb-6 text-balance">
                Inspiré par les principes intemporels du design, nous créons des expériences où chaque élément a sa raison d'être. Notre approche est fondée sur la clarté, la simplicité et une attention méticuleuse aux détails.
              </p>
              
              <p className="text-muted-foreground mb-8 text-balance">
                Ce n'est pas simplement une question d'esthétique – c'est une philosophie qui valorise la fonctionnalité sans sacrifier l'élégance, offrant une expérience utilisateur intuitive et raffinée.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Simplicité intentionnelle dans chaque détail",
                  "Cohérence visuelle et expérientielle",
                  "Fonctionnalité élevée au rang d'art"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
