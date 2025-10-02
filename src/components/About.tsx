import React from 'react';
import { Code, Palette, Rocket, Heart } from 'lucide-react';
import { BlurFade } from './ui/blur-fade';
import { BlurText } from './ui/animated-blur-text';

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
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <BlurFade delay={0.25} inView>
          <div className="text-center mb-16">
            <BlurText
              text="About Me"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-50"
            />
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <BlurFade delay={0.5} inView>
            <div>
              <div className="glass-card-light p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                <BlurText
                  text="Full Stack Developer with 5+ years of experience"
                  delay={80}
                  animateBy="words"
                  direction="bottom"
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 gradient-text"
                />
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  I'm passionate about creating digital experiences that are not only beautiful but also functional. 
                  My journey in web development started with a curiosity about how websites work, and it has evolved 
                  into a career where I get to solve complex problems and build amazing applications.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  I specialize in React, Node.js, and modern web technologies. I believe in writing clean, 
                  maintainable code and creating user experiences that delight and engage users.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "TypeScript", "Node.js", "MongoDB"].map((tech, index) => (
                    <BlurFade key={tech} delay={0.75 + index * 0.1} inView>
                      <span className="px-4 py-2 glass-card-light rounded-full text-sm text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:scale-105 transition-transform duration-300">
                        {tech}
                      </span>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} inView>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <BlurFade
                  key={index}
                  delay={1.0 + index * 0.15}
                  inView
                >
                  <div className="glass-card-light p-6 text-center hover-lift group cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-700">
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <div className="p-3 glass-card-light rounded-xl border border-neutral-200 dark:border-neutral-700">
                        {feature.icon}
                      </div>
                    </div>
                    <BlurText
                      text={feature.title}
                      delay={50}
                      animateBy="letters"
                      direction="bottom"
                      className="text-neutral-900 dark:text-neutral-50 font-semibold mb-2"
                    />
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.description}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default About;