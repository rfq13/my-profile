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
          icon: <Clipboard size={16} className="text-blue-400" />,
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
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-fade-in-up">
              Project Portfolio
            </h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto animate-scale-in mb-6"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              Berikut adalah koleksi project terbaik yang telah saya kerjakan untuk berbagai klien. 
              Setiap project dirancang dengan fokus pada <span className="font-semibold text-gray-800">hasil yang terukur</span> dan 
              <span className="font-semibold text-gray-800"> pengalaman pengguna yang luar biasa</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-300">
                <Trophy className="text-yellow-500" size={16} />
                <span className="text-sm font-medium text-gray-700">20+ Project Selesai</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-300">
                <Users className="text-blue-500" size={16} />
                <span className="text-sm font-medium text-gray-700">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-300">
                <Star className="text-orange-500" size={16} />
                <span className="text-sm font-medium text-gray-700">Award Winner</span>
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
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  getStatusBadge={getStatusBadge}
                />
              ))
            )}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-gray-100 rounded-2xl border border-gray-300">
              <h3 className="text-2xl font-bold text-gray-800">
                Tertarik dengan project serupa?
              </h3>
              <p className="text-gray-600 max-w-md">
                Mari diskusikan bagaimana saya dapat membantu mewujudkan project impian Anda dengan hasil yang terukur dan berkualitas tinggi.
              </p>
              <button className="px-8 py-3 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
