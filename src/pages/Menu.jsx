import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Menu.module.css";

const menuItems = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "Fresh lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Toasted bread with garlic, olive oil and tomato topping, made fresh for guests who want a light Mediterranean bite.",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$6.00",
    description:
      "A bright and creamy lemon dessert inspired by the restaurant family recipe book and served with a modern touch.",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Grilled Fish",
    price: "$18.50",
    description:
      "Freshly grilled fish served with herbs, lemon and seasonal vegetables for a healthy Mediterranean experience.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Pasta Primavera",
    price: "$14.25",
    description:
      "Classic pasta with seasonal vegetables, olive oil and Mediterranean spices, prepared with a light modern flavor.",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Mediterranean Pizza",
    price: "$16.75",
    description:
      "Stone-baked pizza topped with olives, tomatoes, cheese and herbs, perfect for sharing with family and friends.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Menu() {
  return (
    <>
      <Navbar />
      <section className={styles.menuSection}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <div>
              <h2>Discover our delicious dishes</h2>
              <p>
                Freshly prepared Mediterranean favorites made with quality
                ingredients and served with care.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            {menuItems.map((item) => (
              <article key={item.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={item.image} alt={item.title} />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                  </div>

                  <p>{item.description}</p>

                  <a href="#order" className={styles.orderLink}>
                    Order a delivery
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
