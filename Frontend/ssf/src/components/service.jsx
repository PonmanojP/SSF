import React, { useState, useEffect } from 'react';
import './service.css';
import Query from './query'; // Import Query Component

const Service = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/services/');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

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
        {services.map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{service.title}</p>
              </div>
              <div className="flip-card-back">
                <p className="title">{service.title}</p>
                <br />
                <p>Price: ₹ {service.price} / Sq.ft</p>
                <br />
                <p>Delivery: {service.delivery_days} working days</p>
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
