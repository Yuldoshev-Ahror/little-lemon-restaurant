import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";
export default function Testimonials() {
  return (
    <section
      className={`${styles.section} section`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <header className={styles.header}>
          <h2 id="testimonials-title" className="sectionTitle">
            Testimonials
          </h2>
          <p className="sectionSubtitle">
            Guests love the welcoming experience, easy booking flow and
            memorable menu.
          </p>
        </header>
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
