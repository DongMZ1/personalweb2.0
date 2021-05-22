import AOS from 'aos';
import "./SCSS/main.scss";
import Nav from "./component/Nav";
import Contact from "./component/Contact";
import MingzhouDong from "./component/MingzhouDong";
import Footer from "./component/Footer";
import React, {useEffect} from 'react';
import "aos/dist/aos.css";

function App() {
  useEffect(
    ()=>{
      AOS.init({duration: 1000});
    },[]
  )

  return (
    <>
      <Nav />
      <div data-aos="zoom-in">
      <MingzhouDong />
      </div>
      <div data-aos="fade-down">
      <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
