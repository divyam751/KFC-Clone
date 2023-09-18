import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const OffersCards = ({ cardData, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 4 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 4 : prevIndex - 1,
    );
  };

  return (
    <div className='ParentContainer'>
      <div className='offerCardsMainContainer'>
        <button onClick={prevSlide} className='OfferSliderButtonsPrv'>
          &lt;
        </button>
        {loading ? (
          <Loader />
        ) : (
          <div className='offerCards-data'>
            {cardData
              .slice(currentIndex, currentIndex + 3)
              .map((card, index) => (
                <div className='OfferCardSection' key={index}>
                  <div className='SingleCardBlock'>
                    <div className='singleCardOffer'>
                      <img
                        src={card.url}
                        alt={card.text}
                        style={{ marginBottom: "2px" }}
                      />
                      <div
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "30px",
                        }}
                      >
                        {card.offer}
                      </div>
                      <div>{card.text}</div>
                    </div>
                    <div
                      className='cardButtonSection'
                      onClick={() => navigate("/offers")}
                    >
                      <p>View Details</p>

                      <button className='cardButtonOffer'>Redeem</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        <button onClick={nextSlide} className='OfferSliderButtonsNxt'>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OffersCards;
