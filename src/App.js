import AOS from 'aos';
import "./SCSS/main.scss";
import Nav from "./component/Nav";
import Contact from "./component/Contact";
import MingzhouDong from "./component/MingzhouDong";
import Footer from "./component/Footer";
import Project from "./component/Project"
import React, { useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "aos/dist/aos.css";

function App() {
  const [isProjectPage, setisProjectPage] = useState(false);
  useEffect(
    () => {
      AOS.init({ duration: 1000 });
      setTimeout(() => { AOS.refresh() }, 7000)
    }, []
  )

  return (
    <>
      <Nav />
      <SwitchTransition>
      <CSSTransition key={isProjectPage ? "hi!" : "Hello!"}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} timeout={200} classNames='movetransition'>
        {isProjectPage ?
          <Project isProjectPage={isProjectPage} setisProjectPage={setisProjectPage} />
          :
          <>
            <div data-aos="zoom-in">
              <MingzhouDong setisProjectPage={setisProjectPage} />
            </div>
            <div data-aos="fade-down">
              <Contact />
            </div>
          </>
        }
      </CSSTransition>
      </SwitchTransition>
      <Footer />
    </>
  );
}

export default App;
