import { bottom } from '@popperjs/core'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
const Project = ({setisProjectPage}) => {
    return <div className='m-5 project position-relative'>          
               <div className='width-max-content cursor-pointer z-100 position-absolute top-0 right-0' onClick={()=>{setisProjectPage(false)}}>Go back</div>
        </div>
   
}

export default Project;