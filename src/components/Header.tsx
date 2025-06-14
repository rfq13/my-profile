
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect-dark py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold neon-text animate-neon-pulse">
            Portfolio
          </div>
          
          {/* Desktop Menu Only */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-white/80 hover:text-neon-blue transition-all duration-300 relative group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
