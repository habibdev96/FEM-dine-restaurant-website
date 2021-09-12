import Globals from "./abstracts/Globals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Shared/Footer";
import Tag from "./components/Shared/Tag";

const App = () => {
  AOS.init({ offset: 10, duration: 1000, once: true });

  return (
    <>
      <Globals />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Booking" component={Booking} />
        </Switch>
      </Router>
      <Footer />
      <Tag />
    </>
  );
};

export default App;
