// components/ScrollProvider.tsx
'use client';

import { createContext, useContext, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

interface ScrollContextType {
  scroll: LocomotiveScroll | null;
}

const ScrollContext = createContext<ScrollContextType>({ scroll: null });

export const useScroll = () => useContext(ScrollContext);

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      offset: ['0%', 0],
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smartphone: {
        smooth: false
      }
    });

    // Update on route changes
    const handleRouteChange = () => {
      locomotiveScrollRef.current?.update();
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll: locomotiveScrollRef.current }}>
      <div
        ref={scrollRef}
        data-scroll-container
        className="scroll-container"
        style={{
          perspective: '1px',
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}