import React from 'react'
import profile from '../Assets/Picsart_23-07-04_17-12-15-109.jpg'
import './Intro.css'
// import Fade from 'react-reveal/Fade';
// import TypeWriter from './Font'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


const Home = () => {
    const pdfUrl = 'https://github.com/RanganaDinesh/Blog-Project/raw/main/src/Pages/dineshcv.pdf';
    

// const typeWriter = ["FRONT-END DEVELOPER","WEB DEVELOPER", "MERN STACK DEVELOPER", "REACTJS DEVELOPER"];

 
    return (
       
        <div id='section-container'>        
            <div className='container-text'>
          <div>
            <span>WELCOME TO MY WORLD</span>
                {/* <h1>Hi,I’m Dinesh RANGANA  <br /> <TypeWriter data={typeWriter} /></h1> */}
                <p className='content-p' >I have always been interested in web development, and I have the necessary skills required for the role. I have a good understanding of HTML, CSS, JavaScript, and REACT.JS. I am currently improving my mobile app development skills by learning various new technologies.</p>
                </div>
              <div>
                  <span>FIND WITH ME</span>
                        <div>
                            <div className='conatct-icons'>
                          
<a class="btn btn-primary" style={{backgroundColor:'#333333'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-github"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#55acee'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-twitter"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor:'#dd4b39'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-google"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#ac2bac'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-instagram"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-linkedin-in"></i
></a>

                            
                            </div>
                            <span>Download CV &nbsp; </span>
                       <a href={pdfUrl}   download>     <MDBBtn floating tag='a'>
      <MDBIcon fas icon='download' />
    </MDBBtn></a>
                      
                  </div>
                        </div>
                </div>

                <div>
          
              <div className='frame'>
                        <img src={profile} alt="" className='profile-pic' /> <br />
                       
                        <div className='profile-pic1'></div>
                       
                      
                    </div>
                    <h1 className='dinu'>Dinesh </h1>
                    <div className='conatct-icons  hideicons' >
                                        
<a class="btn btn-primary" style={{backgroundColor:'#333333'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-github"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#55acee'}} href="https://github.com/RanganaDinesh" role="button"
  ><i class="fab fa-twitter"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor:'#dd4b39'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-google"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#ac2bac'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-instagram"></i
></a>


<a class="btn btn-primary"  style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/feed/" role="button"
  ><i class="fab fa-linkedin-in"></i
></a>

                        </div>
                   
                </div>
               
          
      
            </div>
           
  )
}

export default Home

