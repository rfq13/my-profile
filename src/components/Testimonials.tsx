import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from './ui/testimonials-columns';
import { BlurText } from './ui/animated-blur-text';
import { BlurFade } from './ui/blur-fade';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Working with Rifqy was an absolute game-changer for our startup. His full-stack expertise helped us launch our MVP in record time with exceptional quality.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Johnson",
    role: "Startup Founder",
  },
  {
    text: "The React application Rifqy built for us exceeded all expectations. Clean code, beautiful UI, and lightning-fast performance. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Chen",
    role: "CTO",
  },
  {
    text: "Rifqy's attention to detail and problem-solving skills are outstanding. He delivered our e-commerce platform on time and within budget.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emily Rodriguez",
    role: "Product Manager",
  },
  {
    text: "His expertise in Node.js and database optimization helped us scale our application to handle 10x more users without any performance issues.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "Lead Developer",
  },
  {
    text: "The mobile-responsive design and seamless user experience Rifqy created for our platform resulted in a 40% increase in user engagement.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "UX Director",
  },
  {
    text: "Professional, reliable, and incredibly skilled. Rifqy transformed our outdated system into a modern, efficient web application.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "James Wilson",
    role: "Business Owner",
  },
  {
    text: "His TypeScript expertise and clean coding practices made our codebase maintainable and scalable. A true professional developer.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Anna Martinez",
    role: "Tech Lead",
  },
  {
    text: "The API integration and backend architecture Rifqy designed for us is robust, secure, and handles our growing user base perfectly.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    name: "Robert Taylor",
    role: "System Architect",
  },
  {
    text: "Working with Rifqy was a pleasure. His communication skills and technical expertise made our project a huge success.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Jennifer Lee",
    role: "Project Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 glass-card-light rounded-full border border-neutral-200 dark:border-neutral-700 mb-6">
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Client Testimonials</span>
            </div>

            <BlurText
              text="What Clients Say About My Work"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-50"
            />
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Don't just take my word for it. Here's what clients and colleagues have to say about working with me on their projects.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </BlurFade>

        {/* Bottom CTA */}
        <BlurFade delay={0.75} inView>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4 p-8 glass-card-light rounded-2xl border border-neutral-200 dark:border-neutral-700 max-w-md mx-auto">
              <BlurText
                text="Ready to Join Them?"
                delay={80}
                animateBy="words"
                direction="bottom"
                className="text-2xl font-bold text-neutral-900 dark:text-neutral-50"
              />
              <p className="text-neutral-600 dark:text-neutral-400 text-center">
                Let's discuss how I can help bring your project to life with the same level of excellence.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 gradient-primary text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Testimonials;