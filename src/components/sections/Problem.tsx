import { SectionEyebrow } from '../ui';
import { PROBLEM_CARDS } from '../../data/content';
import { useIntersectionObserver } from '../../hooks';
import styles from './Problem.module.css';

export function Problem() {
  return (
    <section className={styles.problem} id="problema">
      <div className={styles.inner}>
        <SectionEyebrow label="El problema real" variant="gold" />
        <h2 className={styles.heading}>
          Su empresa lleva años invirtiendo en inglés.
          <br />
          <em>Y el equipo sigue sin hablarlo.</em>
        </h2>
        <div className={styles.grid}>
          {PROBLEM_CARDS.map((card) => (
            <ProblemCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ number, icon, title, body }: typeof PROBLEM_CARDS[number]) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className={styles.num}>{number}</div>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
}
