import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface AIChatProps {
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const suggestions = [
    "Tell me about your skills",
    "What projects have you worked on?",
    "How can I contact you?",
    "What technologies do you use?",
    "Tell me about your experience"
  ];

  useEffect(() => {
    // Add initial bot message
    const initialMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      text: "Hello! I'm Aman's AI assistant. How can I help you navigate this portfolio?",
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false);
    
    // Simulate AI thinking and response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setShowSuggestions(true);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technologies') || lowerMessage.includes('tech stack')) {
      return "I specialize in Java, Spring Boot, React, Node.js, and cloud technologies like AWS. I'm also proficient in Docker, Kubernetes, and CI/CD pipelines. Check out the Skills section for more details!";
    } else if (lowerMessage.includes('project')) {
      return "I've worked on several exciting projects including an E-Commerce Microservices platform, a Task Management Dashboard, a Cloud-Based CRM, and DevOps Automation Pipelines. You can find more details in the Projects section.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can contact me through the form in the Contact section, or directly via email at amanraj.87892@gmail.com. I'm also available on LinkedIn and GitHub.";
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return "I've been working as a Software Engineer since 2020, focusing on full-stack development and cloud technologies. I've gained experience in building scalable applications, microservices architecture, and DevOps practices.";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('degree')) {
      return "I completed my B.Tech in Computer Science from 2016 to 2020, where I gained a strong foundation in programming, algorithms, and software engineering principles.";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! How can I assist you with Aman's portfolio today?";
    } else if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else you'd like to know about Aman's skills, projects, or experience?";
    } else {
      return "I'm here to help you navigate through Aman's portfolio. Feel free to ask about his skills, projects, experience, or how to get in touch with him.";
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-gray-900 border border-blue-500/30 rounded-lg shadow-lg z-40 overflow-hidden flex flex-col max-h-[70vh]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Bot size={20} className="mr-2" />
          <span className="font-medium">AI Assistant</span>
          <span className="ml-2 bg-blue-500/30 text-xs px-2 py-0.5 rounded-full">GPT-4</span>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
          <X size={18} />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-800/50 space-y-4 min-h-[300px]">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-purple-600 ml-2' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 mr-2'
                }`}
              >
                {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              
              <div 
                className={`rounded-lg p-3 text-sm ${
                  message.type === 'user' 
                    ? 'bg-purple-600/40 rounded-tr-none' 
                    : 'bg-gray-700/50 rounded-tl-none'
                }`}
              >
                <div className="mb-1 text-xs text-gray-400 flex justify-between">
                  <span>{message.type === 'user' ? 'You' : 'AI Assistant'}</span>
                  <span className="ml-4">{formatTime(message.timestamp)}</span>
                </div>
                <p className="whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-gray-700/50 rounded-lg rounded-tl-none p-3 text-sm">
                <div className="mb-1 text-xs text-gray-400">AI Assistant</div>
                <div className="flex items-center">
                  <Loader2 size={16} className="animate-spin mr-2" />
                  <span>Thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggestions */}
      {showSuggestions && messages.length < 3 && (
        <div className="p-3 bg-gray-800 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2 flex items-center">
            <Sparkles size={12} className="mr-1" />
            <span>Suggested questions:</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left text-sm bg-gray-700/50 hover:bg-blue-600/30 p-2 rounded transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-3 bg-gray-800 border-t border-gray-700 flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-700 border border-gray-600 rounded-l-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-lg transition-colors"
          disabled={inputValue.trim() === ''}
        >
          <Send size={18} />
        </button>
      </form>
      
      {/* AI System Stats */}
      <div className="px-3 py-2 bg-gray-900 border-t border-gray-800 text-xs font-mono text-gray-500 flex justify-between">
        <div>MODEL: GPT-4</div>
        <div className="flex items-center">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
          <span>ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default AIChat;