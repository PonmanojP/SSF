import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [socials, setSocials] = useState({});
  const [loadingSocials, setLoadingSocials] = useState(true);

  // Fetch socials
  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const response = await fetch('https://ssfoundation.pythonanywhere.com/api/socials/');
        const data = await response.json();
        setSocials(data[0]); // Assuming the API returns an array with the first item as the socials object
        console.log(data);
      } catch (error) {
        console.error('Error fetching socials:', error);
      } finally {
        setLoadingSocials(false);
      }
    };

    fetchSocials();
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/ss_foundation_logo.png" alt="logo" />
          </div>
          <p>&copy; 2024 SS Foundation. All rights reserved</p>
        </div>

        <div className="footer-right">
          <ul className="socials">
            {loadingSocials ? (
              <p>Loading socials...</p>
            ) : (
              <>
                {socials.mobile && (
                  <li>
                    <a href={`tel:${socials.mobile}`}>
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                    </a>
                  </li>
                )}
                {socials.whatsapp && (
                  <li>
                    <a
                      href={`${socials.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                )}
                {socials.mail && (
                  <li>
                    <a href={`mailto:${socials.mail}`}>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                  </li>
                )}
                {socials.instagram && (
                  <li>
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                )}
                {socials.facebook && (
                  <li>
                    <a
                      href={socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
