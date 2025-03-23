
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Bach. Tous droits réservés.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-hover">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-hover">
                Confidentialité
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 link-hover">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
