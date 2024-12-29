import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Make sure to define styles in a CSS file

const RectangleSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("https://ssfoundation.pythonanywhere.com/api/feedbacks/");
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Between 992px and 546px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 546, // Below 546px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {feedbacks.map((feed) => (
          <div key={feed.id}>
            <div className="rectangle">
              <center><b>{feed.name}</b></center>
              <br />
              {feed.feedback}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RectangleSlider;
