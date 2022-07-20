import React from 'react'
import '../Sign.css'
import image from '../logo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const HeaderCreate = () => {

    return (

        <div className='header-design'>

            <img className='logo-design' src={image} alt='logo'>

            </img>
            <div className='header-button'>
            
            <Stack direction="row" spacing={2}>
      <Button style={{backgroundColor:'grey', color:'black'}} variant="contained">create</Button>
              </Stack>
            </div>

        </div>

    )
}


export default HeaderCreate;