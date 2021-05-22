import React from 'react'
import '../SCSS/main.scss'
import Typist from 'react-typist';
import image from '../tx.jpg'

const MingzhouDong = () =>{
    return(
        <div className='row mingzhoudong' id='spmingzhoudong'>
            <div className='col-sm'>
                <Typist avgTypingDelay={1}>
                <h1>Hi!</h1> I am <b> Mingzhou Dong(董明洲) </b>, Nice to meet you! <br />
                Since beginning my journey as a computer science student nearly 3 year, 
                I have always been interested by web development. I thrive in the never-ending problem solving, and
                I strongly believe a website is the same as a personal business card now days.
                <br />
                I was, and still am, eager to learn new frameworks and programming languages. This passion carried me beyond
                school curriculum to world of SCSS, Reactjs, Nodejs and MongoDB.
                <br />
                I am a self-driven person who can deliver strong programming, communication, and analytical skills within
                 the development team.   
                 </Typist>        
            </div>
            <div className='col-sm'>
            <Typist avgTypingDelay={1}>
                <h3>Biography</h3>
                <img src={image} />
                I am a graduate in Department of Computer Science at University of
                Mcgill graduated in May, 2021.
                </Typist> 
            </div>

        </div>
    )
}

export default MingzhouDong;