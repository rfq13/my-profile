import React from 'react';
import { useScrollZoom } from '../hooks/useScrollZoom';

const Skills: React.FC = () => {
  const { scrollY } = useScrollZoom();

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js",
    "Node.js", "Python", "Express.js", "MongoDB", "PostgreSQL",
    "Git", "Docker", "AWS", "Figma", "GraphQL", "JavaScript", "HTML", "CSS"
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Tech Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I work with a variety of modern technologies to build high-quality web applications.
          </p>
        </div>
        
        <div 
          className="relative flex flex-col gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] transition-transform duration-300 ease-out"
          style={{ transform: `scale(${1 + scrollY * 0.0001})` }}
        >
          <div className="flex w-max animate-marquee">
            {duplicatedSkills.map((skill, index) => (
              <div key={`top-${index}`} className="mx-4 px-6 py-3 bg-white shadow-md rounded-lg border border-gray-200">
                <p className="text-lg font-medium text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse">
            {duplicatedSkills.map((skill, index) => (
              <div key={`bottom-${index}`} className="mx-4 px-6 py-3 bg-white shadow-md rounded-lg border border-gray-200">
                <p className="text-lg font-medium text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
