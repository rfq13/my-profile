
import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import TypingText from './TypingText';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-0">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Welcome, I Am a
            </h1>
            <div className="mb-8">
              <div className="bg-gray-100 px-6 py-4 rounded-xl inline-block min-h-[4rem] flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-800">
                  <TypingText texts={["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]} />
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              This is my personal website, where you can learn more about me and my work. I am a passionate developer with a focus on creating user-friendly and efficient web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-900 hover:scale-105">
                <Briefcase size={20} />
                <span>Hire Me</span>
              </button>
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span>Explore</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/80 p-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
                  alt="John Doe"
                  className="w-80 h-80 object-cover rounded-xl shadow-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-800 font-semibold shadow-md">
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
