
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
    <footer className="py-12 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              Portfolio
            </h3>
            <p className="text-gray-300 mt-2">
              Creating beautiful digital experiences
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-3 rounded-full text-gray-300 hover:text-orange-500 transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <div className="mb-6"> {/* New container for CTA and Resume */}
            <p className="text-gray-300 mb-3">
              Interested in collaborating or have a project in mind?
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-md"
              >
                Get in Touch
              </a>
              <a
                href="/placeholder-resume.pdf" // User needs to update this
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                className="px-6 py-3 border border-orange-500 text-orange-500 rounded-full font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Existing "Made with" and copyright */}
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with 
            <Heart className="w-4 h-4 text-orange-500 animate-pulse" />
            by John Doe
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
