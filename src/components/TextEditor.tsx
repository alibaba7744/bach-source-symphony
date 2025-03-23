
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TextEditor = () => {
  const [code, setCode] = useState(`// Modifiez ce code pour voir les changements en temps réel
import React from 'react';

const Button = () => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      Cliquez-moi
    </button>
  );
};

export default Button;`);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    <section id="editeur" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                Édition Intuitive
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
                Modifiez votre code en temps réel
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Notre éditeur intuitif vous permet de modifier votre code et de voir les changements instantanément, sans avoir à quitter votre navigateur.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/90 rounded-xl overflow-hidden shadow-lg">
                <div className="flex items-center bg-black/80 px-4 py-2 border-b border-white/10">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-white/70 text-sm font-mono">
                    Button.tsx
                  </div>
                </div>
                <div className="p-4">
                  <textarea
                    className="w-full h-[300px] bg-transparent text-white/90 font-mono text-sm resize-none focus:outline-none"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck="false"
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-border h-full">
                  <div className="flex items-center bg-secondary px-4 py-2 border-b border-border">
                    <div className="text-muted-foreground text-sm font-medium">
                      Aperçu
                    </div>
                  </div>
                  <div className="p-8 flex items-center justify-center h-full">
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded">
                        Cliquez-moi
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-white/50 p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Fonctionnalités de l'éditeur</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Coloration syntaxique
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Auto-complétion
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Aperçu en temps réel
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TextEditor;
