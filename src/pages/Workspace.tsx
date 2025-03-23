
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TextEditor from '@/components/TextEditor';
import Layout from '@/components/Layout';

const Workspace = () => {
  useEffect(() => {
    document.title = 'Bach - Interface de Travail';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-medium">Interface de Travail</h1>
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
              Nouveau Projet
            </button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-medium mb-4">Projet en cours</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[300px] bg-white p-4 rounded shadow-sm border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Button Component</span>
                  <span className="text-xs text-muted-foreground">Modifié il y a 2h</span>
                </div>
                <p className="text-sm text-muted-foreground">Composant de bouton réactif avec styles Tailwind</p>
              </div>
              <div className="flex-1 min-w-[300px] bg-white p-4 rounded shadow-sm border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Navigation Bar</span>
                  <span className="text-xs text-muted-foreground">Modifié hier</span>
                </div>
                <p className="text-sm text-muted-foreground">Barre de navigation responsive avec menu mobile</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-border p-4">
              <h2 className="text-xl font-medium">Éditeur de Code</h2>
            </div>
            <TextEditor />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Workspace;
