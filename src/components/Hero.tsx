import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

const Hero: React.FC = () => {
  const [expression, setExpression] = useState('neutral');
  const [speaking, setSpeaking] = useState(false);
  const [pulseColor, setPulseColor] = useState('from-blue-500 to-purple-600');
  const [aiThinking, setAiThinking] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  
  // Cycle through expressions
  useEffect(() => {
    const expressionInterval = setInterval(() => {
      const expressions = ['neutral', 'smile', 'thinking', 'excited'];
      const randomIndex = Math.floor(Math.random() * expressions.length);
      setExpression(expressions[randomIndex]);
      setSpeaking(true);
      setAnimationActive(true);
      
      // Simulate AI thinking
      if (expressions[randomIndex] === 'thinking') {
        setAiThinking(true);
        setPulseColor('from-yellow-500 to-orange-600');
      } else if (expressions[randomIndex] === 'excited') {
        setPulseColor('from-green-500 to-blue-600');
      } else if (expressions[randomIndex] === 'smile') {
        setPulseColor('from-purple-500 to-pink-600');
      } else {
        setPulseColor('from-blue-500 to-purple-600');
      }
      
      // Stop speaking animation after a short time
      setTimeout(() => {
        setSpeaking(false);
        setAiThinking(false);
        setTimeout(() => setAnimationActive(false), 500);
      }, 3000);
    }, 8000);
    
    return () => clearInterval(expressionInterval);
  }, []);

  // Greeting messages
  const greetings = [
    "Hi, I'm Aman Raj",
    "Welcome to my portfolio",
    "I build amazing software",
    "Let's create something together"
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentGreeting = greetings[greetingIndex];
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < currentGreeting.length) {
          currentText += currentGreeting[currentIndex];
          setTypingText(currentText);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTypingComplete(true);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
              setTypingText('');
              setTypingComplete(false);
              setIsTyping(true);
            }, 2000);
          }, 1500);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [greetingIndex, isTyping, greetings]);

  // AI thinking animation
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    if (aiThinking) {
      const dotsInterval = setInterval(() => {
        setDots(prev => prev.length < 3 ? prev + '.' : '');
      }, 300);
      
      return () => clearInterval(dotsInterval);
    }
  }, [aiThinking]);

  // Floating particles animation
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, color: string}>>([]);
  
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'][Math.floor(Math.random() * 4)]
    }));
    
    setParticles(newParticles);
    
    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed > 0 ? particle.y - particle.speed : 100,
        x: particle.x + (Math.random() * 0.4 - 0.2)
      })));
    };
    
    const particleInterval = setInterval(animateParticles, 100);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Floating particles */}
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="absolute rounded-full opacity-30 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transition: 'top 1s linear, left 1s ease-in-out',
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block h-16 overflow-hidden">
              Hi I'm a 
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
              Software Engineer
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 opacity-0 animate-[fadeIn_0.5s_0.3s_forwards]">Full Stack Developer</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg opacity-0 animate-[fadeIn_0.5s_0.6s_forwards]">
            Building robust and scalable applications with modern technologies.
            Passionate about creating efficient solutions to complex problems.
          </p>
          
          <div className="flex space-x-4 mb-8 opacity-0 animate-[fadeIn_0.5s_0.9s_forwards]">
            <a href="https://github.com/mr-aman49" target="_blank" rel="noopener noreferrer" 
               className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
              <Github size={24} className="transform hover:rotate-12 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/amanrajz/.com" target="_blank" rel="noopener noreferrer"
               className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
              <Linkedin size={24} className="transform hover:rotate-12 transition-transform" />
            </a>
            <a href="amanraj.87892@gmail.com"
               className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
              <Mail size={24} className="transform hover:rotate-12 transition-transform" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-[fadeIn_0.5s_1.2s_forwards]">
            <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <span className="relative inline-block">
                Contact Me
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </a>
            <a href="#projects" className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium py-3 px-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group">
              <span className="relative inline-block">
                View Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* AI Status indicator */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 px-3 py-1 rounded-full text-xs font-medium z-10 shadow-lg shadow-black/20">
              <span className={`inline-block w-2 h-2 rounded-full ${speaking ? 'bg-green-500 animate-pulse' : 'bg-gray-500'} mr-2`}></span>
              {speaking ? (aiThinking ? `AI Thinking${dots}` : 'AI Active') : 'AI Standby'}
            </div>
            
            {/* Avatar container with animation */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${pulseColor} ${speaking ? 'animate-pulse' : ''}`}></div>
            
            {/* Digital circuit pattern overlay */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
              <div className="absolute inset-0 z-20 rounded-full" 
                   style={{
                     backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     mixBlendMode: 'overlay',
                     opacity: speaking ? 0.3 : 0.1
                   }}>
              </div>
            </div>
            
            {/* AI Avatar with profile image */}
            <div 
              className={`absolute inset-0 w-full h-full rounded-full z-30 transition-all duration-500 ${speaking ? 'scale-[1.02]' : 'scale-100'} ${animationActive ? 'filter brightness-110' : ''} overflow-hidden`}
            >
              <div 
                className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${profilePic})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top'
                }}
              >
                {/* Color overlay based on current state */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${speaking ? 'opacity-40' : 'opacity-0'}`}
                  style={{
                    background: `linear-gradient(to bottom right, 
                      ${expression === 'smile' ? '#a855f7, #ec4899' : 
                        expression === 'thinking' ? '#f59e0b, #d97706' : 
                          expression === 'excited' ? '#10b981, #3b82f6' : 
                            '#3b82f6, #8b5cf6'})`,
                    mixBlendMode: 'color'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Animated border */}
            <div className={`absolute inset-0 rounded-full border-2 ${speaking ? 'border-white' : 'border-transparent'} z-40 ${speaking ? 'animate-ping' : ''}`}></div>
            
            {/* Animated glow effect */}
            <div className={`absolute inset-0 rounded-full z-20 ${speaking ? 'animate-pulse' : 'opacity-0'} transition-opacity duration-500`} 
                 style={{
                   boxShadow: `0 0 40px 5px ${speaking ? (aiThinking ? '#F59E0B' : '#3B82F6') : 'transparent'}`,
                 }}></div>
            
            {/* Speech bubble */}
            {speaking && (
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg z-50 min-w-[200px] animate-[fadeInDown_0.3s_ease-out]">
                <div className="text-sm font-medium">
                  {expression === 'smile' && "Hello there! I'm Aman, your AI developer 👋"}
                  {expression === 'thinking' && "Processing complex algorithms... 🤔"}
                  {expression === 'excited' && "Let's build something revolutionary! 🚀"}
                  {expression === 'neutral' && "Welcome to my AI-powered portfolio!"}
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
              </div>
            )}
            
            {/* Interactive elements */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
              <button 
                onClick={() => { 
                  setExpression('smile'); 
                  setSpeaking(true); 
                  setAnimationActive(true);
                  setPulseColor('from-purple-500 to-pink-600');
                  setTimeout(() => {
                    setSpeaking(false);
                    setTimeout(() => setAnimationActive(false), 500);
                  }, 3000); 
                }}
                className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white text-sm transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                title="Smile"
              >
                😊
              </button>
              <button 
                onClick={() => { 
                  setExpression('thinking'); 
                  setSpeaking(true); 
                  setAnimationActive(true);
                  setAiThinking(true);
                  setPulseColor('from-yellow-500 to-orange-600');
                  setTimeout(() => {
                    setSpeaking(false);
                    setAiThinking(false);
                    setTimeout(() => setAnimationActive(false), 500);
                  }, 3000); 
                }}
                className="w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center text-white text-sm transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                title="Thinking"
              >
                🤔
              </button>
              <button 
                onClick={() => { 
                  setExpression('excited'); 
                  setSpeaking(true); 
                  setAnimationActive(true);
                  setPulseColor('from-green-500 to-blue-600');
                  setTimeout(() => {
                    setSpeaking(false);
                    setTimeout(() => setAnimationActive(false), 500);
                  }, 3000); 
                }}
                className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white text-sm transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                title="Excited"
              >
                🚀
              </button>
            </div>
            
            {/* AI data visualization */}
            {speaking && (
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 animate-[fadeIn_0.5s_ease-out]">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 bg-blue-500 rounded-full animate-[pulseWidth_1.5s_ease-in-out_infinite]" 
                    style={{
                      width: `${Math.random() * 30 + 10}px`,
                      opacity: Math.random() * 0.5 + 0.5,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            )}
            
            {/* AI data visualization */}
            {speaking && (
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 animate-[fadeIn_0.5s_ease-out]">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-1 bg-purple-500 rounded-full animate-[pulseWidth_1.5s_ease-in-out_infinite]" 
                    style={{
                      width: `${Math.random() * 30 + 10}px`,
                      opacity: Math.random() * 0.5 + 0.5,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
