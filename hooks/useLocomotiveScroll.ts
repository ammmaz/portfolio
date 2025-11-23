// hooks/useLocomotiveScroll.ts
'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function useLocomotiveScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      // Store the element reference to avoid null issues in async context
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollElement,
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

      // Update Locomotive Scroll when components are updated
      locomotiveScrollRef.current.update();
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return scrollRef;
}