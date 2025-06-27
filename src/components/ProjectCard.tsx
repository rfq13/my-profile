
import React from "react";
import { ArrowRight, Github, ExternalLink, Calendar, Users } from "lucide-react";
import ProjectToolsBadges from "./ProjectToolsBadges";

interface ProjectTool {
  toolName: string;
  icon: React.ReactNode;
  docUrl?: string;
  description?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  status: "completed" | "in-progress" | "featured";
  duration: string;
  teamSize: string;
  achievements: string[];
  category: string;
  tools?: ProjectTool[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  getStatusBadge: (status: string) => React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, getStatusBadge }) => (
  <div className="group relative glass-card-light rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full w-full">
    {/* Status Badge */}
    <div className="absolute top-4 left-4 z-10">{getStatusBadge(project.status)}</div>
    
    {/* Image Container - Fixed height */}
    <div className="relative overflow-hidden h-56 flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Hover Actions */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <a
          href={project.githubUrl}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-white/30 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
        </a>
        <a
          href={project.liveUrl}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-white/30 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      
      {/* Category Tag */}
      <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300">
        {project.category}
      </div>
    </div>
    
    {/* Content - Flexible height */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      
      {/* Project Stats */}
      <div className="flex items-center gap-4 mb-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <span>{project.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={12} />
          <span>{project.teamSize}</span>
        </div>
      </div>
      
      {/* Tools Badge */}
      {project.tools && (
        <div className="mb-4">
          <ProjectToolsBadges tools={project.tools} />
        </div>
      )}
      
      {/* Key Achievements */}
      <div className="mb-4 flex-grow">
        <h4 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Key Results:</h4>
        <div className="space-y-1">
          {project.achievements.slice(0, 2).map((achievement, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-1">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.slice(0, 4).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md border border-blue-100 dark:border-blue-800 font-medium"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 rounded-md">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      
      {/* CTA Button - Always at bottom */}
      <div className="mt-auto">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 group">
          <span>View Case Study</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
