import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Make sure to define styles in a CSS file

const RectangleSlider = () => {
  const rectangles = [
    { id: 1,},
    { id: 2, },
    { id: 3, },
    { id: 4},
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {rectangles.map((rect) => (
          <div key={rect.id}>
            <div
              className="rectangle">
                <center><b> Ponmanoj P</b></center>
                <br />  
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis cumque rem vero, assumenda sunt verconsectetur adipisicing elit. Nulla, maiores omnis quo modi ratione laborum cupiditate dicta nesciunt magnam perferendis dolore optio nihil facere suscipit iste harum assumenda reiciendis! Beatae!</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RectangleSlider;
