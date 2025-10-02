import React from 'react';
import { Badge } from './ui/badge';
import { BlurText } from './ui/animated-blur-text';

const Skills: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js",
    "Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL",
    "Git", "Docker", "AWS", "Figma", "GraphQL", "JavaScript", "HTML", "CSS"
  ];

  // Duplicate for seamless marquee
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <BlurText
            text="My Tech Stack"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4"
          />
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I work with a variety of modern technologies to build high-quality web applications.
          </p>
        </div>
        
        <div className="relative flex flex-col gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-marquee gap-4">
            {duplicatedSkills.map((skill, index) => (
              <Badge
                key={`top-${index}`}
                className="mx-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md font-semibold text-base whitespace-nowrap"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;