import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.grid}`}>
        <section
          className={styles.brandColumn}
          aria-label="Little Lemon information"
        >
          <img src={logo} alt="Little Lemon logo" className={styles.logo} />
          <p className={styles.copy}>
            Modern Mediterranean flavors, warm hospitality and a seamless
            reservation experience.
          </p>
        </section>
        <nav aria-label="Footer navigation">
          <h2 className={styles.heading}>Doormat Navigation</h2>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
          </ul>
        </nav>
        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={styles.heading}>
            Contact
          </h2>
          <ul className={styles.list}>
            <li>123 Chicago Avenue</li>
            <li>+998 (99) 999-99-99</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </section>
        <section aria-labelledby="social-heading">
          <h2 id="social-heading" className={styles.heading}>
            Social Media Links
          </h2>
          <ul className={styles.list}>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                X / Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
