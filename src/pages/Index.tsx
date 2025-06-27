import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import InteractiveBackground from '../components/InteractiveBackground';
import FloatingStars from '../components/FloatingStars';
import MouseTrail from '../components/MouseTrail';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useMousePosition } from '../hooks/useMousePosition';

const Index: React.FC = () => {
  // Initialize mouse position tracking
  useMousePosition();

  useEffect(() => {
    // Ensure cursor is properly initialized
    const initializeCursor = () => {
      document.documentElement.style.setProperty('--mouse-x', '0px');
      document.documentElement.style.setProperty('--mouse-y', '0px');
    };

    initializeCursor();

    // Add global mouse move listener as backup
    const handleGlobalMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Interactive Background Animations */}
        <InteractiveBackground />
        <FloatingStars />
        <MouseTrail />
        
        {/* Main Content */}
        <div className="relative z-20">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <BottomNav />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;