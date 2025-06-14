import React from 'react';
import { Code, Palette, Rocket, Heart } from 'lucide-react';
import { useScrollZoom } from '../hooks/useScrollZoom';

const About: React.FC = () => {
  const { scrollY } = useScrollZoom();
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that follows best practices"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Design",
      description: "Creating visually stunning interfaces with attention to detail"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Loving what I do and constantly learning new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="animate-slide-in-left transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${Math.max(-20, -scrollY * 0.05)}px)` }}
          >
            <div className="light-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Full Stack Developer with 5+ years of experience
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm passionate about creating digital experiences that are not only beautiful but also functional. 
                My journey in web development started with a curiosity about how websites work, and it has evolved 
                into a career where I get to solve complex problems and build amazing applications.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I specialize in React, Node.js, and modern web technologies. I believe in writing clean, 
                maintainable code and creating user experiences that delight and engage users.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
                  React
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div 
            className="animate-slide-in-right transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${Math.min(20, scrollY * 0.05)}px)` }}
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="light-card p-6 text-center hover-lift group cursor-pointer transition-transform duration-300 ease-out"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: `scale(${1 + Math.sin(scrollY * 0.01 + index) * 0.02})`
                  }}
                >
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
