import React from 'react'
import HeaderLogo from './HeaderLogo'
import '../Poll.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
const CreatePoll=()=>{
    return(
        <div className='center'>
<HeaderLogo/>
<span style={{color:'white',marginTop:'30px'}}>Create poll !</span>
<div  className='big-box '>  
   
<Box style={{marginLeft:'150px',marginTop:'30px'}}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >

                        <span>Title: <br></br> </span> <TextField style={{width:'500px'}} id="demo-helper-text-misaligned-no-helper" label="Title" />
                    </Box>

                    <Box style={{marginLeft:'120px',marginTop:'30px'}} >
          <span>Description: </span>     <TextField style={{width:'500px'}}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
         
        />
                    </Box>
                  
                    <Box style={{marginLeft:'120px',marginTop:'30px'}}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >

                        <span>Option1: <br></br> </span> <TextField style={{width:'500px'}} id="demo-helper-text-misaligned-no-helper" label="option" /><DeleteForeverIcon />
                    </Box>  
                    <Box style={{marginLeft:'120px',marginTop:'30px'}}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >

                        <span>Option2: <br></br> </span> <TextField style={{width:'500px'}} id="demo-helper-text-misaligned-no-helper" label="option" /><DeleteForeverIcon />
                    </Box>  
                    <AddCircleIcon style={{marginLeft:'150px',marginTop:'20px'}}/>
                    <div className='center'>
                    <Button style={{ width: '500px', marginTop: '40px', color: 'black', backgroundColor: 'grey' }} variant="contained" disableElevation>
                       Create
                    </Button>

                    </div>
<br></br><br></br><br></br>
</div>

        </div>
    )
}
export default CreatePoll;