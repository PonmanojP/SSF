import React from 'react'
import './hero.css'
import Query from './query'

const Hero = () => {
  return (
    <div className='hero-container' id='home'>
      <div className='hero-image'>
        <img src="https://imgs.search.brave.com/kehVrJC4b5Lx7M9UaGHgM9LmrpFAGNwpFkekmvJO77s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS83Ny8z/Ni9sd29GbUEuanBn" alt="" />
        <div className='overlay'>
          <div className='intro-text'>
            <h1>SS <span>Foundation</span></h1>
            <h3><span>Dreams</span> Come True</h3>
            <center><div class="input-container">
              <input type="text" class="input-field" placeholder='Enter your Mobile number / Email'/>
              <button class="input-button" onClick={alert('We will get back to you soon..!')}>Get your quote now</button>
          </div></center>
          </div>
          <Query/>
        </div>
      </div>   
    </div>
  )
}

export default Hero;
