
import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    const elements = navItems.map(item => document.querySelector(item.href)).filter(Boolean);
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect-dark border-t border-white/20">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeNav === item.href;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`flex flex-col items-center justify-center p-3 transition-all duration-300 group ${
                isActive ? 'text-neon-blue' : 'text-white/70 hover:text-neon-blue'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                isActive ? 'bg-neon-blue/20' : 'group-hover:bg-neon-blue/20'
              }`}>
                <IconComponent size={20} className={`transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`} />
              </div>
              <span className={`text-xs mt-1 transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
              }`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
