
import React from 'react';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect-dark border-t border-white/20">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="flex flex-col items-center justify-center p-3 text-white/70 hover:text-neon-blue transition-all duration-300 group"
            >
              <div className="p-2 rounded-full group-hover:bg-neon-blue/20 transition-all duration-300">
                <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs mt-1 opacity-80 group-hover:opacity-100">
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
