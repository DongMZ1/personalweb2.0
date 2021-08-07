import React from 'react'
import '../SCSS/main.scss'
import Typist from 'react-typist';
import image from '../tx.jpg'

const MingzhouDong = () => {
    return (
        <div className='row mingzhoudong' id='spmingzhoudong'>
            <div className='col-sm'>
                <Typist avgTypingDelay={0.1}>
                    <h1>Hi!</h1> I am <b> Mingzhou Dong(董明洲) </b>, Nice to meet you! <br />
                    I am a creative web developer(MERN Stack) having experience in developing large-scaled website(<a href='https://leapgrad.com/'>Leapgrad</a>), landing pages, and applications from concept through deployment, with a responsive
                    approach.
                    <br />
                    I was, and still am, eager to learn new frameworks and programming languages. This passion carried me beyond
                    school curriculum to world of SCSS, Reactjs, Nodejs and MongoDB.
                    <br />
                </Typist>
            </div>
            <div className='col-sm'>
                <Typist avgTypingDelay={0.1}>
                    <h3>Biography</h3>
                    <img src={image} atl='image' />
                    I study Computer Science at University of Mcgill Faculty of Science and graduated in May, 2021.
                </Typist>
            </div>

        </div>
    )
}

export default MingzhouDong;