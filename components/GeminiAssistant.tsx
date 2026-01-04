
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { getBeautyAdvice } from '../services/geminiService';
import { VENDOR_NAME } from '../constants';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: `Olá, sou seu assistente técnico do Catálogo da ${VENDOR_NAME}. Como posso ajudar seu salão de beleza hoje?` }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);
    const aiResponse = await getBeautyAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-[#2D2D2D] text-[#C5A059] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border border-[#C5A059]/30"
      >
        <Sparkles size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 sm:h-[500px] z-50 bg-[#FDFBF9] flex flex-col shadow-2xl sm:rounded-[32px] overflow-hidden border border-orange-100 animate-[pop_0.4s_ease-out]">
          <div className="bg-[#2D2D2D] p-5 text-white flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#C5A059]" />
                <span className="font-black text-[10px] uppercase tracking-widest">Suporte Técnico Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} className="text-gray-400 hover:text-white" /></button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-[#FDFBF9] no-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[20px] text-xs leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#D8B4A6] text-white rounded-tr-none' 
                    : 'bg-white text-[#2D2D2D] shadow-sm border border-orange-50 rounded-tl-none font-medium'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-full shadow-sm flex gap-1 border border-orange-50">
                  <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-[#C5A059] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-5 bg-white border-t border-orange-50 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Fale com nossa consultoria..."
              className="flex-grow bg-gray-50 border-none rounded-2xl px-5 py-3 text-xs focus:ring-1 focus:ring-[#C5A059] outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="bg-[#2D2D2D] text-[#C5A059] p-3 rounded-2xl hover:opacity-90 disabled:opacity-50 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;
