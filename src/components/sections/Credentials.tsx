import { SectionEyebrow } from '../ui';
import { CREDENTIALS } from '../../data/content';
import styles from './Credentials.module.css';

export function Credentials() {
  return (
    <section className={styles.credentials}>
      <div className={styles.inner}>
        <SectionEyebrow label="Dirección Académica" variant="gold" />
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              El método no es una
              <br />
              app. Es una <em>filosofía.</em>
            </h2>
            <p>
              Puente fue diseñado desde adentro de las aulas — por alguien que
              entendió por qué los estudiantes aprendían gramática perfecta y
              seguían sin poder hablar. El Método Puente nació de esa frustración
              y de años de investigación en adquisición de segunda lengua aplicada
              al mundo real.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.quote}>
              "Un idioma no se aprende. Se habita. Y para habitarlo, primero hay
              que entender la cultura que lo sostiene."
            </div>
            <div className={styles.divider} />
            <div className={styles.credentialsList}>
              {CREDENTIALS.map((cred) => (
                <div className={styles.credItem} key={cred.text}>
                  <div className={styles.dot} />
                  {cred.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
