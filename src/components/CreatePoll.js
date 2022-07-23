import  React,{useState} from 'react'
import HeaderLogo from './HeaderLogo'
import '../Poll.css'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

const CreatePoll=()=>{

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [option, setOption] = useState("")


    axios.post("https://parseapi.back4app.com/poll", {headers:{
        'X-Parse-Application-Id': 'f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y',

        'X-Parse-REST-API-Key': 'ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg',
        
        'Content-Type': 'application/json',
       }}, {
     data: {
        title: title, 
        des:description, 
        option: option
     }
    }).then((response) => {
        console.log(response)
    }).catch(err => console.log(err))







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

                        <span>Title: <br></br> </span> <TextField  onChange={e => setTitle(e.target.value)} style={{width:'500px'}} id="demo-helper-text-misaligned-no-helper" label="Title" />
                    </Box>

                    <Box style={{marginLeft:'120px',marginTop:'30px'}} >
          <span>Description: </span>     <TextField onChange={e => setDescription(e.target.value)} style={{width:'500px'}}
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

                        <span>Option1: <br></br> </span> <TextField onChange={e => setOption(e.target.value)} style={{width:'500px'}} id="demo-helper-text-misaligned-no-helper" label="option" /><DeleteForeverIcon />
                    </Box>  
                    <Box style={{marginLeft:'120px',marginTop:'30px'}}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                    >

                        <span>Option2: <br></br> </span> <TextField  onChange={e => setOption(e.target.value)} style={{width:'500px'}} id="demo-helper-text-misaligned-no-helper" label="option" /><DeleteForeverIcon />
                    </Box>  
                    <AddCircleIcon style={{marginLeft:'150px',marginTop:'20px'}}/>
                    <div className='center'>
                    <Button onClick={CreatePoll()} style={{ width: '500px', marginTop: '40px', color: 'black', backgroundColor: 'grey' }} variant="contained" disableElevation>
                       Create
                    </Button>

                    </div>
<br></br><br></br><br></br>
</div>

        </div>
    )
}
export default CreatePoll;