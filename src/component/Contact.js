import React from 'react';
import '../SCSS/main.scss'
import {AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
const Contact = () => {
    return(
       <div className='contact' id='spcontact'>
           <a href='https://www.linkedin.com/in/mingzhoudong/'><AiOutlineLinkedin className='icon' /></a>
           <a href='https://www.facebook.com/mingming.dong.79'><AiOutlineFacebook className='icon' /></a>
           <a href='https://www.instagram.com/partinggggton/'><AiOutlineInstagram className='icon' /></a>

       </div>      
    )
}

export default Contact;