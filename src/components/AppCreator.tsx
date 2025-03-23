
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const AppCreator = () => {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState(`// Modifiez ce code pour voir les changements en temps réel
import React from 'react';

const App = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-2">Mon Application</h1>
      <p>Bienvenue dans mon application générée!</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Cliquez-moi
      </button>
    </div>
  );
};

export default App;`);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPreview, setGeneratedPreview] = useState<string | null>(null);

  // Fonction pour générer un aperçu basé sur le prompt et le code
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Champ requis",
        description: "Veuillez entrer une description de votre application",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simuler la génération d'application avec un délai
    setTimeout(() => {
      // Générer un aperçu en utilisant un placeholder d'image
      setGeneratedPreview(`https://placekitten.com/1024/768?t=${Date.now()}`);
      setIsLoading(false);
      toast({
        title: "Application générée",
        description: "Votre application a été créée avec succès!",
      });
    }, 2000);
  };

  return (
    <section id="createur" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
              Création Instantanée
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
              Donnez vie à vos idées en un instant
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Décrivez l'application de vos rêves et voyez-la prendre forme instantanément grâce à notre technologie d'IA avancée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/50 border border-border p-6 md:p-8 rounded-xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="app-prompt" className="block font-medium">
                    Décrivez votre application
                  </label>
                  <Textarea
                    id="app-prompt"
                    className="w-full h-32 px-4 py-3 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="Ex: Une application de gestion de tâches avec un design minimaliste, des fonctionnalités de rappel et un thème sombre..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white bg-primary rounded-md transition-colors duration-200 hover:bg-primary/90 focus:outline-none disabled:opacity-70"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Génération en cours...
                      </>
                    ) : (
                      "Générer l'application"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col">
              <div className="bg-black/90 rounded-xl overflow-hidden shadow-lg">
                <div className="flex items-center bg-black/80 px-4 py-2 border-b border-white/10">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-white/70 text-sm font-mono">
                    App.tsx
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
            </div>
          </div>

          {generatedPreview && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <h3 className="text-xl font-medium mb-4">Aperçu de votre application</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg border border-border shadow-md">
                  <img
                    src={generatedPreview}
                    alt="Aperçu de l'application générée"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium truncate">Application générée</h4>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14 9L20 3M20 3H15M20 3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
                  <h3 className="font-medium mb-2">Rendu du code</h3>
                  <div className="p-4 bg-white rounded-lg shadow border border-border">
                    <div className="p-4 bg-white rounded-lg shadow">
                      <h1 className="text-xl font-bold mb-2">Mon Application</h1>
                      <p>Bienvenue dans mon application générée!</p>
                      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                        Cliquez-moi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppCreator;
