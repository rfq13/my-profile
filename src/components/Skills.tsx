
import React from 'react';
import { useScrollZoom } from '../hooks/useScrollZoom';
import { Badge } from './ui/badge';

const badgeColors = [
  'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700',
  'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-700',
  'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:border-pink-700',
  'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700',
  'bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700',
  'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-700',
  'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900 dark:text-cyan-300 dark:border-cyan-700',
  'bg-red-100 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-700'
];

const Skills: React.FC = () => {
  const { scrollY } = useScrollZoom();

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js",
    "Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL",
    "Git", "Docker", "AWS", "Figma", "GraphQL", "JavaScript", "HTML", "CSS"
  ];

  // Gandakan agar marquee tetap panjang
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-white/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            My Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            I work with a variety of modern technologies to build high-quality web applications.
          </p>
        </div>
        
        <div 
          className="relative flex flex-col gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] transition-transform duration-300 ease-out"
          style={{ transform: `scale(${1 + scrollY * 0.0001})` }}
        >
          <div className="flex w-max animate-marquee gap-0.5">
            {duplicatedSkills.map((skill, index) => (
              <Badge
                key={`top-${index}`}
                className={`
                  mx-2 px-6 py-3 border 
                  shadow transition-all duration-300 
                  hover:scale-110 hover:brightness-105 hover:shadow-lg
                  font-semibold text-base
                  ${badgeColors[index % badgeColors.length]}
                `}
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse gap-0.5">
            {duplicatedSkills.map((skill, index) => (
              <Badge
                key={`bottom-${index}`}
                className={`
                  mx-2 px-6 py-3 border 
                  shadow transition-all duration-300 
                  hover:scale-110 hover:brightness-105 hover:shadow-lg
                  font-semibold text-base
                  ${badgeColors[(index + 3) % badgeColors.length]}
                `}
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
