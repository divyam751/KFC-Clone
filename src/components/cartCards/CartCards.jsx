import React, { useState } from "react";
import "./Style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartCards = ({ card }) => {
  const [itemCount, setItemCount] = useState(1);

  const handleDec = () => {
    setItemCount(itemCount - 1);
  };
  const handleInc = () => {
    setItemCount(itemCount + 1);
    toast.success("🍗 Item added to cart!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className='cart-cards-container'>
      <div className='cart-cards-parentbox'>
        <div className='cart-cards-child-left'>
          <img
            src={card.url}
            alt='card.titile'
            className='cart-cards-child-left-img'
          />
        </div>
        <div className='cart-cards-child-right'>
          <div className='cart-cards-right-child1'>
            <p className='cart-cards-right-child1-title'>{card.title}</p>
            <p className='cart-cards-right-child1-remove'>Remove</p>
          </div>
          <div className='cart-cards-right-child2'>
            <button
              onClick={handleDec}
              disabled={itemCount < 2}
              className='cart-cards-right-child2-buttons'
            >
              -
            </button>
            <h3> {itemCount} </h3>
            <button
              onClick={handleInc}
              className='cart-cards-right-child2-buttons'
            >
              +
            </button>
            <div className='cart-cards-right-child2-itemPrice'>
              <p>₹ {parseFloat(card.price * itemCount).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
