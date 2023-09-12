import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import linesLogo from "../../assets/mobileLogo.png";

import { useNavigate } from "react-router-dom";

const Offer = () => {
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();
  const fethData = () => {
    axios
      .get("https://kfc-2yef.onrender.com/cardsData")
      .then((res) => setCardData(res.data));
  };

  useEffect(() => {
    fethData();
  }, []);
  console.log(cardData);
  return (
    <div className='offer-Main-Contianer'>
      <div className='offer-headerBottom'>
        <div className='offerBottom-text'>
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </div>
        <button className='offer-startOrderBtn'>Start Order</button>
      </div>
      <div className='deals-header-image'>
        <h3 class='deals-image-text'>Deals &amp; Offers</h3>
      </div>
      <div className='nationalOfferContainer'>
        <img src={linesLogo} alt='line Img' className='linesLogo' />
        <div className='nationalOfferText'>NATIONAL OFFERS</div>
      </div>

      <div className='offer-categorySection'>
        <div className='offer-categoryCards'>
          <div className='offer-cardStructure'>
            <h2>SELECT A KFC TO SEE LOCAL OFFERS</h2>
            <button className='offer-card-button'>Find a KFC</button>
          </div>
          <div className='offer-card2Structure'>
            <h1>SIGN IN TO SEE MORE EXCLUSIVE OFFERS & DEALS</h1>
            <button className='offer-card-button'>Login</button>
          </div>

          {cardData.map((card, index) => {
            return (
              <div className='offer-categorySection'>
                <div className='offer-SingleCardBlock'>
                  <div className='offer-singleCardOffer'>
                    <img
                      src={card.url}
                      alt={card.text}
                      style={{ marginBottom: "2px" }}
                    />
                    <div
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "40px",
                      }}
                    >
                      {card.offer}
                    </div>
                    <div>{card.text}</div>
                  </div>
                  <div
                    className='offer-cardButtonSection'
                    onClick={() => navigate("/offers")}
                  >
                    View Details
                    <button className='offer-cardButtonOffer'>Redeem</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
