import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/1.png" alt="Logo" />
      </div>
      <ul className={`menu ${scrolled ? 'scrolled' : ''}`}>
        <li onClick={() => handleScrollTo('home')}>Home</li>
        <li onClick={() => handleScrollTo('services')}>Services</li>
        <li onClick={() => handleScrollTo('pricings')}>Pricings</li>
        <li onClick={() => handleScrollTo('about')}>About</li>
      </ul>
      <button onClick={() => handleScrollTo('pricings')}>View Plans</button>
    </div>
  );
};

export default Navbar;
