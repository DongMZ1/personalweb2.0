import logo from "./logo.svg";
import "./SCSS/main.scss";
import Menu from "./component/Menu";
import Nav from "./component/Nav";
import Contact from "./component/Contact";
import MingzhouDong from "./component/MingzhouDong";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
          <Nav />
        <Route path='/'>
          <MingzhouDong />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
