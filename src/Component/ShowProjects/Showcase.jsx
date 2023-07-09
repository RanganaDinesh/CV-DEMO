import React from 'react'
import Button from '@mui/material/Button';
import './Showcase.css';
// import Fade from 'react-reveal/Fade';

const Skills = () => {
    const items = require('../../Api/Api.json')
  return (
      <>
           <h2 className='skills-title'> E-COMMERCE APP</h2>
      <div className='skill-container' >
             
              <div className='item-container'>
              {items.map((item) => {
        return (
            // <Fade bottom>
                  <div className='item'>
                      <img src={item.image} alt=""  className='img-product'/>
                      <div className='btn-hide'>
                      <Button variant="contained" disableElevation style={{backgroundColor:'black'}}  id='cart-btn'>
                     ADD CART <span className='arrow'> &nbsp; &#10140;</span>
                          </Button>
                          </div>

                </div>
                // </Fade>
              )
            })}
                  
              </div>
              
      </div>
      </>
  )
}

export default Skills
