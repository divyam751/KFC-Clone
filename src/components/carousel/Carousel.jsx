import React, { useEffect, useState } from "react";
import "./Style.css";
import banner1 from "../../assets/Banners/1.png";
import banner2 from "../../assets/Banners/2.png";
import banner3 from "../../assets/Banners/3.jpg";
import banner4 from "../../assets/Banners/5.png";

const Carousel = () => {
  const arr = [banner1, banner2, banner3, banner4];
  const [imgNumber, setImgNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgNumber((prevImgNumber) => (prevImgNumber + 1) % arr.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [arr.length]);

  return (
    <div className="Carousel-Main-Contianer">
      <div
        className="carouselBody"
        style={{ transform: `translateX(-${imgNumber * 100}%)` }}
      >
        {arr.map((banner, index) => (
          <img
            src={banner}
            alt={`carouselImg${index}`}
            className="carouselImg"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
