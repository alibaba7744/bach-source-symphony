
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: "Design Élégant",
    description: "Une esthétique soigneusement élaborée qui allie beauté et fonctionnalité dans une harmonie parfaite.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Interaction Intuitive",
    description: "Des mouvements et transitions fluides qui rendent chaque interaction naturelle et agréable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M8 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 2V10M12 10L9 7M12 10L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Attention aux Détails",
    description: "Chaque pixel et chaque transition a été méticuleusement pensé pour créer une expérience cohérente.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.2218 11.123C18.2868 11.4013 18.32 11.6936 18.32 11.992C18.32 12.2905 18.2868 12.5828 18.2218 12.861C18.0618 13.558 17.7404 14.208 17.2824 14.759C16.8245 15.3099 16.2462 15.761 15.5923 16.0766C14.9383 16.3921 14.2256 16.564 13.5013 16.5798C12.777 16.5956 12.0569 16.455 11.3906 16.1681C10.7243 15.8812 10.1286 15.456 9.64823 14.9265C9.16783 14.397 8.82049 13.7715 8.63055 13.0895C8.44062 12.4075 8.41422 11.6908 8.55362 10.9953C8.69302 10.2998 8.99448 9.64397 9.43721 9.076" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.9282 8.46737C20.3712 9.55641 20.6172 10.7151 20.6522 11.8901C20.6873 13.0652 20.511 14.2364 20.1336 15.349C19.7563 16.4615 19.1847 17.4979 18.4487 18.4034C17.7127 19.309 16.8258 20.0683 15.8336 20.6382C14.8415 21.2082 13.7607 21.578 12.6446 21.7286C11.5285 21.8792 10.3936 21.8077 9.30232 21.5181C8.21109 21.2285 7.18538 20.7262 6.2747 20.0402C5.36401 19.3542 4.58571 18.4974 3.9835 17.512" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.64621 5.58237C9.55711 4.78825 10.627 4.18065 11.7862 3.80041C12.9454 3.42018 14.1677 3.27579 15.385 3.37695C16.6022 3.47811 17.7874 3.82306 18.8662 4.38941C19.945 4.95576 20.895 5.73191 21.6613 6.67253C22.4276 7.61316 22.9958 8.70031 23.3318 9.86902C23.6678 11.0377 23.7647 12.2648 23.6162 13.478C23.4677 14.6911 23.0768 15.8648 22.4678 16.9265C21.8589 17.9883 21.0438 18.918 20.073 19.661" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Simplicité Intentionnelle",
    description: "Un design épuré qui élimine le superflu pour se concentrer sur l'essentiel et valoriser le contenu.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 12C20.25 14.2782 16.5563 16.125 12 16.125C7.44365 16.125 3.75 14.2782 3.75 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Accessibilité Totale",
    description: "Une expérience inclusive conçue pour être accessible à tous, quelle que soit la façon dont les utilisateurs interagissent.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13H8V17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 13H16V17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 17C8 17 9.5 15 12 15C14.5 15 16 17 16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Adaptabilité Parfaite",
    description: "Une expérience homogène sur tous les appareils, s'adaptant élégamment à chaque taille d'écran.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="caracteristiques" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
            Caractéristiques
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
            Une perfection dans chaque détail
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Découvrez comment chaque aspect de notre design a été méticuleusement élaboré pour créer une expérience harmonieuse.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg border border-border bg-white/50 hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
