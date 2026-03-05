import styles from './Footer.module.css';

interface FooterProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Footer({ cursorHandlers }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.logo} {...cursorHandlers}>
        Puente<sup>®</sup>
      </a>
      <div className={styles.mid}>
        <a href="#metodo" {...cursorHandlers}>Metodología</a>
        <a href="#productos" {...cursorHandlers}>Programas</a>
        <a href="#ia" {...cursorHandlers}>IA</a>
        <a href="#" {...cursorHandlers}>Contacto</a>
      </div>
      <div className={styles.right}>
        Cali, Valle del Cauca · Colombia
        <br />
        hola@puenteco.com
      </div>
    </footer>
  );
}
