import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Reservations", to: "/booking" },
  { label: "Login", to: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          to="/"
          className={styles.brand}
          aria-label="Little Lemon home page"
          onClick={handleCloseMenu}
        >
          <img src={logo} alt="Little Lemon logo" className={styles.logo} />
        </Link>

        <button
          className={styles.burger}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={handleToggleMenu}
        >
          <span
            className={`${styles.line} ${isOpen ? styles.line1Open : ""}`}
          ></span>
          <span
            className={`${styles.line} ${isOpen ? styles.line2Open : ""}`}
          ></span>
          <span
            className={`${styles.line} ${isOpen ? styles.line3Open : ""}`}
          ></span>
        </button>

        <nav
          aria-label="Primary navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
        >
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={handleCloseMenu}
                  className={({ isActive }) =>
                    `${styles.navLink} ${
                      isActive && item.to === "/" ? styles.active : ""
                    }`.trim()
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
