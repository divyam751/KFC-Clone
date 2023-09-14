import React from "react";
import "./Style.css";
import { Flex } from "@chakra-ui/react";

const Card2 = ({ card }) => {
  return (
    <div className='menu-card2-parent'>
      <div className='menu-card2-child1'>
        <img
          src={card.url}
          alt={card.title}
          className='menu-card2-child1-img'
        />
        <div className='menu-card2-child1-desc'>
          <div className='menu-card2-child1-title'> {card.title} </div>
          <Flex gap={10}>
            <img
              src={card.point}
              alt={card.varity}
              className='menu-card2-child1-point'
            />
            <p>{card.varity}</p>
            <li>{card.serving}</li>
          </Flex>
          <h4> ₹ {card.price}</h4>
          <div className='card2-desc'>{card.description}</div>
        </div>
      </div>
      <div className='menu-card2-child2'>
        <button className='offer-card-addToCart'>
          Add to Cart
          <img
            className='offee-cart-buttonImg'
            src='https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default Card2;
