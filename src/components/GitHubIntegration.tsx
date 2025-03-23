
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const GitHubIntegration = () => {
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
    <section id="github" className="py-20 md:py-32">
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
                Intégration GitHub
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
                Synchronisez vos projets avec GitHub
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Connectez votre compte GitHub pour un workflow de développement sans friction. Importez, exportez et gérez vos projets directement depuis votre navigateur.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/50 border border-border rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="bg-secondary p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <svg className="h-8 w-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor"/>
                        </svg>
                        <h3 className="text-xl font-medium">GitHub</h3>
                      </div>
                      <div className="space-y-4">
                        <button className="w-full inline-flex items-center justify-center h-10 px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="white"/>
                          </svg>
                          Connecter GitHub
                        </button>
                        <div className="text-sm text-muted-foreground">
                          <p>Connectez-vous pour synchroniser vos projets et accéder à toutes les fonctionnalités.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-secondary p-6 rounded-lg h-full">
                      <h3 className="text-lg font-medium mb-4">Fonctionnalités d'intégration</h3>
                      <ul className="space-y-4">
                        {[
                          {
                            title: "Synchronisation bidirectionnelle",
                            description: "Toutes les modifications sont automatiquement synchronisées entre Bach et vos dépôts GitHub"
                          },
                          {
                            title: "Gestion des branches",
                            description: "Créez, fusionnez et gérez vos branches directement depuis l'interface"
                          },
                          {
                            title: "Intégration de CI/CD",
                            description: "Déployez automatiquement vos modifications grâce à l'intégration avec les GitHub Actions"
                          },
                          {
                            title: "Pull Requests",
                            description: "Créez et examinez des pull requests sans quitter votre environnement de développement"
                          }
                        ].map((item, index) => (
                          <li key={index} className="flex">
                            <div className="mr-4 mt-1">
                              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg className="h-3 w-3 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubIntegration;
