import Globals from "./abstracts/Globals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Shared/Footer";
import Tag from "./components/Shared/Tag";

const App = () => {
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
