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
        <div className='menu-card2-child1-desc' style={{ display: "flex" }}>
          <div className='menu-card2-child1-title'> {card.title} </div>
          <Flex gap={10}>
            <img
              src={card.point}
              alt={card.varity}
              className='menu-card2-child1-point'
            />
            <p>{card.varity}</p>
            {card.serving ? <li>{card.serving}</li> : ""}
          </Flex>
          <Flex gap={20}>
            {card.oldPrice ? (
              <>
                <h4 className='menu-card2-child1-oldPrice'>{card.oldPrice}</h4>
                <h4> ₹ {card.price}</h4>`
              </>
            ) : (
              <h4> ₹ {card.price}</h4>
            )}
          </Flex>
          <div className='card2-desc'>{card.description}</div>
        </div>
      </div>
      <div className='menu-card2-child2'>
        <button className='offer-card-addToCart'>
          Add to Cart
          <img
            className='offee-cart-buttonImg'
            src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default Card2;
