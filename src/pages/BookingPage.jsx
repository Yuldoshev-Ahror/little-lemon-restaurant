import Navbar from "../components/Navbar/Navbar";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
