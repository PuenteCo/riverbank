import { Button } from '../ui';
import styles from './CTA.module.css';

interface CTAProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function CTA({ cursorHandlers }: CTAProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Su equipo puede comunicarse en inglés de verdad. En 6 meses.
        </h2>
        <div className={styles.right}>
          <p>
            Comenzamos con un diagnóstico gratuito: analizamos el nivel actual de
            su equipo, el contexto real de uso del inglés en su operación, y le
            entregamos una propuesta en 5 días hábiles.
          </p>
          <Button variant="white" cursorHandlers={cursorHandlers}>
            Agendar diagnóstico gratuito →
          </Button>
          <div className={styles.note}>
            Sin compromisos. Sin costo. Solo una conversación honesta sobre si hay
            fit.
          </div>
        </div>
      </div>
    </section>
  );
}
