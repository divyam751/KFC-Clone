import React, { useState } from "react";
import "./Style.css";

const OffersCards = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className='offerCards-data'>
          {cardData.slice(currentIndex, currentIndex + 3).map((card, index) => (
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
                <div className='cardButtonSection'>
                  <a href='#'>View Details</a>
                  <button className='cardButtonOffer'>Redeem</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className='OfferSliderButtonsNxt'>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OffersCards;
