
import React from 'react';
import { ArrowDown } from 'lucide-react';
import TypingText from './TypingText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-neon-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neon-pink/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-white/90 text-shadow">
                <TypingText text="Hi, I'm" speed={150} delay={500} />
              </span>
              <span className="block neon-text animate-neon-pulse text-6xl md:text-8xl">
                <TypingText text="John Doe" speed={120} delay={2000} />
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
              <TypingText 
                text="Full Stack Developer & UI/UX Designer" 
                speed={80} 
                delay={4500} 
                showCursor={false}
              />
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-white/60 mb-12 max-w-3xl mx-auto">
              <TypingText 
                text="I create beautiful, functional websites and applications that provide exceptional user experiences. Passionate about modern web technologies and clean code."
                speed={50}
                delay={7000}
                showCursor={false}
              />
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-neon-blue/20 neon-border rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-neon-blue/30 overflow-hidden">
                <span className="relative z-10">View My Work</span>
              </button>
              
              <button className="group px-8 py-4 glass-effect-dark rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 hover-lift border border-white/20 hover:border-neon-blue/50">
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-sm mb-2">Scroll Down</span>
              <ArrowDown className="text-neon-blue animate-pulse" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
