import React from 'react'
import '../SCSS/main.scss'
import Typist from 'react-typist';

const MingzhouDong = () =>{
    return(
        <div className='row mingzhoudong' id='spmingzhoudong'>
            <div className='col-sm'>
                <Typist avgTypingDelay={1}>
                <h1>Hi!</h1> I am <b> Mingzhou Dong(董明洲) </b>, Nice to meet you! <br />
                Since beginning my journey as a full-stack developer nearly 1 year
                <br />
                I'm quietly confident and naturally curious.
                <br />
                I am a self-driven person who can deliver strong programming, communication, and analytical skills within
                 the development team.   
                 </Typist>        
            </div>
            <div className='col-sm'>
            <Typist avgTypingDelay={1}>
                <h3>Biography</h3>
                I am a graduate in Department of Computer Science at University of
                Mcgill graduated in May, 2021.
                </Typist> 
            </div>

        </div>
    )
}

export default MingzhouDong;