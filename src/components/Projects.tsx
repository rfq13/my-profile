import React, { useState, useEffect } from 'react';
import { Trophy, Users, Star, Dock, Zap, Figma, Clipboard, Cloud, PlayCircle, FileCode2, Wrench } from 'lucide-react';
import SkeletonCard from './SkeletonCard';
import ProjectCard from "./ProjectCard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  status: 'completed' | 'in-progress' | 'featured';
  duration: string;
  teamSize: string;
  achievements: string[];
  category: string;
  tools?: ProjectTool[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const mockProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Solusi e-commerce fullstack yang menghasilkan peningkatan penjualan 40% untuk klien",
      longDescription: "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics real-time.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "featured",
      duration: "3 bulan",
      teamSize: "4 developer",
      achievements: ["40% peningkatan penjualan", "99.9% uptime", "10k+ pengguna aktif"],
      category: "E-Commerce",
      tools: [
        {
          toolName: "Docker",
          icon: <Dock size={16} className="text-blue-600" />,
          docUrl: "https://docs.docker.com/",
          description: "Otomasi deployment, environment isolasi, CI/CD ready"
        }
      ]
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "Aplikasi manajemen tugas kolaboratif dengan 5000+ pengguna aktif bulanan",
      longDescription: "Platform SaaS untuk manajemen tugas tim dengan fitur real-time collaboration dan advanced reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "completed",
      duration: "4 bulan",
      teamSize: "Solo project",
      achievements: ["5000+ MAU", "50+ enterprise clients", "$10k+ MRR"],
      category: "SaaS"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Dashboard cuaca interaktif dengan prediksi AI untuk industri pertanian",
      longDescription: "Platform analytics cuaca dengan machine learning untuk prediksi pola cuaca yang akurat.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "completed",
      duration: "2 bulan",
      teamSize: "3 developer",
      achievements: ["25% peningkatan hasil panen", "95% akurasi prediksi", "Award Winner"],
      category: "Analytics"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(mockProjects);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'featured':
        return (
          <div className="flex items-center gap-1 px-3 py-1 gradient-primary text-white text-xs font-bold rounded-full">
            <Star size={12} />
            Featured
          </div>
        );
      case 'in-progress':
        return (
          <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-700">
            In Progress
          </div>
        );
      default:
        return (
          <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full border border-green-200 dark:border-green-700">
            Completed
          </div>
        );
    }
  };

  return (
    <TooltipProvider>
      <section id="projects" className="py-20 bg-white dark:bg-neutral-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
              Project Portfolio
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              Berikut adalah koleksi project terbaik yang telah saya kerjakan untuk berbagai klien. 
              Setiap project dirancang dengan fokus pada <span className="font-semibold text-neutral-900 dark:text-neutral-50">hasil yang terukur</span> dan 
              <span className="font-semibold text-neutral-900 dark:text-neutral-50"> pengalaman pengguna yang luar biasa</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 glass-card-light rounded-full border border-neutral-200 dark:border-neutral-700">
                <Trophy className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">20+ Project Selesai</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card-light rounded-full border border-neutral-200 dark:border-neutral-700">
                <Users className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-card-light rounded-full border border-neutral-200 dark:border-neutral-700">
                <Star className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Award Winner</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={`animate-fade-in stagger-${(index % 6) + 1}`}>
                  <SkeletonCard />
                </div>
              ))
            ) : (
              projects.map((project, index) => (
                <div key={project.id} className={`animate-fade-in stagger-${(index % 6) + 1}`}>
                  <ProjectCard
                    project={project}
                    index={index}
                    getStatusBadge={getStatusBadge}
                  />
                </div>
              ))
            )}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-flex flex-col items-center gap-4 p-8 glass-card-light rounded-2xl border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                Tertarik dengan project serupa?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                Mari diskusikan bagaimana saya dapat membantu mewujudkan project impian Anda dengan hasil yang terukur dan berkualitas tinggi.
              </p>
              <button className="px-8 py-3 gradient-primary text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Projects;