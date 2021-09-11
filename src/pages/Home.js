import HomeHeader from "../components/Home/HomeHeader";
import AboutSectionOne from "../components/Home/AboutSectionOne";
import AboutSectionTwo from "../components/Home/AboutSectionTwo";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <main>
        <AboutSectionOne />
        <AboutSectionTwo />
      </main>
    </>
  );
};

export default Home;
