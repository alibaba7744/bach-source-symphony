import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useCodeGenerator } from "@/hooks/useCodeGenerator";

const AppCreator = () => {
  const [prompt, setPrompt] = useState('');
  const { isGenerating, generatedCode, generateCode } = useCodeGenerator();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Champ requis",
        description: "Veuillez décrire l'application que vous voulez créer",
        variant: "destructive",
      });
      return;
    }

    try {
      await generateCode(prompt);
      toast({
        title: "Code généré",
        description: "Votre code React a été créé avec succès!",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Erreur lors de la génération",
        variant: "destructive",
      });
    }
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

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 border border-border p-6 md:p-8 rounded-xl shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="app-prompt" className="block font-medium">
                    Décrivez votre application en détail
                  </label>
                  <Textarea
                    id="app-prompt"
                    className="w-full h-32 px-4 py-3 rounded-md border border-input bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    placeholder="Ex: Crée-moi un compteur avec des boutons + et - et un design moderne avec Tailwind..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white bg-primary rounded-md transition-colors duration-200 hover:bg-primary/90 focus:outline-none disabled:opacity-70"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Génération en cours...
                      </>
                    ) : (
                      "Générer le code"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col">
              <div className="bg-black/90 rounded-xl overflow-hidden shadow-lg h-full">
                <div className="flex items-center bg-black/80 px-4 py-2 border-b border-white/10">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-white/70 text-sm font-mono">
                    Code Généré
                  </div>
                </div>
                <div className="p-4 overflow-auto h-[400px]">
                  <pre className="text-white/90 font-mono text-sm whitespace-pre-wrap">
                    {generatedCode || "// Le code généré apparaîtra ici..."}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCreator;
