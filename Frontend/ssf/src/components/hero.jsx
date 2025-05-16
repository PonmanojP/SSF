import React, { useState } from 'react';
import './hero.css';
import Query from './query';

const Hero = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputValue.trim()) {
      try {
        const response = await fetch('https://ssfoundation.pythonanywhere.com/api/create-appointment/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobile_number: inputValue }),
        });

        const result = await response.json();
        if (response.ok) {
          alert('Appointment recieved. We will contact you soon!');
          setInputValue(''); // Clear input field after successful submission
        } else {
          alert('Error: ' + result.message);
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    } else {
      alert('Please enter a valid email or mobile number.');
    }
  };

  return (
    <div className='hero-container' id='home'>
      <div className='hero-image'>
        <img src="./hero.jpeg" alt="" />
        <div className='overlay'>
          <div className='intro-text'>
            <h1>SS <span>Foundation</span></h1>
            <h3><span>Dreams</span> Come True...</h3>
            <center>
              <div className="input-container">
                <input
                  type="text"
                  className="input-field"
                  placeholder='Enter your Mobile number / Email'
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button className="input-button" onClick={handleSubmit}>
                  Get your quote now
                </button>
              </div>
            </center>
          </div>
          <Query />
        </div>
      </div>
    </div>
  );
};

export default Hero;
