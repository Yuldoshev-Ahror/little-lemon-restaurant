import { Link } from "react-router-dom";
import Button from "../Button/Button";
import SpecialCard from "./SpecialCard";
import styles from "./Specials.module.css";
import { specials } from "../../data/specials";
export default function Specials() {
  return (
    <section className="section" id="specials" aria-labelledby="specials-title">
      <div className={`container ${styles.headerRow}`}>
        <div>
          <h2 id="specials-title" className="sectionTitle">
            This week's specials!
          </h2>
          <p className="sectionSubtitle">
            Freshly prepared favorites inspired by traditional Mediterranean
            flavors.
          </p>
        </div>
        <Button as={Link} to="/menu">
          View Menu
        </Button>
      </div>
      <div className={`container ${styles.grid}`}>
        {specials.map((item) => (
          <SpecialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
