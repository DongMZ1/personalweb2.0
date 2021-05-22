import React from "react";
import "../SCSS/main.scss";
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <div className='Nav'
    >
      <Link to='spmingzhoudong' spy={true} smooth={true} duration={100} >
      <span className="navitem_backgroundborder">Mingzhou Dong</span>
      </Link>
      

      <span className="navitem_backgroundborder nav-item">Resume</span>

      <Link to='spcontact' spy={true} smooth={true} duration={100} >
      <span className="navitem_backgroundborder nav-item">Contact</span>
      </Link>
     
    </div>
  );
};

export default Nav;
