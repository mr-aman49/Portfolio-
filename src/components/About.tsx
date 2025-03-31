import React, { useState } from 'react';

const About: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);
  
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a Software Engineer with expertise in full-stack development, cloud technologies, and microservices architecture. 
              With a strong foundation in Java and Spring Boot, I build scalable and maintainable applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My journey in software development began with a passion for creating efficient solutions. I've since expanded my skills to include 
              modern frontend frameworks like React, backend technologies like Node.js, and cloud platforms like AWS.
            </p>
            <p className="text-lg text-gray-300">
              I'm constantly learning and adapting to new technologies, with a focus on writing clean, efficient code and creating 
              intuitive user experiences. I believe in the power of technology to transform businesses and improve lives.
            </p>
            
            {/* AI Assistant Quote */}
            <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <p className="text-blue-300 italic">
                "I'm a full-stack developer with expertise in frontend and backend technologies, along with a deep understanding of prompt engineering. By combining these skills, I design and build intelligent, high-performance applications that seamlessly integrate AI-driven functionality for a smarter user experience."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 ${hoveredBox === 'education' ? 'transform scale-105 bg-blue-900/30 border border-blue-500/50' : ''}`}
              onMouseEnter={() => setHoveredBox('education')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">B.E in Computer Science</p>
              <p className="text-gray-500">2019 - 2023</p>
            </div>
            
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 ${hoveredBox === 'experience' ? 'transform scale-105 bg-purple-900/30 border border-purple-500/50' : ''}`}
              onMouseEnter={() => setHoveredBox('experience')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-400">Software Engineer I</p>
              <p className="text-gray-500">At Kaplan</p>
              <p className="text-gray-500">2023 - Present</p>
            </div>
            
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 ${hoveredBox === 'location' ? 'transform scale-105 bg-green-900/30 border border-green-500/50' : ''}`}
              onMouseEnter={() => setHoveredBox('location')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Bangalore, India</p>
            </div>
            
            <div 
              className={`bg-gray-800/50 p-6 rounded-lg transition-all duration-300 ${hoveredBox === 'languages' ? 'transform scale-105 bg-yellow-900/30 border border-yellow-500/50' : ''}`}
              onMouseEnter={() => setHoveredBox('languages')}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-gray-400">English, Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
