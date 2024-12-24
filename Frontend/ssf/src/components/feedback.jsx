import React from 'react'
import './feedback.css'
import Slider from './slider'

const Feedback = () => {
  return (
    <div className='feedback-container'>
      <h1>What Our Customers Say</h1>
      <Slider/>
      <div className='quote'>
        <div className='quote-img'>
          <h1><span>SS</span> Foundation</h1>
        </div>
        <div className='right-quote'>
        <h2>Get Your Quote Now!</h2>
                  <div class="input-container">
                      <input type="text" class="input-field" placeholder='Enter your Mobile number / Email'/>
                      <button class="input-button">Get your quote now</button>
                  </div>
        </div>
        
      </div>
    </div>
  )
}

export default Feedback
