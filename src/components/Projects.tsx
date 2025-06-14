import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, ExternalLink, Calendar, Users, Trophy, Star, Wrench, Server, Figma, Dock, Zap, Cloud, ClipboardSignature, PlayCircle, FileCode2 } from 'lucide-react';
import SkeletonCard from './SkeletonCard';
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
  tools?: ProjectTool[]; // new
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const mockProjects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Solusi e-commerce fullstack yang menghasilkan peningkatan penjualan 40% untuk klien",
      longDescription: "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics real-time. Berhasil meningkatkan konversi penjualan klien sebesar 40% dalam 3 bulan pertama.",
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
          icon: <Dock size={16} className="text-sky-500" />,
          docUrl: "https://docs.docker.com/",
          description: "Otomasi deployment, environment isolasi, CI/CD ready"
        },
        {
          toolName: "GitHub Actions",
          icon: <Zap size={16} className="text-purple-600" />,
          docUrl: "https://docs.github.com/actions",
          description: "CI/CD pipeline otomatis"
        },
      ]
    },
    {
      id: 2,
      title: "Task Management SaaS",
      description: "Aplikasi manajemen tugas kolaboratif dengan 5000+ pengguna aktif bulanan",
      longDescription: "Platform SaaS untuk manajemen tugas tim dengan fitur real-time collaboration, advanced reporting, dan integrasi dengan tools populer. Digunakan oleh 50+ perusahaan.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "completed",
      duration: "4 bulan",
      teamSize: "Solo project",
      achievements: ["5000+ MAU", "50+ enterprise clients", "$10k+ MRR"],
      category: "SaaS",
      tools: [
        {
          toolName: "Figma",
          icon: <Figma size={16} className="text-pink-500" />,
          docUrl: "https://figma.com",
          description: "Prototyping & UI/UX Design"
        },
        {
          toolName: "Confluence",
          icon: <ClipboardSignature size={16} className="text-blue-400" />,
          docUrl: "https://confluence.atlassian.com/",
          description: "Dokumentasi kolaboratif"
        }
      ]
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Dashboard cuaca interaktif dengan prediksi AI untuk industri pertanian",
      longDescription: "Platform analytics cuaca dengan machine learning untuk prediksi pola cuaca. Membantu petani meningkatkan hasil panen hingga 25% dengan prediksi yang akurat.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "Chart.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "completed",
      duration: "2 bulan",
      teamSize: "3 developer",
      achievements: ["25% peningkatan hasil panen", "95% akurasi prediksi", "Award Winner"],
      category: "Analytics",
      tools: [
        {
          toolName: "Vercel",
          icon: <Cloud size={16} className="text-black" />,
          docUrl: "https://vercel.com/docs",
          description: "Deployment frontend ultra-cepat"
        },
        {
          toolName: "Playwright",
          icon: <PlayCircle size={16} className="text-green-500" />,
          docUrl: "https://playwright.dev/",
          description: "Testing otomatis end-to-end"
        }
      ]
    },
    {
      id: 4,
      title: "Social Media Management Tool",
      description: "Platform manajemen media sosial all-in-one untuk agensi digital marketing",
      longDescription: "Solusi lengkap untuk mengelola multiple akun media sosial dengan fitur scheduling, analytics, dan AI-powered content suggestions. Menghemat 60% waktu manajemen konten.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "Redis", "D3.js", "OpenAI API"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "in-progress",
      duration: "5 bulan",
      teamSize: "6 developer",
      achievements: ["60% penghematan waktu", "100+ agensi pengguna", "AI integration"],
      category: "Marketing",
      tools: [
        {
          toolName: "Notion",
          icon: <FileCode2 size={16} className="text-gray-700" />,
          docUrl: "https://notion.so",
          description: "Knowledge base, SOP, docs project"
        },
        {
          toolName: "DevOps Utility",
          icon: <Wrench size={16} className="text-orange-500" />,
          description: "Kustom tool devops untuk automation & monitoring"
        }
      ]
    },
    {
      id: 5,
      title: "Portfolio Website Generator",
      description: "Platform no-code untuk membuat website portfolio profesional dalam hitungan menit",
      longDescription: "SaaS platform yang memungkinkan freelancer dan professional membuat website portfolio yang stunning tanpa coding. Template premium dengan customization penuh.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      technologies: ["React", "Next.js", "Tailwind CSS", "Supabase", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "featured",
      duration: "2 bulan",
      teamSize: "Solo project",
      achievements: ["1000+ websites created", "4.9/5 rating", "Featured on PH"],
      category: "No-Code"
    },
    {
      id: 6,
      title: "AI Customer Support Bot",
      description: "Chatbot AI yang mengurangi beban customer service hingga 70% dengan tingkat kepuasan tinggi",
      longDescription: "Intelligent chatbot dengan NLP advanced yang dapat menangani 80% pertanyaan customer secara otomatis. Integrasi seamless dengan existing CRM systems.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      technologies: ["React", "Python", "OpenAI API", "WebSocket", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      status: "completed",
      duration: "3 bulan",
      teamSize: "2 developer",
      achievements: ["70% pengurangan ticket", "95% customer satisfaction", "24/7 availability"],
      category: "AI/ML"
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
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
            <Star size={12} />
            Featured
          </div>
        );
      case 'in-progress':
        return (
          <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
            In Progress
          </div>
        );
      default:
        return (
          <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200">
            Completed
          </div>
        );
    }
  };

  return (
    <TooltipProvider>
      <section id="projects" className="py-20 relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
              Project Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto animate-scale-in mb-6"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              Berikut adalah koleksi project terbaik yang telah saya kerjakan untuk berbagai klien. 
              Setiap project dirancang dengan fokus pada <span className="font-semibold text-orange-600">hasil yang terukur</span> dan 
              <span className="font-semibold text-purple-600"> pengalaman pengguna yang luar biasa</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border">
                <Trophy className="text-yellow-500" size={16} />
                <span className="text-sm font-medium">20+ Project Selesai</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border">
                <Users className="text-blue-500" size={16} />
                <span className="text-sm font-medium">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border">
                <Star className="text-orange-500" size={16} />
                <span className="text-sm font-medium">Award Winner</span>
              </div>
            </div>
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
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-orange-400 hover:bg-white/30 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-orange-400 hover:bg-white/30 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
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
                    {Array.isArray(project.tools) && project.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tools.map((tool, idx) => (
                          <Tooltip key={tool.toolName + idx}>
                            <TooltipTrigger asChild>
                              {tool.docUrl ? (
                                <a
                                  href={tool.docUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-blue-100 bg-blue-50 hover:bg-blue-100 shadow-sm transition hover:scale-105 text-xs font-medium text-blue-700"
                                >
                                  {tool.icon}
                                  <span>{tool.toolName}</span>
                                  {/* show external link icon */}
                                  <ExternalLink size={12} className="ml-0.5" />
                                </a>
                              ) : (
                                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-orange-100 bg-orange-50 text-orange-700 text-xs font-medium shadow-sm">
                                  {tool.icon}
                                  <span>{tool.toolName}</span>
                                </div>
                              )}
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <span>{tool.description || tool.toolName}</span>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    )}
                    
                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-gradient-to-r from-orange-50 to-purple-50 text-orange-600 rounded-md border border-orange-100 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-500 rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group">
                      <span>View Case Study</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl border border-orange-100">
              <h3 className="text-2xl font-bold gradient-text">
                Tertarik dengan project serupa?
              </h3>
              <p className="text-gray-600 max-w-md">
                Mari diskusikan bagaimana saya dapat membantu mewujudkan project impian Anda dengan hasil yang terukur dan berkualitas tinggi.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
