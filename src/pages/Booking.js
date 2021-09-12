import BookingHeader from "../components/Booking/BookingHeader";
import PatternSection from "../components/Booking/PatternSection";

const Booking = () => {
  const scrollToTop = () => window.scrollTo(0, 0);
  scrollToTop();

  return (
    <>
      <BookingHeader />
      <PatternSection />
    </>
  );
};

export default Booking;
