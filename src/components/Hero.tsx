import React from 'react';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-0 section-container">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div 
            className="md:w-1/2 text-center md:text-left animate-slide-in-left"
            style={{ transform: `scale(${Math.max(0.95, 1 - scrollY * 0.0002)})` }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-white/80 font-medium">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
              Hi, I'm a
            </h1>
            
            <div className="mb-8">
              <div className="glass-card-strong px-6 py-4 rounded-2xl inline-block min-h-[4rem] flex items-center glow-effect">
                <span className="text-2xl md:text-3xl font-bold gradient-text">
                  <TypingText texts={["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]} />
                </span>
              </div>
            </div>
            
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Passionate about creating digital experiences that are not only beautiful but also functional. 
              I specialize in building modern web applications with cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl glow-effect"
              >
                <Briefcase size={20} />
                <span>Hire Me</span>
              </button>
              <button 
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-2 px-8 py-4 glass-card text-white rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/30"
              >
                <span>Explore Work</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div 
            className="md:w-1/2 flex justify-center animate-slide-in-right floating-element" 
            style={{ 
              animationDelay: '0.2s',
              transform: `scale(${scale}) translateY(${scrollY * 0.1}px)`
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative glass-card-strong rounded-3xl p-6 glow-effect">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                  alt="John Doe"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-xl text-white font-semibold shadow-lg">
                  <span className="gradient-text-alt">John Doe</span>
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