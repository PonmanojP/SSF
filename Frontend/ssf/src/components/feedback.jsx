import React, { useState } from 'react';
import './feedback.css';
import RectangleSlider from './slider';

const Feedback = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async () => {
    if (inputValue.trim()) {
      try {
        const response = await fetch('http://localhost:8000/api/create-appointment/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mobile_number: inputValue }),
        });

        const result = await response.json();
        console.log(result);  // Log the full response from the server

        if (response.ok) {
          alert('Appointment recieved. We will contact you soon!');
          setInputValue(''); // Clear input field after successful submission
        } else {
          alert('Error: ' + result.message || result.detail || JSON.stringify(result));
        }
      } catch (error) {
        alert('Error: ' + error.message);
      }
    } else {
      alert('Please enter a valid email or mobile number.');
    }
  };

  return (
    <div className='feedback-container'>
      <h1>What Our Customers Say</h1>
      <RectangleSlider />
      <div className='quote'>
        <div className='quote-img'>
          <h1><span>SS</span> Foundation</h1>
        </div>
        <div className='right-quote'>
          <h2>Get Your Quote Now!</h2>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              placeholder="Enter your Mobile number / Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="input-button" onClick={handleSubmit}>
              Get your quote now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
