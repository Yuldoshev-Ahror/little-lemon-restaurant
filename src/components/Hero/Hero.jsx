import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <article className={styles.content}>
          <p className={styles.kicker}>Mediterranean dining experience</p>
          <h1 id="hero-title" className={styles.title}>
            Little Lemon
          </h1>
          <p className={styles.city}>Chicago</p>
          <p className={styles.description}>
            We are a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist. Explore our weekly
            specials and reserve your table in just a few steps.
          </p>
          <Button as={Link} to="/booking">
            Reserve a Table
          </Button>
        </article>
        <figure className={styles.figure}>
          <img
            src="https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg"
            alt="Stylized Mediterranean dishes served on dark plates"
          />
        </figure>
      </div>
    </section>
  );
}
