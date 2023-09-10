import React, { useEffect, useRef, useState } from "react";
import "./Style.css";

const Carousel = () => {
  const arr = [
    "https://images.ctfassets.net/wtodlh47qxpt/5gf6cz2vMpCLgQ4M4XaUaj/8a10d03ec85203e7439e113d336f949d/Zinger_pro_1440x396px.jpg?w=1440&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/7K2vLQBK4gYPuHKqQ24F4Z/ee7c4a43c09d3e7500cd80aebed74475/Double_Down_1440x396px.jpg?w=1289&fit=fill&fm=webp",
    "https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/344377015_204365952379795_1104948206954739779_n.png?_nc_cat=103&ccb=1-7&_nc_sid=52f669&_nc_ohc=jozQ-qMaJtAAX_4HjMn&_nc_ht=scontent.fagr1-4.fna&oh=00_AfBOJs_i2aWyZw4BnVUafZlFQODl4LCmGRmyIdqbWxhYSA&oe=6502A2BE",
    "https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/340955298_779571883726528_8243326874128589709_n.png?_nc_cat=104&ccb=1-7&_nc_sid=52f669&_nc_ohc=yhP2c4aWp-QAX96pMpu&_nc_ht=scontent.fagr1-1.fna&oh=00_AfDBATGZ5xwDmDtvn6_UwQsVvJ-ATm3N3n7OZGVr3z50fA&oe=65035E4C",
    "https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/335483946_2352483978256580_2567174708211694457_n.png?_nc_cat=111&ccb=1-7&_nc_sid=52f669&_nc_ohc=ZTK5e3ptIWoAX98jqsG&_nc_oc=AQm_tn48sBUTlR8dAIT7li8QMoj1hY6Y-eUVP7HYKKwkq5Z9Pq8MGCuXtgIWt6nY2bGMaI2ObsXpWO_RJQuck6DG&_nc_ht=scontent.fagr1-3.fna&oh=00_AfCpeZwRRbZcgI6NFY43N85EZbnKwGqx3X0PfgGfz6bjCg&oe=6503667D",
    "https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/333542318_932005987972184_9120148715817954799_n.png?_nc_cat=106&ccb=1-7&_nc_sid=52f669&_nc_ohc=BxclqNrIBsgAX9Qb1Mk&_nc_ht=scontent.fagr1-3.fna&oh=00_AfD_fAzqvW-LD3AYtCqNXbA6CoVsQoc7vXLte516ulvNPg&oe=6501C4E6",
    "https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/325977062_543561927710816_2527933561024656227_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=52f669&_nc_ohc=aUi_Q0HLEloAX87gVDH&_nc_ht=scontent.fagr1-4.fna&oh=00_AfATWDZbXmv_k83fOIMRQiOg_Y0ztunWUs_WsCPcat89Sw&oe=650226B0",
    "https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/323355087_5791355170931799_2603983197745794738_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=HYFT8wFju20AX8HtOqk&_nc_ht=scontent.fagr1-4.fna&oh=00_AfB1haaQFcLl8SW221I-MgCoECKZYY7D1gwRXdWP0_SR2A&oe=65035C11",
  ];

  const [imgNumber, setImgNumber] = useState(0);
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (i === arr.length) {
        i = 0;
      }
      setImgNumber(i);
      i++;
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='Carousel-Main-Contianer'>
      <div className='carouselBody'>
        <img src={arr[imgNumber]} alt='' className='carouselImg' />
      </div>
    </div>
  );
};

export default Carousel;
