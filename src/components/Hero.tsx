import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "../assets/aman.jpg"; // Importing image from assets

const Hero: React.FC = () => {
  const [expression, setExpression] = useState("neutral");
  const [speaking, setSpeaking] = useState(false);

  // Cycle through expressions (but keep the same image)
  useEffect(() => {
    const expressionInterval = setInterval(() => {
      const expressions = ["neutral", "smile", "thinking", "excited"];
      const randomIndex = Math.floor(Math.random() * expressions.length);
      setExpression(expressions[randomIndex]);
      setSpeaking(true);

      // Stop speaking animation after a short time
      setTimeout(() => {
        setSpeaking(false);
      }, 2000);
    }, 5000);

    return () => clearInterval(expressionInterval);
  }, []);

  // Greeting messages
  const greetings = [
    "Hi, I'm Aman Raj",
    "Welcome to my portfolio",
    "I build amazing software",
    "Let's create something together",
  ];

  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 5000);

    return () => clearInterval(greetingInterval);
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">{greetings[greetingIndex]}</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Software Engineer 1
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            AI-Powered Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            Building robust and scalable applications with modern technologies.
            Passionate about creating efficient solutions to complex problems.
          </p>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://github.com/mr-aman49"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amanrajz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:amanraj.87892@gmail.com"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-all"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Avatar container with animation */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ${
                speaking ? "animate-pulse" : ""
              }`}
            ></div>

            {/* AI Avatar with imported image */}
            <img
              src={avatarImage}
              alt="Aman Raj AI Avatar"
              className={`absolute inset-2 rounded-full object-cover transition-all duration-500 ${
                speaking ? "scale-[1.02]" : "scale-100"
              }`}
            />

            {/* Speech bubble */}
            {speaking && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium">
                  {expression === "smile" && "Hello there! 👋"}
                  {expression === "thinking" && "Hmm, interesting... 🤔"}
                  {expression === "excited" && "Let's build something amazing! 🚀"}
                  {expression === "neutral" && "Welcome to my portfolio!"}
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
              </div>
            )}

            {/* Interactive elements */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button
                onClick={() => {
                  setExpression("smile");
                  setSpeaking(true);
                  setTimeout(() => setSpeaking(false), 2000);
                }}
                className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white text-sm"
                title="Smile"
              >
                😊
              </button>
              <button
                onClick={() => {
                  setExpression("thinking");
                  setSpeaking(true);
                  setTimeout(() => setSpeaking(false), 2000);
                }}
                className="w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center text-white text-sm"
                title="Thinking"
              >
                🤔
              </button>
              <button
                onClick={() => {
                  setExpression("excited");
                  setSpeaking(true);
                  setTimeout(() => setSpeaking(false), 2000);
                }}
                className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white text-sm"
                title="Excited"
              >
                🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
