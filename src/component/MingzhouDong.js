import React from 'react';
import '../SCSS/main.scss';
import Typist from 'react-typist';
import image from '../tx.jpg';
import m from '../image/m.png';
import e from '../image/e.png';
import r from '../image/r.png';
import n from '../image/n.png';

const MingzhouDong = ({ setisProjectPage }) => {
    return (
        <div className={`row mingzhoudong ${window.innerWidth > 768 && 'm-5'}`} id='spmingzhoudong'>
            <div className='col-sm display-none'>
                <Typist avgTypingDelay={0.1}>
                    <h1>Hi!</h1>
                        I am <b> Mingzhou Dong </b>
                        Creative experienced web developer with a passion for building tools ,working with the latest technologies, and never give up learning.
                </Typist>
                <div className='row my-3'><img className='mern' src={m}></img><img className='mern' src={e}></img><img className='mern' src={r}></img><img className='mern' src={n}></img></div>
                <div className='disp-flex row mb-3'>
                    <div onClick={() => setisProjectPage(true)} className='project-icon mx-auto'>See My Projects</div>
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