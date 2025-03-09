import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import AIBackground from './components/AIBackground';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAiChat = () => {
    setAiChatOpen(!aiChatOpen);
  };

  useEffect(() => {
    // Simulate AI system loading with progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const loadingMessages = [
    "Initializing neural networks...",
    "Loading AI modules...",
    "Calibrating quantum processors...",
    "Syncing with the matrix...",
    "Activating cyber protocols..."
  ];

  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const messageInterval = setInterval(() => {
        setCurrentLoadingMessage(prev => (prev + 1) % loadingMessages.length);
      }, 2000);

      return () => clearInterval(messageInterval);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32"
            >
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
                style={{ animationDuration: '2s' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-xl font-mono text-center"
            >
              <span className="text-blue-500">AI System</span>{' '}
              <span className="text-white">Initialization</span>
              <div className="text-sm text-gray-400 mt-2">
                {loadingMessages[currentLoadingMessage]}
              </div>
            </motion.div>

            <div className="mt-8 w-64">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="text-center mt-2 text-sm text-gray-400 font-mono">
                {loadingProgress}% Complete
              </div>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <AIBackground />
            
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 border-b border-blue-900/50 text-xs py-1 px-4 flex justify-between items-center font-mono"
            >
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                <span className="text-green-400">AI SYSTEM ONLINE</span>
              </div>
              <div className="text-blue-400">
                <span className="mr-4">CPU: 32%</span>
                <span className="mr-4">MEMORY: 64%</span>
                <span>NEURAL NETWORK: ACTIVE</span>
              </div>
            </motion.div>

            <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            
            <Footer />

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleAiChat}
              className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg z-40 hover:from-blue-600 hover:to-purple-700 transition-all"
              aria-label="Open AI Chat"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                <span className="text-2xl">🤖</span>
              </div>
            </motion.button>

            <AnimatePresence>
              {aiChatOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <AIChat onClose={toggleAiChat} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating AI Data Points */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="fixed top-1/4 left-8 w-2 h-2 bg-blue-500 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="fixed top-1/3 right-8 w-2 h-2 bg-purple-500 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="fixed top-2/3 left-12 w-2 h-2 bg-green-500 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="fixed top-1/2 right-12 w-2 h-2 bg-yellow-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;