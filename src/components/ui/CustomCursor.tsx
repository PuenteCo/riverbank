import type { RefObject } from 'react';
import styles from './CustomCursor.module.css';

interface CustomCursorProps {
  cursorRef: RefObject<HTMLDivElement | null>;
  ringRef: RefObject<HTMLDivElement | null>;
}

export function CustomCursor({ cursorRef, ringRef }: CustomCursorProps) {
  return (
    <>
      <div className={styles.cursor} ref={cursorRef} />
      <div className={styles.ring} ref={ringRef} />
    </>
  );
}
