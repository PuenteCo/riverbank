import { SectionEyebrow } from '../ui';
import { AI_CARDS, DEMO_EMPLOYEES, DEMO_INSIGHTS } from '../../data/content';
import { useIntersectionObserver } from '../../hooks';
import styles from './AISection.module.css';

interface AISectionProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function AISection({ cursorHandlers }: AISectionProps) {
  return (
    <section className={styles.section} id="ia">
      <div className={styles.inner}>
        <SectionEyebrow label="Inteligencia Artificial" />
        <div className={styles.header}>
          <h2 className={styles.heading}>
            La IA no reemplaza al instructor.
            <br />
            <em>Multiplica su impacto.</em>
          </h2>
          <p className={styles.intro}>
            Puente integra inteligencia artificial en cada capa del programa — no
            como un chatbot de idiomas genérico, sino como una capa de
            personalización y seguimiento que hace que{' '}
            <strong>
              cada empleado sienta que el programa fue diseñado para él.
            </strong>
          </p>
        </div>
        <div className={styles.grid}>
          {AI_CARDS.map((card) => (
            <AICard key={card.title} cursorHandlers={cursorHandlers} {...card} />
          ))}
        </div>
        <DashboardDemo />
      </div>
    </section>
  );
}

interface AICardProps {
  icon: string;
  title: string;
  description: string;
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

function AICard({ icon, title, description, cursorHandlers }: AICardProps) {
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
      <div className={styles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function DashboardDemo() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={styles.demo}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div className={styles.demoBar}>
        <div className={styles.demoDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.demoTitle}>
          Puente Dashboard — Panel de RRHH · Vista en tiempo real
        </div>
      </div>
      <div className={styles.demoBody}>
        <div>
          <div className={styles.colLabel}>
            Progreso del equipo · Semana 8 de 24
          </div>
          <div className={styles.employees}>
            {DEMO_EMPLOYEES.map((emp) => (
              <div className={styles.empRow} key={emp.name}>
                <div className={styles.empAvatar}>{emp.avatar}</div>
                <div className={styles.empInfo}>
                  <div className={styles.empName}>
                    {emp.name} — {emp.role}
                  </div>
                  <div className={styles.empBarWrap}>
                    <div
                      className={styles.empBarFill}
                      style={{
                        width: isVisible ? `${emp.progress}%` : '0%',
                        animationDuration: emp.animationDuration,
                      }}
                    />
                  </div>
                </div>
                <div className={styles.empPct}>{emp.progress}%</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.colLabel}>
            Insights de IA · Generados automáticamente
          </div>
          <div className={styles.insights}>
            {DEMO_INSIGHTS.map((insight, i) => (
              <div className={styles.insightChip} key={i}>
                <p dangerouslySetInnerHTML={{ __html: insight }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
