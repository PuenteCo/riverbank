import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'dark' | 'ghost' | 'white' | 'nav';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  cursorHandlers?: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Button({
  variant = 'dark',
  children,
  cursorHandlers,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ''}`}
      {...cursorHandlers}
      {...props}
    >
      {children}
    </button>
  );
}
