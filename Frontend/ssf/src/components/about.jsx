import React, { useEffect, useState } from 'react';
import './about.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://127.0.0.1:8000/api/about/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch about data');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming your API response is an array of about objects
        setAboutData(data);
      })
      .catch((error) => {
        console.error('Error fetching about data:', error);
      });
  }, []);

  return (
    <div className='about-container' id='about'>
      <h1>About SS Foundation</h1>
      <div className='about-inner'>
        <div className='about-text'>
          {aboutData ? (
            <p>{aboutData[0]?.description || 'No description available.'}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className='about-img'>
          <img
            src="https://imgs.search.brave.com/GMXNGhwgwygqg_cLIu_8Z64pnQzEy0c4-Cn_5gw81Og/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvaG91c2Uvc21h/bGwvaG91c2VfUE5H/NzEucG5n"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
