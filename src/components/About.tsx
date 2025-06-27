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
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-shadow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="slide-in-left-section"
            style={{ transform: `translateX(${Math.max(-20, -scrollY * 0.05)}px)` }}
          >
            <div className="glass-card p-8 rounded-3xl glow-effect">
              <h3 className="text-2xl font-bold text-white mb-6 gradient-text-alt">
                Full Stack Developer with 5+ years of experience
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                I'm passionate about creating digital experiences that are not only beautiful but also functional. 
                My journey in web development started with a curiosity about how websites work, and it has evolved 
                into a career where I get to solve complex problems and build amazing applications.
              </p>
              <p className="text-white/90 leading-relaxed mb-6">
                I specialize in React, Node.js, and modern web technologies. I believe in writing clean, 
                maintainable code and creating user experiences that delight and engage users.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "MongoDB"].map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 glass-card rounded-full text-sm text-white/90 border border-white/20 hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="slide-in-right-section">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover-lift group cursor-pointer rounded-2xl glow-effect"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="text-gradient-to-r from-blue-400 to-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <div className="p-3 glass-card-strong rounded-xl">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/80 text-sm">{feature.description}</p>
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