import React from 'react'
import HeaderSign from './HeaderSign';
import '../Login.css'
import img1 from './landing1.jpg'
import img2 from './landing2.jpg'
import img3 from './landing3.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Landing = () => {
    return (

        <div>
            <HeaderSign />
            <div className='center'>
                <span style={{ color: 'white', paddingTop: '40px' }} className='center'>Welcome to our site!</span>
                <div className='big-box'>
                    <div className='row'>
                        <div className='text first-text'><span className='bold'>Create your desired survey!</span>
                            <span>On this site, you can create a</span>
                            <span>survey in the
                                shortest possible time</span> <span>and send it to your friends</span></div>

                        <div className='image'>
                            <img src={img1} alt='polly'></img>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='text first-text'><span className='bold' >Quick and easy access!</span>
                            <span> Due to easy access and simple structure,</span>
                            <span> you can easily create your </span> <span>in the shortest time</span></div>

                        <div className='image'>
                            <img src={img2} alt='easy to work'></img>
                        </div>
                    </div>

                    <div className='row margin-buttom'>
                        <div className='text first-text'><span className='bold'>The highest speed!</span>
                            <span> You can make your own measurement</span>
                            <span>  in the fastest time with the</span> <span>  highest speed</span></div>

                        <div className='image'>
                            <img src={img3} alt='polly'></img>
                        </div>
                    </div>
                </div>

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
                        <div className='icons'>
                            <span style={{ marginTop: '30px', marginLeft: '40px' }}><InstagramIcon /></span>
                            <span style={{ marginTop: '30px', marginLeft: '20px' }}><LinkedInIcon /></span>
                            <span style={{ marginTop: '30px', marginLeft: '20px' }}><TwitterIcon /></span> </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing;