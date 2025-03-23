
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import AppCreator from '@/components/AppCreator';
import TextEditor from '@/components/TextEditor';
import GitHubIntegration from '@/components/GitHubIntegration';
import BackendSupport from '@/components/BackendSupport';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = 'Bach - Minimalisme & Élégance';
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout>
          <Hero />
          <AppCreator />
          <About />
          <Features />
          <TextEditor />
          <GitHubIntegration />
          <BackendSupport />
          <Contact />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
