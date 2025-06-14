
import React from 'react';
import { Github, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:john@example.com",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+15551234567",
      label: "Phone"
    }
  ];

  return (
    <footer className="py-12 glass-effect-dark border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold neon-text animate-neon-pulse">
              Portfolio
            </h3>
            <p className="text-white/70 mt-2">
              Creating beautiful digital experiences
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-3 glass-effect rounded-full text-white/70 hover:text-neon-blue transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/25"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
            by John Doe
          </p>
          <p className="text-white/40 text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
