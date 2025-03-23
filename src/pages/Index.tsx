
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import AppCreator from '@/components/AppCreator';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = 'Bach - Création d\'Applications';
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout>
          <AppCreator />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
