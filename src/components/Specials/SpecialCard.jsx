import styles from "./SpecialCard.module.css";
export default function SpecialCard({ title, price, description, image, alt }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={alt} className={styles.image} />
      <div className={styles.body}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>{price}</p>
        </header>
        <p className={styles.description}>{description}</p>
        <a href="/booking" className={styles.link}>
          Reserve a Table
        </a>
      </div>
    </article>
  );
}
