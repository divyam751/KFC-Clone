import React from "react";
import "./Style.css";
import Carousel from "../../components/carousel/Carousel";

const Hero = () => {
  return (
    <div className='hero-Main-Contianer'>
      <div className='headerBottom'>
        <div className='heroBottom-text'>
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </div>
        <button className='startOrderBtn'>Start Order</button>
      </div>
      <Carousel />
    </div>
  );
};

export default Hero;
