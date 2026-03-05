import { SectionEyebrow } from '../ui';
import { METHOD_STEPS } from '../../data/content';
import { useIntersectionObserver } from '../../hooks';
import styles from './Method.module.css';

interface MethodProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Method({ cursorHandlers }: MethodProps) {
  return (
    <section className={styles.method} id="metodo">
      <div className={styles.inner}>
        <SectionEyebrow label="El Método Puente" />
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Aprender un idioma es aprender
            <br />
            <em>una forma de ver el mundo.</em>
          </h2>
          <p className={styles.intro}>
            Nuestra metodología parte de una premisa simple: la gramática no
            genera confianza. La cultura sí. Diseñamos cada programa alrededor
            del contexto real en que su equipo usa el inglés — no alrededor de un
            libro de texto.
          </p>
        </div>
        <div className={styles.steps}>
          {METHOD_STEPS.map((step) => (
            <StepCard key={step.number} cursorHandlers={cursorHandlers} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  tag: string;
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

function StepCard({ number, title, description, tag, cursorHandlers }: StepCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={styles.step}
      {...cursorHandlers}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className={styles.stepNum}>{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.stepTag}>{tag}</span>
    </div>
  );
}
