import React, { useEffect, useState } from "react";
import "./Style.css";
import redLines from "../../assets/mobileLogo.png";
import OffersCards from "../../components/carouselOffers/OffersCards";
import axios from "axios";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios
      .get("https://kfc-2yef.onrender.com/cardsData")
      .then((res) => setCardData(res.data))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="homeMainContianer">
      <img src={redLines} alt="redLine" className="redLineLogo" />
      <div className="offersDeals">OFFERS & DEALS</div>

      <OffersCards cardData={cardData} loading={loading} />
    </div>
  );
};

export default Home;
