import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      animationId = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleInteractiveEnter = () => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
    if (ring) {
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.opacity = '0.3';
    }
  };

  const handleInteractiveLeave = () => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    if (ring) {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '0.5';
    }
  };

  return {
    cursorRef,
    ringRef,
    cursorHandlers: {
      onMouseEnter: handleInteractiveEnter,
      onMouseLeave: handleInteractiveLeave,
    },
  };
}
