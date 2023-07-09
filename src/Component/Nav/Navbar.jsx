import React from 'react'
import { Link } from "react-scroll";
import './Navbar.css'
import profile from '../Assets/Picsart_23-07-04_17-12-15-109.jpg'



const Navbar = () => {
  return (
      <div className='nav-container'>
          {/* left */}
          <div className='nav-icon' >
              <h3 id='name-profile'>Dinesh R</h3>
              <img src={profile} alt="profile" className='nav-profile'/>
          </div>
           {/* right */}
      <div >
              <div className="list-container">
                 
          <ul style={{ listStyleType: "none" }} className="nav-right">
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
       
      </div>

      
    </div>
  )
}

export default Navbar
