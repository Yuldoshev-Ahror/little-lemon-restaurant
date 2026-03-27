import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import styles from "./ConfirmedBookingPage.module.css";
export default function ConfirmedBookingPage() {
  const location = useLocation();
  const booking = location.state?.booking;
  return (
    <>
      <Navbar />
      <main>
        <section className="section" aria-labelledby="confirmation-title">
          <div className={`container ${styles.card}`}>
            <p className={styles.badge}>Reservation submitted</p>
            <h1 id="confirmation-title" className="sectionTitle">
              Booking Confirmed
            </h1>
            <p className={styles.text}>
              {booking
                ? `Your table request for ${booking.guests} guest(s) on ${booking.date} at ${booking.time} has been recorded.`
                : "Your reservation request has been recorded successfully."}
            </p>
            <div className={styles.actions}>
              <Button as={Link} to="/">
                Back to Home
              </Button>
              <Button as={Link} to="/booking">
                Book Another Table
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
