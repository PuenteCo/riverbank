import { Button } from '../ui';
import { NAV_LINKS } from '../../data/content';
import styles from './Navbar.module.css';

interface NavbarProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Navbar({ cursorHandlers }: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo} {...cursorHandlers}>
        Puente<sup>®</sup>
      </a>
      <ul className={styles.center}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} {...cursorHandlers}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Button variant="nav" cursorHandlers={cursorHandlers}>
        Agendar diagnóstico →
      </Button>
    </nav>
  );
}
