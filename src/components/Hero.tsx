
import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import TypingText from './TypingText';
import { useScrollZoom } from '../hooks/useScrollZoom';

const Hero: React.FC = () => {
  const { scrollY, scale } = useScrollZoom();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-0 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div 
            className="md:w-1/2 text-center md:text-left animate-fade-in-up transition-transform duration-300 ease-out"
            style={{ transform: `scale(${Math.max(0.95, 1 - scrollY * 0.0002)})` }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">
              Welcome, I Am a
            </h1>
            <div className="mb-8">
              <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-xl inline-block min-h-[4rem] flex items-center transition-colors duration-300">
                <span className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  <TypingText texts={["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]} />
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 transition-colors duration-300">
              This is my personal website, where you can learn more about me and my work. I am a passionate developer with a focus on creating user-friendly and efficient web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-full font-semibold transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-100 hover:scale-105"
              >
                <Briefcase size={20} />
                <span>Hire Me</span>
              </button>
              <button 
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Explore</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div 
            className="md:w-1/2 flex justify-center animate-fade-in-up transition-transform duration-300 ease-out" 
            style={{ 
              animationDelay: '0.2s',
              transform: `scale(${scale}) translateY(${scrollY * 0.1}px)`
            }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/80 dark:border-gray-700/80 p-4 transition-colors duration-300">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                  alt="John Doe"
                  className="w-80 h-80 object-cover rounded-xl shadow-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-800 dark:text-white font-semibold shadow-md transition-colors duration-300">
                  John Doe
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
