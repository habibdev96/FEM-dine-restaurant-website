import HomeHeader from "../components/Home/HomeHeader";
import AboutSectionOne from "../components/Home/AboutSectionOne";
import AboutSectionTwo from "../components/Home/AboutSectionTwo";
import Highlights from "../components/Home/Highlights";
import Features from "../components/Home/Features";
import Cta from "../components/Home/Cta";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <AboutSectionOne />
        <AboutSectionTwo />
        <Highlights />
        <Features />
        <Cta />
      </main>
    </>
  );
};

export default Home;
