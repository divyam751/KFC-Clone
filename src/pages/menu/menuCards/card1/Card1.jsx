import React from "react";
import "./Style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card1 = ({ card }) => {
  const handleClick = ({ card }) => {
    const localCart = JSON.parse(localStorage.getItem("cartData")) || [];
    localCart.push(card);
    localStorage.setItem("cartData", JSON.stringify(localCart));
    toast.success("🍗 Item added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className='menu-childCardBody'>
        <img src={card.url} alt={card.title} className='offer-cardImg' />
        <h3>{card.title}</h3>
        <div className='offer-cardCategory'>
          <img
            src='https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg'
            alt=''
          />
          <p>{card.varity}</p>
          <li> {card.serving}</li>
        </div>
        <h2>₹ {card.price}</h2>
        <p className='offer-cardCategory-text'>{card.description}</p>
        <div className='offer-button-add'>
          <button
            className='offer-card-addToCart'
            onClick={() => handleClick({ card })}
          >
            Add to Cart
            <img
              className='offee-cart-buttonImg'
              src='https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg'
              alt=''
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card1;
