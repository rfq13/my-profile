
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import SkeletonCard from './SkeletonCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const mockProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "API Integration", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "An analytics platform for social media managers with comprehensive reporting and data visualization capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["React", "Python", "D3.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by AI with natural language processing and context-aware responses.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      technologies: ["React", "OpenAI API", "Node.js", "WebSocket"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto animate-scale-in"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            projects.map((project, index) => (
              <div
                key={project.id}
                className="group light-card overflow-hidden hover-lift animate-fade-in-up p-6"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-orange-400 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-orange-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-orange-100/50 text-orange-600 rounded-full border border-orange-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-md flex items-center gap-2 group">
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
