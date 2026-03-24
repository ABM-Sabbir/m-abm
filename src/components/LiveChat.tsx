import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Phone, Mail, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to M&ABM Consultancy and Law Firm. I am an AI assistant here to help answer your questions. How can I assist you today?',
      sender: 'agent',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: "You are a helpful, professional legal assistant chatbot for M&ABM Consultancy and Law Firm. You answer questions about the firm's services (Corporate Law, Banking & Finance, Admiralty & Maritime, Dispute Resolution, Criminal Defence), team (Moyez Uddin Sarkar, A.B.M. Sabbir Hossain), and provide general guidance. Do not provide official legal advice, but guide users to contact the firm for a consultation. Be concise and polite.",
        }
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userText });
      
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text || 'I apologize, but I am unable to process your request at the moment. Please try again or contact us directly.',
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMsg]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I am having trouble connecting right now. Please call us at 01511305046 or email us for immediate assistance.',
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-amber-700 text-white rounded-full shadow-xl hover:bg-amber-800 transition-all z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open live chat"
        aria-expanded={isOpen}
        aria-controls="live-chat-window"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="live-chat-window"
            role="dialog"
            aria-label="Live Chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-slate-100"
            style={{ height: '500px', maxHeight: 'calc(100vh - 3rem)' }}
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex justify-between items-center text-white shrink-0">
              <div>
                <h3 className="font-semibold text-sm">Live Support</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  We typically reply in a few minutes
                </p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-slate-300 hover:text-white transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
                aria-label="Close live chat"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Escalation Options */}
            <div className="bg-amber-50 border-b border-amber-100 p-3 flex items-center justify-between shrink-0">
              <span className="text-xs text-amber-800 font-medium">Need immediate help?</span>
              <div className="flex gap-2">
                <a 
                  href="tel:01511305046" 
                  className="flex items-center gap-1.5 bg-amber-700 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-amber-800 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50"
                >
                  <Phone className="w-3 h-3" aria-hidden="true" />
                  Call
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 bg-white text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-amber-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-50"
                >
                  <Mail className="w-3 h-3" aria-hidden="true" />
                  Email
                </a>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4" role="log" aria-live="polite">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-amber-700 text-white rounded-tr-sm'
                        : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className={`text-[10px] mt-1.5 ${msg.sender === 'user' ? 'text-amber-200' : 'text-slate-400'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 shadow-sm border border-slate-100 rounded-2xl rounded-tl-sm p-3">
                    <Loader2 className="w-4 h-4 animate-spin text-amber-700" aria-hidden="true" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  aria-label="Type your message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
