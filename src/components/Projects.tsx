import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
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
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredProject === index ? 'scale-110' : 'scale-100'}`}
                />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <p className="text-white text-sm">Click to see project details</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs transition-colors duration-300 ${
                        hoveredProject === index ? 'bg-blue-900/70 text-blue-100' : ''
                      }`}
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