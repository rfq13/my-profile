import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      // Cancel previous animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Use requestAnimationFrame for smooth cursor tracking
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        // Update CSS custom properties for cursor position
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is an Element and has the matches method before calling it
      if (target && typeof target.matches === 'function' && target.matches('button, a, input, textarea, select, [role="button"], [tabindex]')) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is an Element and has the matches method before calling it
      if (target && typeof target.matches === 'function' && target.matches('button, a, input, textarea, select, [role="button"], [tabindex]')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true, capture: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true, capture: true });

    // Initialize cursor position
    const initializeCursor = () => {
      document.documentElement.style.setProperty('--mouse-x', '0px');
      document.documentElement.style.setProperty('--mouse-y', '0px');
    };

    initializeCursor();

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return mousePosition;
};