import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

const Skills: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Backend Development");
  const [animatingSkill, setAnimatingSkill] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const skillCategories: SkillCategory[] = [
    {
      name: "Backend Development",
      icon: "🔧",
      skills: ["Java", "Spring Boot", "Node.js", "Quarkus", "MongoDB", "SQL Developer", "Redis"]
    },
    {
      name: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Figma"]
    },
    {
      name: "DevOps & Cloud",
      icon: "☁️",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      name: "Other Technologies",
      icon: "🔌",
      skills: ["Salesforce", "Microservices", "RESTful APIs", "Git"]
    }
  ];

  const handleSkillHover = (skill: string) => {
    setAnimatingSkill(skill);
    setTimeout(() => setAnimatingSkill(null), 1500);
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            I've developed expertise in various technologies throughout my career.
            Here's a comprehensive list of my technical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.name}
              className={`bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300 ${expandedCategory === category.name ? 'ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20' : ''}`}
            >
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                {expandedCategory === category.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              <div className={`px-4 pb-4 ${expandedCategory === category.name ? 'block' : 'hidden'}`}>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className={`bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white ${animatingSkill === skill ? 'animate-pulse bg-blue-600 text-white' : ''}`}
                      onMouseEnter={() => handleSkillHover(skill)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Technical Proficiency</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Java & Spring Boot</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>React.js & Frontend</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '85%', animationDelay: '0.2s' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>AWS & Cloud Services</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '80%', animationDelay: '0.4s' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Docker & Kubernetes</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '75%', animationDelay: '0.6s' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span>Salesforce</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full animate-pulse-slow" style={{ width: '70%', animationDelay: '0.8s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;