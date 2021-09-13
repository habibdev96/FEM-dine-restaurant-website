import BookingHeader from "../components/Booking/BookingHeader";
import PatternSection from "../components/Booking/PatternSection";
import { useGlobalContext } from "../context";

const Booking = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <BookingHeader />
      <PatternSection />
    </>
  );
};

export default Booking;
