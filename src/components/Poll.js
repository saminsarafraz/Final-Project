import React from 'react'
import HeaderCreate from './HeaderCreate'
import '../Poll.css'

const Poll=()=>{

    return(
        <div className='center'>
      
<HeaderCreate/>
<span style={{color:'white',marginTop:'30px'}}>Build your poll!</span>
<div className='big-box'></div>
        </div>
    )
}
export default Poll;