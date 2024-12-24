import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-inner'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <img src="./1.png" alt="logo" />
          </div>
            <ul className='footer-menu'>
              <li>About</li>
              <li>Services</li>
              <li>Pricings</li>
              <li>Privacy Policy</li>
            </ul>

          <p>&copy; 2024 SS Foundation. All rights reserved</p>
        </div>


        <div className='footer-right'>
        <ul class = 'socials'>
        <li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
      </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
