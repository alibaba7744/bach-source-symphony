
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message envoyé avec succès !');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                Contact
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
                Prêt à découvrir <br className="hidden md:block" /> l'essentiel ?
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-md">
                Contactez-nous pour discuter de votre projet ou simplement pour en savoir plus sur notre approche.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5 19.5 16 15.5 16 12C16 8.5 14.5 4.5 12 2M12 22C9.5 19.5 8 15.5 8 12C8 8.5 9.5 4.5 12 2M2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Notre site web</h4>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 link-hover">
                      www.bach-design.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99633C21.75 7.79742 21.3447 8.54688 20.6792 8.97526L13.1792 13.5025C12.4561 13.9637 11.5439 13.9637 10.8208 13.5025L3.32078 8.97526C2.65535 8.54688 2.25 7.79742 2.25 6.99633V6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@bach-design.com" className="text-muted-foreground hover:text-foreground transition-colors duration-200 link-hover">
                      contact@bach-design.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.3284 21.75 21 21.0784 21 20.25V18.9706C21 18.5452 20.7312 18.1676 20.3356 18.0267L16.0552 16.5635C15.5078 16.3691 14.9066 16.633 14.7235 17.1863L14.0992 18.9119C13.9375 19.3824 13.5021 19.7054 13.0115 19.6787C8.51173 19.4573 4.93651 15.8821 4.71514 11.3824C4.68346 10.891 5.00648 10.4548 5.47703 10.2931L7.20264 9.6688C7.75421 9.4869 8.01768 8.88854 7.82467 8.3421L6.36134 4.06173C6.22008 3.66618 5.84285 3.39789 5.41706 3.39789H4.14124C3.31282 3.39789 2.64124 4.06947 2.64124 4.89789C2.64124 5.19291 2.25 6.75 2.25 6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <a href="tel:+33612345678" className="text-muted-foreground hover:text-foreground transition-colors duration-200 link-hover">
                      +33 6 12 34 56 78
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-border">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
