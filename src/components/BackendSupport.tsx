
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BackendSupport = () => {
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

  const tabs = [
    { id: "db", label: "Base de données", icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 12C20.25 14.2782 16.5563 16.125 12 16.125C7.44365 16.125 3.75 14.2782 3.75 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { id: "api", label: "API", icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 16L21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { id: "auth", label: "Authentification", icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10H19C19.5523 10 20 10.4477 20 11V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11C4 10.4477 4.44772 10 5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
    { id: "storage", label: "Stockage", icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 11H5M19 11C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11M19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V11M12 7H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  ];

  return (
    <section id="backend" className="py-20 md:py-32 bg-secondary">
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
                Support Backend
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
                Infrastructure complète pour vos applications
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Concentrez-vous sur votre code pendant que nous gérons l'infrastructure. Bases de données, API, authentification et stockage — tout en un seul endroit.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border">
                <div className="flex border-b border-border">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className="flex items-center gap-2 px-4 py-3 font-medium text-sm border-r border-border focus:outline-none last:border-r-0 hover:bg-secondary/50 transition-colors aria-selected:bg-secondary aria-selected:text-primary"
                      aria-selected={tab.id === "db"}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-lg font-medium mb-2">Base de données flexible</h3>
                      <p className="text-sm text-muted-foreground">
                        Créez et gérez vos modèles de données sans quitter l'interface. Ajoutez des relations, définissez des contraintes et visualisez vos données en temps réel.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm">PostgreSQL</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                          <span className="text-sm">MongoDB</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                          <span className="text-sm">Firestore</span>
                        </div>
                      </div>
                      
                      <button className="mt-4 text-sm font-medium text-primary flex items-center">
                        Explorer les options
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="md:col-span-3 bg-black/90 rounded-lg overflow-hidden">
                      <div className="flex items-center bg-black/80 px-4 py-2 border-b border-white/10">
                        <div className="flex space-x-2 mr-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-white/70 text-xs font-mono">
                          schema.sql
                        </div>
                      </div>
                      <pre className="p-4 text-white/90 font-mono text-xs overflow-auto">
{`CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX tasks_user_id_idx ON tasks(user_id);
CREATE INDEX tasks_status_idx ON tasks(status);`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "API Serverless",
                  description: "Créez des endpoints API sans gérer de serveurs. Déployez automatiquement votre backend.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 16L21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Authentification Sécurisée",
                  description: "Implémentez l'authentification avec email, réseaux sociaux et SSO en quelques clics.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 8V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 10H19C19.5523 10 20 10.4477 20 11V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11C4 10.4477 4.44772 10 5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Stockage de Fichiers",
                  description: "Stockez et gérez vos fichiers avec une intégration native pour les images, vidéos et documents.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 11H5M19 11C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11M19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V11M12 7H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendSupport;
