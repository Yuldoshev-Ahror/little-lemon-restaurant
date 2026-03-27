import styles from "./About.module.css";
import aboutImage from "../../assets/images/about-chefs.svg";
export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className={`container ${styles.inner}`}>
        <article className={styles.content}>
          <h2 id="about-title" className="sectionTitle">
            Little Lemon
          </h2>
          <p className={styles.location}>Chicago</p>
          <p className={styles.text}>
            Little Lemon is owned by two Italian brothers, Adrian and Mario, who
            moved to the United States to share their family recipes in a warm
            and modern setting.
          </p>
          <p className={styles.text}>
            The restaurant combines tradition with a contemporary dining
            atmosphere, making it perfect for casual meals, family gatherings
            and special occasions.
          </p>
        </article>
        <figure className={styles.figure}>
          <img
            src="https://meta-capstone-little-lemon.web.app/MarioAndAdrian.jpg"
            alt="Illustration of Adrian and Mario, the owners of Little Lemon"
          />
        </figure>
      </div>
    </section>
  );
}
