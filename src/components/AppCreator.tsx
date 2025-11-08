import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from "@/components/ui/use-toast";
import { useCodeGenerator } from "@/hooks/useCodeGenerator";
import { Send, User, Bot, Code } from 'lucide-react';

const AppCreator = () => {
  const [input, setInput] = useState('');
  const { messages, isGenerating, generatedCode, generateCode } = useCodeGenerator();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, generatedCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userInput = input;
    setInput('');
    
    try {
      await generateCode(userInput);
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Erreur lors de la génération",
        variant: "destructive",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <section id="createur" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
              Assistant IA de Code
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-4">
              Créez des composants React par conversation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discutez avec l'IA comme vous le feriez avec un développeur. Décrivez ce que vous voulez et voyez le code prendre forme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 h-[700px]">
            {/* Chat Section */}
            <div className="flex flex-col bg-white/50 border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="bg-primary/5 px-4 py-3 border-b border-border flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">Conversation</span>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <Bot className="w-16 h-16 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground text-sm max-w-sm">
                      Commencez la conversation ! Décrivez le composant que vous voulez créer.
                    </p>
                    <div className="mt-6 space-y-2 text-xs text-muted-foreground/70">
                      <p>Exemples :</p>
                      <p className="italic">"Crée un compteur avec + et -"</p>
                      <p className="italic">"Fais-moi un formulaire de contact"</p>
                      <p className="italic">"Une carte de profil avec avatar"</p>
                    </div>
                  </div>
                )}

                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}

                {isGenerating && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-border bg-background/50">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Décrivez ce que vous voulez créer..."
                    className="flex-1 min-h-[44px] max-h-32 px-4 py-3 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    disabled={isGenerating}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isGenerating}
                    className="h-11 w-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Code & Preview Section */}
            <div className="flex flex-col gap-4">
              {/* Code Display */}
              <div className="flex-1 bg-black/90 rounded-xl overflow-hidden shadow-lg">
                <div className="flex items-center bg-black/80 px-4 py-2 border-b border-white/10">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Code className="w-4 h-4 text-white/70 mr-2" />
                  <div className="text-white/70 text-sm font-mono">Code généré</div>
                </div>
                <div className="p-4 overflow-auto h-[calc(50%-40px)]">
                  {generatedCode ? (
                    <pre className="text-white/90 font-mono text-xs whitespace-pre-wrap">
                      {generatedCode}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/30 text-sm">
                      Le code apparaîtra ici...
                    </div>
                  )}
                </div>
              </div>

              {/* Preview */}
              <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="flex items-center bg-secondary px-4 py-2 border-b border-border">
                  <div className="text-muted-foreground text-sm font-medium">Aperçu en direct</div>
                </div>
                <div className="p-4 h-[calc(50%-40px)] overflow-auto bg-gray-50">
                  {generatedCode ? (
                    <iframe
                      key={generatedCode}
                      srcDoc={`
                        <!DOCTYPE html>
                        <html>
                        <head>
                          <script src="https://cdn.tailwindcss.com"></script>
                          <style>
                            body { margin: 0; padding: 20px; font-family: system-ui, sans-serif; }
                          </style>
                        </head>
                        <body>
                          <div id="root"></div>
                          <script type="module">
                            import React from 'https://esm.sh/react@18.2.0';
                            import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';
                            
                            try {
                              ${generatedCode.replace('export default', 'const Component =')}
                              const root = ReactDOM.createRoot(document.getElementById('root'));
                              root.render(React.createElement(Component));
                            } catch (error) {
                              document.getElementById('root').innerHTML = '<div style="color: red; padding: 20px; background: #fee; border: 2px solid red; border-radius: 8px; margin: 10px;"><strong>Erreur:</strong> ' + error.message + '</div>';
                              console.error('Iframe error:', error);
                            }
                          </script>
                        </body>
                        </html>
                      `}
                      className="w-full h-full border border-border rounded bg-white"
                      sandbox="allow-scripts"
                      title="Preview"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                      L'aperçu apparaîtra ici...
                    </div>
                  )}
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
