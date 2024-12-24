import React, { useState } from 'react';
import './service.css';
import Query from './query'; // Import Query Component

const Service = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='service-container' id='services'>
      <center><h1>Our Services</h1></center>
      <br />
      <div className='service-inner'>
        {['2D FLOOR DESIGNING', '3D FLOOR DESIGNING', '3D ELEVATION DESIGNING', 'PLAN APPROVAL'].map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{service}</p>
              </div>
              <div className="flip-card-back">
                <p className="title">{service}</p>
                <br />
                <p>Price : ₹ 5 / Sq.ft</p>
                <br />
                <p>Delivery : 5 working days</p>
                <br />
                <button className='enquire-btn' onClick={openModal}>Enquire Us</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <Query />
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
