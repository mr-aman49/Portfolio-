import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AIAssistantProps {
  message: string;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ message, onClose }) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Typing effect
  useEffect(() => {
    if (displayedMessage.length < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedMessage(message.substring(0, displayedMessage.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      setSuggestions([
        "Tell me about your skills",
        "Show me your projects",
        "How can I contact you?",
        "What technologies do you use?"
      ]);
    }
  }, [displayedMessage, message]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Simulate response to suggestion
  const handleSuggestion = (suggestion: string) => {
    setIsTyping(true);
    setDisplayedMessage('');
    setSuggestions([]);
    
    let newMessage = '';
    
    switch(suggestion) {
      case "Tell me about your skills":
        newMessage = "I specialize in Java, Spring Boot, React, Node.js, and cloud technologies. I'm proficient in building full-stack applications with modern frameworks and tools.";
        break;
      case "Show me your projects":
        newMessage = "I've worked on e-commerce platforms, task management systems, CRM applications, and DevOps automation pipelines. You can see them in the Projects section.";
        break;
      case "How can I contact you?":
        newMessage = "You can reach me through the contact form in the Contact section, or directly via email at contact@amanraj.com.";
        break;
      case "What technologies do you use?":
        newMessage = "I use Java, Spring Boot, React.js, Node.js, MongoDB, SQL, AWS, Docker, Kubernetes, and more. Check out the Skills section for a complete list.";
        break;
      default:
        newMessage = "I'm here to help you navigate through my portfolio. Feel free to ask anything!";
    }
    
    setTimeout(() => {
      setDisplayedMessage('');
      const typeMessage = (text: string, index: number) => {
        if (index < text.length) {
          setDisplayedMessage(prev => prev + text.charAt(index));
          setTimeout(() => typeMessage(text, index + 1), 30);
        } else {
          setIsTyping(false);
          setSuggestions([
            "Tell me about your skills",
            "Show me your projects",
            "How can I contact you?",
            "What technologies do you use?"
          ]);
        }
      };
      
      typeMessage(newMessage, 0);
    }, 500);
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-gray-900 border border-blue-500/30 rounded-lg shadow-lg z-40 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl mr-2">🤖</span>
          <span className="font-medium">AI Assistant</span>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={18} />
        </button>
      </div>
      
      {/* Message Area */}
      <div className="p-4 h-48 overflow-y-auto bg-gray-800/50">
        <div className="flex items-start mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0">
            <span className="text-sm">🤖</span>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3 text-sm">
            {displayedMessage}
            {isTyping && <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>}
            {isTyping && (
              <div className="mt-2 flex space-x-1">
                <span className="animate-pulse">●</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>●</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>●</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Suggestions */}
      {!isTyping && suggestions.length > 0 && (
        <div className="p-3 bg-gray-800 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Suggested questions:</div>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestion(suggestion)}
                className="w-full text-left text-sm bg-gray-700/50 hover:bg-blue-600/30 p-2 rounded transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* AI System Stats */}
      <div className="px-3 py-2 bg-gray-900 border-t border-gray-800 text-xs font-mono text-gray-500 flex justify-between">
        <div>AI MODEL: GPT-4</div>
        <div className="flex items-center">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
          ONLINE
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;