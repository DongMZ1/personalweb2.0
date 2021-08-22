import React from 'react'
import '../SCSS/main.scss'
import Typist from 'react-typist';
import image from '../tx.jpg'

const MingzhouDong = ({setisProjectPage}) => {
    return (
        <div className='row mingzhoudong m-5' id='spmingzhoudong'>
            <div className='col-sm'>
                <Typist avgTypingDelay={0.1}>
                    <h1>Hi!</h1>
                    <p>
                        I am <b> Mingzhou Dong </b>
                        Creative experienced web developer with a passion for building tools ,working with the latest technologies, and never give up learning.
                    </p>
                </Typist>
                <div className='disp-flex'>
                    <div onClick={()=>setisProjectPage(true)} className='project-icon mx-auto'>See My Projects</div>
                </div>
            </div>
            <div className='col-sm'>
                <Typist avgTypingDelay={0.1}>
                    <h3>Biography</h3>
                    <img style={{ borderRadius: '20px' }} src={image} alt='mingzhou-profile' />
                    Major Computer Science at University of Mcgill Faculty of Science and graduated in May, 2021.
                </Typist>
            </div>

        </div>
    )
}

export default MingzhouDong;