import React, { useState } from 'react';
import './query.css';

const Query2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ssfoundation.pythonanywhere.com/api/queries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage('Query submitted successfully!');
        setFormData({ name: '', phone_number: '', description: '' }); // Reset form
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className='query2-container'>
      <p>Contact <span>Us</span></p>
      <p>Let's get in touch..</p>
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder=""
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form__label">Name</label>
        </div>
        <br />
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder=""
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone_number" className="form__label">Phone Number</label>
        </div>
        <br />
        <br />
        <textarea
          placeholder="Describe your query to us"
          name="description"
          value={formData.description}
          onChange={handleChange}
          cols="40"
          rows="7"
          required
        ></textarea>
        <br />
        <center><button type="submit" className='submit-btn'>Submit</button></center>
      </form>
      {message && <p className="response-message">{message}</p>}
    </div>
  );
};

export default Query2;
