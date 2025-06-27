import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ icon, date, title, company, description }: any) => (
  <div className="flex gap-x-4 animate-fade-in">
    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-neutral-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-7 flex justify-center items-center">
        <div className="size-7 flex justify-center items-center flex-shrink-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-sm">
          {icon}
        </div>
      </div>
    </div>
    <div className="grow pt-0.5 pb-8">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{date}</p>
      <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-50">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 font-medium">{company}</p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const workExperience = [
    {
      icon: <Briefcase size={14} className="text-blue-600" />,
      date: "2021 - Present",
      title: "Senior Full Stack Developer",
      company: "Innovate Inc.",
      description: "Leading the development of scalable web applications using React, Node.js, and cloud services. Mentoring junior developers and driving architectural decisions."
    },
    {
      icon: <Briefcase size={14} className="text-blue-600" />,
      date: "2019 - 2021",
      title: "Mid-Level Software Engineer",
      company: "Tech Solutions Co.",
      description: "Developed and maintained client-facing features for a large-scale e-commerce platform. Worked extensively with Vue.js and Python/Django."
    },
    {
      icon: <Briefcase size={14} className="text-blue-600" />,
      date: "2018 - 2019",
      title: "Junior Developer",
      company: "Startup Hub",
      description: "Gained foundational experience in web development, contributing to various projects and learning modern web technologies in a fast-paced environment."
    }
  ];

  const lifeExperience = [
    {
      icon: <GraduationCap size={14} className="text-blue-600" />,
      date: "2014 - 2018",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      description: "Graduated with honors, focusing on software engineering and artificial intelligence. Active member of the coding club."
    },
    {
      icon: <GraduationCap size={14} className="text-blue-600" />,
      date: "2010",
      title: "First 'Hello World'",
      company: "A Spark of Curiosity",
      description: "Wrote my first line of code which sparked a lifelong passion for technology and building things from scratch."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
            My Journey
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center md:text-left">Work Experience</h3>
            {workExperience.map((item, index) => (
              <div key={`work-${index}`} className={`animate-fade-in stagger-${index + 1}`}>
                <ExperienceItem {...item} />
              </div>
            ))}
          </div>
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center md:text-left">Life & Education</h3>
            {lifeExperience.map((item, index) => (
              <div key={`life-${index}`} className={`animate-fade-in stagger-${index + 1}`}>
                <ExperienceItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;