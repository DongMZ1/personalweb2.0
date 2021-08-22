import React from "react";
import "../SCSS/main.scss";
import {Link} from 'react-scroll'
import pdf from '../Resume.pdf'
import transcript from '../McgillTranscript.pdf'

const Nav = () => {
  return (
    <div className='Nav py-3'
    >
      <Link to='spmingzhoudong' spy={true} smooth={true} duration={100} >
      <span className="navitem_backgroundborder">Mingzhou Dong</span>
      </Link>
      

      <a href={pdf} style={{textDecoration: 'none'}}><span className="navitem_backgroundborder nav-item">Resume</span></a>
      <a href={transcript} style={{textDecoration: 'none'}}><span className="navitem_backgroundborder nav-item">transcript</span></a>

      <Link to='spcontact' spy={true} smooth={true} duration={100} >
      <span className="navitem_backgroundborder nav-item">Contact</span>
      </Link>
     
    </div>
  );
};

export default Nav;
