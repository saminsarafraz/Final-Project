import React from 'react'

import '../Poll.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import HeaderBack from './HeaderBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Link = () => {
    return (
        <div className='center'>

            <HeaderBack />

            <span style={{ color: 'white', marginTop: '30px' }}>Get your link!</span>
            <div className='Link-box'>
                <Box style={{ marginTop: '50px' }}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                >

                    <span style={{ fontWeight: 'bold' }}>Link: <br></br> </span> <TextField style={{ width: '500px' }} id="demo-helper-text-misaligned-no-helper" label="Title" />
                    <ContentCopyIcon />    </Box>


            </div></div>
    )


}


export default Link;