import HomeHeader from "../components/Home/HomeHeader";
import AboutSectionOne from "../components/Home/AboutSectionOne";
import AboutSectionTwo from "../components/Home/AboutSectionTwo";
import Highlights from "../components/Home/Highlights";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <AboutSectionOne />
        <AboutSectionTwo />
        <Highlights />
      </main>
    </>
  );
};

export default Home;
