import React from 'react'
import '../Poll.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HeaderLogo from './HeaderLogo'
const Edit = () => {
    return (
        <div className='center'>
            <HeaderLogo />
            <span style={{ color: 'white', marginTop: '30px' }}>Edit !</span>
            <div className='big-box '>

                <Box style={{ marginLeft: '150px', marginTop: '30px' }}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                >

                    <span>Title: <br></br> </span> <TextField style={{ width: '500px' }} id="demo-helper-text-misaligned-no-helper" label="Title" />
                </Box>

                <Box style={{ marginLeft: '120px', marginTop: '30px' }} >
                    <span>Description: </span>     <TextField style={{ width: '500px' }}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}

                    />
                </Box>

                <div className='center'>
                    <Button style={{ marginLeft: '20px', width: '500px', marginTop: '40px', color: 'black', backgroundColor: 'grey' }} variant="contained" disableElevation>
                        Save
                    </Button>

                </div>
                <br></br><br></br><br></br>

            </div>




        </div>
    )



}
export default Edit;