import React, { useEffect, useState } from "react";
import "./Style.css";
import Carousel from "../../components/carousel/Carousel";
import lineImg from "../../assets/mobileLogo.png";
import axios from "axios";
import Categories from "../../components/categoriesCard/Categories";

const Hero = () => {
  const [data, setData] = useState([]);
  const fethData = () => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fethData();
  }, []);
  console.log(data);
  return (
    <div className='hero-Main-Contianer'>
      <div className='headerBottom'>
        <div className='heroBottom-text'>
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </div>
        <button className='startOrderBtn'>Start Order</button>
      </div>
      <Carousel />
      <div className='welcomeContainer'>
        <img src={lineImg} alt='line Img' className='lineImg' />
        <div className='welcomeGreeting'>WELCOME TO KFC!</div>
      </div>
      <div className='categoriesContainer'>
        <div className='categoriesLeft'>
          <h3>BROWSE CATEGORIES</h3>
        </div>
        <div className='categoriesRight'>
          <div className='horizontalLine'></div>
        </div>
      </div>
      <div className='categorySection'>
        <div className='categoryCards'>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <Categories url={item.url} categoryName={item.categoryName} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
