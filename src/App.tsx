import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAiChat = () => {
    setAiChatOpen(!aiChatOpen);
  };

  useEffect(() => {
    // Simulate AI system loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {isLoading ? (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-xl font-mono">
            <span className="text-blue-500">AI System</span> <span className="text-white">Initializing...</span>
          </div>
          <div className="mt-4 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" 
                 style={{ width: '100%', animation: 'progress 2s linear' }}></div>
          </div>
          <div className="mt-4 text-gray-400 text-sm font-mono">
            Loading neural networks...
          </div>
        </div>
      ) : (
        <>
          {/* AI System Status Bar */}
          <div className="bg-gray-900 border-b border-blue-900/50 text-xs py-1 px-4 flex justify-between items-center font-mono">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
              <span className="text-green-400">AI SYSTEM ONLINE</span>
            </div>
            <div className="text-blue-400">
              <span className="mr-4">CPU: 32%</span>
              <span className="mr-4">MEMORY: 64%</span>
              <span>NEURAL NETWORK: ACTIVE</span>
            </div>
          </div>

          <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          <Footer />

          {/* AI Chat Button */}
          <button 
            onClick={toggleAiChat}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg z-40 hover:from-blue-600 hover:to-purple-700 transition-all"
            aria-label="Open AI Chat"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
              <span className="text-2xl">🤖</span>
            </div>
          </button>

          {/* AI Chat Panel */}
          {aiChatOpen && <AIChat onClose={toggleAiChat} />}

          {/* AI Grid Background */}
          <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   mixBlendMode: 'overlay'
                 }}>
            </div>
          </div>

          {/* Floating AI Data Points */}
          <div className="fixed top-1/4 left-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="fixed top-1/3 right-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="fixed top-2/3 left-12 w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="fixed top-1/2 right-12 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </>
      )}
    </div>
  );
}

export default App;