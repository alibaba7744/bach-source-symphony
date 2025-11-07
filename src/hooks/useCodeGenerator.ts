import { useState } from 'react';

type Message = { role: "user" | "assistant"; content: string };

export const useCodeGenerator = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const generateCode = async (userPrompt: string) => {
    const userMsg: Message = { role: "user", content: userPrompt };
    setMessages(prev => [...prev, userMsg]);
    setIsGenerating(true);
    setGeneratedCode("");

    let assistantSoFar = "";
    
    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-code-generator`;
      
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          throw new Error("Limite de requêtes atteinte, réessayez plus tard.");
        }
        if (resp.status === 402) {
          throw new Error("Crédit insuffisant, ajoutez des crédits.");
        }
        throw new Error("Erreur lors de la génération");
      }

      if (!resp.body) throw new Error("Pas de réponse");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              setGeneratedCode(assistantSoFar);
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              setGeneratedCode(assistantSoFar);
            }
          } catch { /* ignore */ }
        }
      }

      setMessages(prev => [...prev, { role: "assistant", content: assistantSoFar }]);
      setIsGenerating(false);
    } catch (e) {
      console.error(e);
      setIsGenerating(false);
      throw e;
    }
  };

  return { messages, isGenerating, generatedCode, generateCode };
};