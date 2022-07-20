import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Login.css'
import HeaderBack from './HeaderBack';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios'

const Sign = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        axios.get('https://parseapi.back4app.com/login', {

            Headers: {
                " X-Parse-Application-Id": 'f931V7Wy2RrIE9b1TO0LfEyKE7Sxmiz3xNbvZY0y',

                "X-Parse-REST-API-Key": 'ymLai1cLTm8N1u3DWTwUQHx1nzAD7BKikHSINpgg',

                " X-Parse-Revocable-Session": '1',

            },
            params: {
                username: username,
                password: password,
            }

        }
        ).then((response) => {
            const token = response.sessionToken;
            localStorage.setItem('Token', token)
        }).catch(() => {
console.log("we have error")
        })
    }






    return (

        <div>
            <div className='center '> <HeaderBack> </HeaderBack>
                <div> <p className='p-color'>Sign in please!</p></div>
                <div className='box'>
                    <div className='center margin-top'>
                        <Box
                            sx={{
                                display: 'flex', alignItems: 'center',
                                '& > :not(style)': { m: 1 },
                            }}
                        >

                            <span>please Enter your Username: <br></br> </span> <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="demo-helper-text-misaligned-no-helper" label="userName" />
                        </Box>
                    </div>    <div className='center'>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '& > :not(style)': { m: 1 },
                        }}
                        >
                            <span>please Enter your PassWord:    </span> <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Box>

                    </div>
                    <div className='center' >
                        <Button onClick={login} style={{ width: '300px', marginTop: '40px', color: 'black', backgroundColor: 'grey' }} variant="contained" disableElevation>
                            Sign in
                        </Button>
                    </div> </div>
            </div>
            <footer>
                <div className='footer'>
                    <div className='leftpart-footer'>
                        <span className='bold'>Concat us: </span>
                        <span>Tell: 0936814770</span>
                        <span>021000000</span>
                        <span>Email: samin.sarafraz9@gmail.com</span>
                    </div>
                    <div className='rightpart-footer'><span className='bold'>Follow us on social networks</span>
                        <div className='icons'>     <span style={{ marginTop: '30px', marginLeft: '40px' }}><InstagramIcon /></span>
                            <span style={{ marginTop: '30px', marginLeft: '20px' }}><LinkedInIcon /></span>
                            <span style={{ marginTop: '30px', marginLeft: '20px' }}><TwitterIcon /></span> </div>
                    </div>
                </div>
            </footer>


        </div>







    )
}

export default Sign;