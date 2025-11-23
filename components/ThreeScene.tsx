// components/ThreeScene.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating animation
    const spheres = containerRef.current.querySelectorAll('.floating-sphere');
    
    spheres.forEach((sphere, index) => {
      const element = sphere as HTMLElement;
      element.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite ${index * 0.3}s`;
    });

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        
        containerRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full transition-transform duration-700 ease-out">
      {/* Multiple gradient spheres for depth */}
      <div className="floating-sphere absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-3xl opacity-30" />
      <div className="floating-sphere absolute inset-8 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-40" />
      <div className="floating-sphere absolute inset-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl opacity-50" />
      <div className="floating-sphere absolute inset-24 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-lg opacity-60" />
      
      {/* Animated rings */}
      <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-4 border-2 border-accent/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
    </div>
  );
}