import Navbar from "../components/Navbar/Navbar";
import styles from "./About.module.css";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>About Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant located in
              the heart of Chicago. Founded by two brothers, Mario and Adrian,
              the restaurant blends traditional Mediterranean recipes with a
              modern twist.
            </p>

            <p>
              Our mission is to bring fresh, healthy and delicious meals to our
              customers while maintaining a warm and welcoming atmosphere. We
              carefully select ingredients and prepare each dish with passion
              and care.
            </p>

            <p>
              From classic Greek salads to homemade desserts, every item on our
              menu is crafted to give you an unforgettable dining experience.
            </p>
          </div>

          <div className={styles.images}>
            <img
              src="https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg"
              alt="Little Lemon restaurant"
            />
            <img
              src="https://www.drinksindustryireland.ie/wp-content/uploads/2025/08/Head-chef--scaled.jpg"
              alt="Chef cooking"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
