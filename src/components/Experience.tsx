
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ icon, date, title, company, description }: any) => (
  <div className="flex gap-x-4 animate-fade-in-up">
    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div className="relative z-10 size-7 flex justify-center items-center">
        <div className="size-7 flex justify-center items-center flex-shrink-0 bg-white border border-gray-200 rounded-full shadow-sm">
          {icon}
        </div>
      </div>
    </div>
    <div className="grow pt-0.5 pb-8">
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="mt-1 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 font-medium">{company}</p>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const workExperience = [
    {
      icon: <Briefcase size={14} className="text-gray-600" />,
      date: "2021 - Present",
      title: "Senior Full Stack Developer",
      company: "Innovate Inc.",
      description: "Leading the development of scalable web applications using React, Node.js, and cloud services. Mentoring junior developers and driving architectural decisions."
    },
    {
      icon: <Briefcase size={14} className="text-gray-600" />,
      date: "2019 - 2021",
      title: "Mid-Level Software Engineer",
      company: "Tech Solutions Co.",
      description: "Developed and maintained client-facing features for a large-scale e-commerce platform. Worked extensively with Vue.js and Python/Django."
    },
     {
      icon: <Briefcase size={14} className="text-gray-600" />,
      date: "2018 - 2019",
      title: "Junior Developer",
      company: "Startup Hub",
      description: "Gained foundational experience in web development, contributing to various projects and learning modern web technologies in a fast-paced environment."
    }
  ];

  const lifeExperience = [
     {
      icon: <GraduationCap size={14} className="text-gray-600" />,
      date: "2014 - 2018",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      description: "Graduated with honors, focusing on software engineering and artificial intelligence. Active member of the coding club."
    },
    {
      icon: <GraduationCap size={14} className="text-gray-600" />,
      date: "2010",
      title: "First 'Hello World'",
      company: "A Spark of Curiosity",
      description: "Wrote my first line of code which sparked a lifelong passion for technology and building things from scratch."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left">Work Experience</h3>
            {workExperience.map((item, index) => (
              <ExperienceItem key={`work-${index}`} {...item} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left">Life & Education</h3>
            {lifeExperience.map((item, index) => (
              <ExperienceItem key={`life-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
