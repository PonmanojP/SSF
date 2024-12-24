import React from 'react'
import './pricing.css'
import Accordion from './accordion'

const Pricing = () => {
  return (
    <div className='pricing-container' id='pricings'>
      <h1>Our Pricing</h1>
      <div className='pricing-inner'>
        <div className='white-box'>
          <h1>$ Standard</h1>
          <p><span>₹2000/</span>sq.ft</p>
          <Accordion/>
        </div>
        <div className='white-box'>
        <h1>◆ Premium</h1>
        <p><span>₹2300/</span>sq.ft</p>
          <Accordion/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Pricing
