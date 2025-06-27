import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const FloatingStars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create stars
    const createStars = () => {
      starsRef.current = [];
      const starCount = 50;

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }

      // Clear existing stars
      container.innerHTML = '';

      // Create star elements
      starsRef.current.forEach((star, index) => {
        const starElement = document.createElement('div');
        starElement.className = 'absolute rounded-full bg-blue-400 pointer-events-none transition-all duration-300 ease-out';
        starElement.style.width = `${star.size}px`;
        starElement.style.height = `${star.size}px`;
        starElement.style.left = `${star.x}px`;
        starElement.style.top = `${star.y}px`;
        starElement.style.opacity = star.opacity.toString();
        starElement.dataset.index = index.toString();
        container.appendChild(starElement);
      });
    };

    createStars();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Move stars away from cursor
      starsRef.current.forEach((star, index) => {
        const starElement = container.children[index] as HTMLElement;
        if (!starElement) return;

        const dx = star.x - e.clientX;
        const dy = star.y - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const avoidRadius = 100;

        if (distance < avoidRadius) {
          const force = (avoidRadius - distance) / avoidRadius;
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * force * 30;
          const moveY = Math.sin(angle) * force * 30;
          
          starElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
          starElement.style.opacity = (star.opacity * (1 + force)).toString();
        } else {
          starElement.style.transform = 'translate(0px, 0px) scale(1)';
          starElement.style.opacity = star.opacity.toString();
        }
      });
    };

    // Twinkling animation
    const animate = () => {
      starsRef.current.forEach((star, index) => {
        const starElement = container.children[index] as HTMLElement;
        if (!starElement) return;

        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        
        if (!starElement.style.transform || starElement.style.transform === 'translate(0px, 0px) scale(1)') {
          starElement.style.opacity = (star.opacity * twinkle).toString();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Resize handler
    const handleResize = () => {
      createStars();
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default FloatingStars;