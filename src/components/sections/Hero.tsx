import { Button } from '../ui';
import { HERO_BAR_ITEMS, PANEL_METRICS } from '../../data/content';
import styles from './Hero.module.css';

interface HeroProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Hero({ cursorHandlers }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.noise} />
      <div className={styles.top}>
        <div>
          <div className={`${styles.eyebrow} fade-up d1`}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>
              Formación empresarial en inglés · B2B · Colombia
            </span>
          </div>
          <h1 className={`${styles.title} fade-up d2`}>
            Su equipo no
            <br />
            necesita <em>más</em>
            <br />
            clases de inglés.
            <span className={styles.subWord}>
              Necesita aprender a pensar en inglés.
            </span>
          </h1>
          <p className={`${styles.desc} fade-up d3`}>
            Puente combina pedagogía intercultural de alto nivel con inteligencia
            artificial para transformar equipos corporativos en comunicadores
            globales reales — no en estudiantes de gramática.
          </p>
          <div className={`${styles.actions} fade-up d4`}>
            <Button variant="dark" cursorHandlers={cursorHandlers}>
              Diagnóstico gratuito →
            </Button>
            <Button variant="ghost" cursorHandlers={cursorHandlers}>
              Ver cómo funciona
            </Button>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.panelLabel}>
            Por qué los programas tradicionales fallan
          </div>
          {PANEL_METRICS.map((metric) => (
            <div className={styles.panelMetric} key={metric.value}>
              <div className={styles.metricVal}>
                {metric.value}
                <span>{metric.suffix}</span>
              </div>
              <div className={styles.metricDesc}>
                {metric.description}{' '}
                <strong>{metric.highlight}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.bar} fade-up d5`}>
        {HERO_BAR_ITEMS.map((item) => (
          <div className={styles.barItem} key={item.title}>
            <span className={styles.barIcon}>{item.icon}</span>
            <div className={styles.barText}>
              <strong>{item.title}</strong>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
