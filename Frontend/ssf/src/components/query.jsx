import React from 'react'
import './query.css'

const Query = () => {
  return (
    <div className='query-container'>
      <p>Contact <span>Us</span> </p>
      <p>Let's get in touch..</p>
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="" name="name" id='name' required />
        <label for="name" class="form__label">Name</label>
      </div>
      <br />
      <div class="form__group field">
        <input type="number" class="form__field" placeholder="" name="mobile" id='name' required />
        <label for="mobile" class="form__label">Mobile</label>
      </div>
      <br />
      <br />
      <textarea placeholder="Describe you query to us" cols="40" rows="7"></textarea>
        <br />
      <button className='submit-btn'>Submit</button>
    </div>
  )
}

export default Query
