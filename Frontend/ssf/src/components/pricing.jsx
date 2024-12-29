import React, { useState, useEffect } from 'react';
import './pricing.css';
import Accordion from './StandardAccordion';
import PAccordion from './PremiumAccordion';

const Pricing = () => {
  const [standardPrice, setStandardPrice] = useState(null);
  const [premiumPrice, setPremiumPrice] = useState(null);
  const [standardLoading, setStandardLoading] = useState(false);
  const [premiumLoading, setPremiumLoading] = useState(false);
  const [standardError, setStandardError] = useState(null);
  const [premiumError, setPremiumError] = useState(null);

  const fetchStandardPrice = async () => {
    setStandardLoading(true);
    setStandardError(null);
    try {
      const response = await fetch('https://ssfoundation.pythonanywhere.com/api/standard-price/');
      if (!response.ok) {
        throw new Error('Failed to fetch standard price');
      }
      const data = await response.json();
      console.log(data);
      setStandardPrice(data[0].price); // Assuming the API returns { price: 2000 }
    } catch (err) {
      setStandardError(err.message);
    } finally {
      setStandardLoading(false);
    }
  };

  const fetchPremiumPrice = async () => {
    setPremiumLoading(true);
    setPremiumError(null);
    try {
      const response = await fetch('https://ssfoundation.pythonanywhere.com/api/premium-price/');
      if (!response.ok) {
        throw new Error('Failed to fetch premium price');
      }
      const data = await response.json();
      setPremiumPrice(data[0].price); // Assuming the API returns { price: 2300 }
    } catch (err) {
      setPremiumError(err.message);
    } finally {
      setPremiumLoading(false);
    }
  };

  useEffect(() => {
    fetchStandardPrice();
    fetchPremiumPrice();
  }, []);

  return (
    <div className="pricing-container" id="pricings">
      <h1>Our Pricing</h1>
      <div className="pricing-inner">
        {/* Standard Section */}
        <div className="white-box">
          <h1>$ Standard</h1>
          {standardLoading ? (
            <p>Loading...</p>
          ) : standardError ? (
            <p className="error">{standardError}</p>
          ) : (
            <p>
              <span>₹{standardPrice || 'N/A'}/</span>sq.ft
            </p>
          )}
          <Accordion />
        </div>

        {/* Premium Section */}
        <div className="white-box">
          <h1>◆ Premium</h1>
          {premiumLoading ? (
            <p>Loading...</p>
          ) : premiumError ? (
            <p className="error">{premiumError}</p>
          ) : (
            <p>
              <span>₹{premiumPrice || 'N/A'}/</span>sq.ft
            </p>
          )}
          <PAccordion />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
