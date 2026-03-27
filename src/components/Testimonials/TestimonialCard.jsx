import styles from "./TestimonialCard.module.css";
export default function TestimonialCard({ name, role, rating, review }) {
  return (
    <article className={styles.card}>
      <p className={styles.rating} aria-label={`Rating: ${rating}`}>
        {rating}
      </p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.review}>{review}</p>
    </article>
  );
}
