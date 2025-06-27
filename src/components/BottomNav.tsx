
import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, History } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: History },
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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-card-light backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300 safe-area-inset-bottom">
      <div className="flex justify-between items-center px-2 py-2 max-w-screen-sm mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeNav === item.href;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 transition-all duration-300 group ${
                isActive ? 'text-blue-600' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                isActive ? 'bg-blue-100 dark:bg-blue-900' : 'group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700'
              }`}>
                <IconComponent size={18} className={`transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`} />
              </div>
              <span className={`text-xs mt-1 transition-opacity duration-300 truncate max-w-full ${
                isActive ? 'opacity-100 font-medium' : 'opacity-80 group-hover:opacity-100'
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
