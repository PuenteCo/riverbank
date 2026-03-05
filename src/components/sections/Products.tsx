import { SectionEyebrow } from '../ui';
import { PRODUCTS } from '../../data/content';
import { useIntersectionObserver } from '../../hooks';
import styles from './Products.module.css';

interface ProductsProps {
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

export function Products({ cursorHandlers }: ProductsProps) {
  return (
    <section className={styles.products} id="productos">
      <div className={styles.inner}>
        <SectionEyebrow label="Programas" />
        <h2 className={styles.heading}>
          Tres programas.
          <br />
          Un sistema que escala.
        </h2>
        <div className={styles.list}>
          {PRODUCTS.map((product) => (
            <ProductItem
              key={product.number}
              cursorHandlers={cursorHandlers}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductItemProps {
  number: string;
  category: string;
  name: string;
  description: string;
  badge: string;
  badgeVariant: 'dark' | 'accent' | 'outline';
  cursorHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
}

function ProductItem({
  number,
  category,
  name,
  description,
  badge,
  badgeVariant,
  cursorHandlers,
}: ProductItemProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={styles.item}
      {...cursorHandlers}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <div className={styles.num}>{number}</div>
      <div className={styles.name}>
        <small>{category}</small>
        {name}
      </div>
      <div className={styles.desc}>{description}</div>
      <div className={`${styles.badge} ${styles[badgeVariant]}`}>{badge}</div>
    </div>
  );
}
