import React from 'react';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import TypingText from './TypingText';

const Hero: React.FC = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-0">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Content */}
          <div className="md:w-1/2 text-center md:text-left animate-slide-in-left">
            <div className="flex items-center justify-center md:justify-start mb-4 animate-fade-in stagger-1">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-neutral-600 dark:text-neutral-400 font-medium">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 animate-fade-in stagger-2">
              Hi, I'm a
            </h1>
            
            <div className="mb-8 animate-fade-in stagger-3">
              <div className="glass-card-light px-6 py-4 rounded-2xl min-h-[4rem] flex items-center">
                <span className="text-2xl md:text-3xl font-bold gradient-text">
                  <TypingText texts={["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]} />
                </span>
              </div>
            </div>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in stagger-4">
              Passionate about creating digital experiences that are not only beautiful but also functional. 
              I specialize in building modern web applications with cutting-edge technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in stagger-5">
              <button 
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Briefcase size={20} />
                <span>Hire Me</span>
              </button>
              <button 
                onClick={scrollToProjects}
                className="group flex items-center justify-center gap-2 px-8 py-4 glass-card-light text-neutral-900 dark:text-neutral-50 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <span>Explore Work</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative animate-scale-in stagger-6">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl animate-float"></div>
              <div className="relative glass-card-light rounded-3xl p-6 border border-neutral-200 dark:border-neutral-700">
                <img
                  src="/profile.jpg"
                  alt="M. Rifqy Fakhrul Hadi"
                  className="w-80 h-80 object-cover object-top rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-6 left-6 glass-card-light px-4 py-2 rounded-bl-xl rounded-tr-xl text-neutral-900 dark:text-neutral-50 font-semibold border border-neutral-200/50 dark:border-neutral-700/50">
                  <span className="gradient-text">M. Rifqy Fakhrul Hadi</span>
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