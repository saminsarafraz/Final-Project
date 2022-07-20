import React from 'react'
import '../Sign.css'
import image from '../logo.png'
import Button from '@mui/material/Button';


const HeaderSign = () => {

    return (

        <div className='header-design'>

            <img className='logo-design' src={image} alt='logo'>

            </img>
            <div className='header-button'>
            <Button style={{ width: '100px', color: 'black', backgroundColor: 'grey' }} variant="contained" disableElevation>
                        Sign in
                    </Button>
            
            </div>

        </div>

    )
}


export default HeaderSign;