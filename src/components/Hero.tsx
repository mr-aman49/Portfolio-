import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import avatarImage from "../assets/profile.jpg";

const Hero: React.FC = () => {
  const [expression, setExpression] = useState('neutral');
  const [speaking, setSpeaking] = useState(false);
  const [pulseColor, setPulseColor] = useState('from-blue-500 to-purple-600');
  const [aiThinking, setAiThinking] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number, x: number, y: number, rotation: number }>>([]);
  
  // Initialize floating elements
  useEffect(() => {
    const elements = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360
    }));
    setFloatingElements(elements);

    const interval = setInterval(() => {
      setFloatingElements(prev => prev.map(el => ({
        ...el,
        x: (el.x + Math.random() * 2 - 1 + 100) % 100,
        y: (el.y + Math.random() * 2 - 1 + 100) % 100,
        rotation: (el.rotation + Math.random() * 5) % 360
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Cycle through expressions
  useEffect(() => {
    const expressionInterval = setInterval(() => {
      const expressions = ['neutral', 'smile', 'thinking', 'excited'];
      const randomIndex = Math.floor(Math.random() * expressions.length);
      setExpression(expressions[randomIndex]);
      setSpeaking(true);
      setAnimationActive(true);
      
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
      
      setTimeout(() => {
        setSpeaking(false);
        setAiThinking(false);
        setTimeout(() => setAnimationActive(false), 500);
      }, 3000);
    }, 8000);
    
    return () => clearInterval(expressionInterval);
  }, []);

  // Greeting messages with matrix effect
  const [matrixText, setMatrixText] = useState('');
  const greetings = [
    "Hello World_",
    "System Online_",
    "AI Activated_",
    "Welcome User_"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let direction = 'typing';
    let messageIndex = 0;
    
    const interval = setInterval(() => {
      const currentMessage = greetings[messageIndex];
      
      if (direction === 'typing') {
        if (currentIndex <= currentMessage.length) {
          setMatrixText(currentMessage.slice(0, currentIndex));
          currentIndex++;
        } else {
          direction = 'deleting';
          setTimeout(() => {
            direction = 'typing';
            currentIndex = 0;
            messageIndex = (messageIndex + 1) % greetings.length;
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gray-900 flex items-center">
      {/* Floating Elements */}
      {floatingElements.map(el => (
        <div
          key={el.id}
          className="absolute pointer-events-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            transform: `rotate(${el.rotation}deg)`,
            transition: 'all 0.5s ease-out'
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg" />
        </div>
      ))}

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-blue-500/30 font-mono text-sm whitespace-nowrap"
            style={{
              left: `${i * 5}%`,
              animation: `matrix ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div
                key={j}
                style={{
                  opacity: Math.random(),
                  transform: `translateY(${j * 20}px)`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            {/* Matrix Text Effect */}
            <div className="mb-6 h-8 font-mono">
              <span className="text-blue-500">&gt; </span>
              <span className="typing-text">{matrixText}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="Software Engineer">
              Software Engineer
            </h1>

            <p className="text-xl text-gray-400 mb-8 animate-pulse">
              Building the future with code and AI
            </p>

            <div className="flex space-x-4 mb-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center">
                <span>View Projects</span>
                <span className="ml-2">→</span>
              </button>
              <button className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20 transform hover:scale-105 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* Animated Avatar Container */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" style={{ filter: 'blur(40px)' }}></div>
              <div className="absolute inset-0 bg-gray-900 rounded-full overflow-hidden">
                <img
                  src={avatarImage}
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                
                {/* Scanning Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" style={{
                  animation: 'scan 2s linear infinite',
                  top: '-100%'
                }}></div>
              </div>

              {/* Orbiting Elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-blue-500 rounded-full"
                  style={{
                    animation: `orbit ${3 + i}s linear infinite`,
                    transformOrigin: '32px 32px',
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 120}deg) translateX(120px)`
                  }}
                >
                  <div className="w-full h-full bg-blue-500 rounded-full animate-ping"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
