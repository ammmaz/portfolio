// components/LocomotiveSection.tsx
'use client';

import { useRef, useEffect } from 'react';

interface LocomotiveSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Define the type for the locomotive scroll instance
interface LocomotiveScrollInstance {
  update: () => void;
}

// Extend the Window interface to include locoScroll
declare global {
  interface Window {
    locoScroll?: LocomotiveScrollInstance;
  }
}

export default function LocomotiveSection({ children, className = '', id }: LocomotiveSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // This ensures Locomotive Scroll knows about this section
    const updateScroll = () => {
      if (typeof window !== 'undefined' && window.locoScroll) {
        window.locoScroll.update();
      }
    };

    updateScroll();
    
    // Update on resize
    window.addEventListener('resize', updateScroll);
    return () => window.removeEventListener('resize', updateScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className={className}
      id={id}
    >
      {children}
    </section>
  );
}