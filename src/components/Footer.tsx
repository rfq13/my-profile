import React from 'react';
import { Github, Mail, Phone, Heart, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/johndoe",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/johndoe",
      label: "LinkedIn"  
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/johndoe",
      label: "Twitter"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/johndoe", 
      label: "Instagram"
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
    <footer className="py-12 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700 text-center">
          <p className="text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-2 transition-colors duration-300">
            Made with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            by John Doe
          </p>
          <p className="text-neutral-400 dark:text-neutral-500 text-sm mt-2 transition-colors duration-300">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;