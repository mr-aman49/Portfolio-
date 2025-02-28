import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: "E-Commerce Microservices",
      description: "A scalable e-commerce platform built with microservices architecture using Spring Boot, MongoDB, and Redis for caching.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Java", "Spring Boot", "MongoDB", "Redis", "Docker", "Kubernetes"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management Dashboard",
      description: "A responsive task management application with real-time updates, built with React.js and Node.js.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Cloud-Based CRM",
      description: "A customer relationship management system deployed on AWS with Salesforce integration.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Salesforce", "AWS", "Java", "Spring Boot", "React.js"],
      githubUrl: "https://github.com"
    },
    {
      title: "DevOps Automation Pipeline",
      description: "A CI/CD pipeline for automating deployment of containerized applications to Kubernetes clusters.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      githubUrl: "https://github.com"
    }
  ];
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="inline-flex items-center">
            <Code size={24} className="text-blue-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
            <Cpu size={24} className="text-purple-500 ml-2" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-4"></div>
          <p className="text-lg text-gray-300">
            Here are some of the projects I've worked on. Each project demonstrates my skills and expertise in different technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-500 ${
                hoveredProject === index 
                  ? 'transform scale-[1.03] shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/50' 
                  : 'hover:transform hover:scale-[1.02]'
              } ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredProject === index ? 'scale-110 filter brightness-75' : 'scale-100'}`}
                />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <p className="text-white text-sm">View project details</p>
                        <div className="flex space-x-2">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-gray-800/80 p-1.5 rounded-full hover:bg-blue-600/80 transition-colors"
                            >
                              <Github size={16} className="text-white" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-gray-800/80 p-1.5 rounded-full hover:bg-blue-600/80 transition-colors"
                            >
                              <ExternalLink size={16} className="text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Project title overlay */}
                <div className={`absolute top-0 left-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 px-4 py-2 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-90'
                }`}>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-2 py-1 rounded-md text-xs transition-all duration-300 ${
                        hoveredProject === index 
                          ? 'bg-blue-900/70 text-blue-100 transform scale-105' 
                          : 'bg-gray-700 text-gray-200'
                      }`}
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center transition-colors ${
                        hoveredProject === index ? 'text-blue-400 hover:text-blue-300' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center transition-colors ${
                        hoveredProject === index ? 'text-blue-400 hover:text-blue-300' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;