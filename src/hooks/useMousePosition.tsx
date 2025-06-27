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

    // Add event listener with passive option for better performance
    document.addEventListener('mousemove', updateMousePosition, { passive: true });

    // Initialize cursor position
    const initializeCursor = () => {
      document.documentElement.style.setProperty('--mouse-x', '0px');
      document.documentElement.style.setProperty('--mouse-y', '0px');
    };

    initializeCursor();

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return mousePosition;
};