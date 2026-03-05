import { SectionEyebrow } from '../ui';
import { TARGET_SECTORS } from '../../data/content';
import { useIntersectionObserver } from '../../hooks';
import styles from './Targets.module.css';

interface TargetsProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Targets({ cursorHandlers }: TargetsProps) {
  return (
    <section className={styles.targets} id="sectores">
      <div className={styles.inner}>
        <SectionEyebrow label="Sectores que atendemos" />
        <h2 className={styles.heading}>
          ¿Su empresa necesita equipos
          <br />
          que se comuniquen globalmente?
        </h2>
        <div className={styles.grid}>
          {TARGET_SECTORS.map((sector) => (
            <TargetCard
              key={sector.title}
              cursorHandlers={cursorHandlers}
              {...sector}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TargetCardProps {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

function TargetCard({ emoji, title, description, tag, cursorHandlers }: TargetCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={styles.card}
      {...cursorHandlers}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className={styles.emoji}>{emoji}</div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.tag}>{tag}</span>
      </div>
    </div>
  );
}
