import styles from './SectionEyebrow.module.css';

interface SectionEyebrowProps {
  label: string;
  variant?: 'accent' | 'gold';
}

export function SectionEyebrow({ label, variant = 'accent' }: SectionEyebrowProps) {
  return (
    <div className={styles.eyebrow}>
      <div className={`${styles.line} ${styles[variant]}`} />
      <span className={styles[variant]}>{label}</span>
    </div>
  );
}
