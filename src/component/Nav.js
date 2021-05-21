import React from "react";
import "../SCSS/main.scss";
import {HashLink as Link} from 'react-router-hash-link'
const Nav = () => {
  return (
    <div className='Nav'
    >
      <Link smooth to='/' style={{textDecoration: 'none'}}>
      <span className="navitem_backgroundborder">Mingzhou Dong</span>
      </Link>

      <span className="navitem_backgroundborder nav-item">Resume</span>
      <Link smooth to='Contact' style={{textDecoration: 'none'}}>
      <span className="navitem_backgroundborder nav-item">Contact</span>
      </Link>
    </div>
  );
};

export default Nav;
