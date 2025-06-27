import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  size: number;
  timestamp: number;
}

const MouseTrail: React.FC = () => {
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: 8,
        timestamp: Date.now()
      });

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };

    const animate = () => {
      const now = Date.now();
      
      // Update trail points
      trailRef.current = trailRef.current.filter(point => {
        const age = now - point.timestamp;
        const maxAge = 500; // 500ms trail
        
        if (age > maxAge) return false;
        
        point.opacity = 1 - (age / maxAge);
        point.size = 8 * point.opacity;
        return true;
      });

      // Clear container
      container.innerHTML = '';

      // Render trail points
      trailRef.current.forEach((point, index) => {
        const element = document.createElement('div');
        element.className = 'absolute rounded-full pointer-events-none';
        element.style.left = `${point.x - point.size / 2}px`;
        element.style.top = `${point.y - point.size / 2}px`;
        element.style.width = `${point.size}px`;
        element.style.height = `${point.size}px`;
        element.style.background = `radial-gradient(circle, rgba(59, 130, 246, ${point.opacity * 0.6}) 0%, rgba(59, 130, 246, 0) 70%)`;
        element.style.transform = `scale(${point.opacity})`;
        container.appendChild(element);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default MouseTrail;