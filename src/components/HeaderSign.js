import React from 'react'
import '../Login.css'
import image from '../logo.png'
import Button from '@mui/material/Button';

import {

    Link
} from "react-router-dom";

const HeaderSign = () => {

    return (


        <div className='header-design'>

            <img className='logo-design' src={image} alt='logo'>

            </img>
            <div className='header-button'>
                <Button style={{ width: '100px', color: 'black', backgroundColor: 'grey' }} variant="contained" disableElevation>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/Login">Login</Link>
                </Button>

            </div>

        </div>

    )
}


export default HeaderSign;