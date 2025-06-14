
import { useState, useEffect } from 'react';

export const useScrollZoom = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate scale based on scroll position
      const maxScroll = 500;
      const scrollProgress = Math.min(currentScrollY / maxScroll, 1);
      const newScale = 1 + (scrollProgress * 0.1);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scale };
};
