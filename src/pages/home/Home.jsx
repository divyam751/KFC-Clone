import React, { useEffect, useState } from "react";
import "./Style.css";
import redLines from "../../assets/mobileLogo.png";
import OffersCards from "../../components/carouselOffers/OffersCards";
import axios from "axios";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const fetchData = () => {
    axios
      .get("https://kfc-2yef.onrender.com/cardsData")
      .then((res) => setCardData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='homeMainContianer'>
      <img src={redLines} alt='redLine' className='redLineLogo' />
      <div className='offersDeals'>OFFERS & DEALS</div>

      <OffersCards cardData={cardData} />
    </div>
  );
};

export default Home;
