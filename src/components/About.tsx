
import React from 'react';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto animate-scale-in"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="glass-effect-dark rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">
                Full Stack Developer with 5+ years of experience
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm passionate about creating digital experiences that are not only beautiful but also functional. 
                My journey in web development started with a curiosity about how websites work, and it has evolved 
                into a career where I get to solve complex problems and build amazing applications.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                I specialize in React, Node.js, and modern web technologies. I believe in writing clean, 
                maintainable code and creating user experiences that delight and engage users.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass-effect rounded-full text-sm text-neon-blue border border-neon-blue/30">
                  React
                </span>
                <span className="px-4 py-2 glass-effect rounded-full text-sm text-neon-purple border border-neon-purple/30">
                  TypeScript
                </span>
                <span className="px-4 py-2 glass-effect rounded-full text-sm text-neon-pink border border-neon-pink/30">
                  Node.js
                </span>
                <span className="px-4 py-2 glass-effect rounded-full text-sm text-neon-green border border-neon-green/30">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-effect-dark rounded-xl p-6 text-center hover-lift group cursor-pointer transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-neon-blue mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.description}</p>
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
