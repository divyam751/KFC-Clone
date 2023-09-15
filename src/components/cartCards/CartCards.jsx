import React, { useState } from "react";
import "./Style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const card = {
  id: 1,
  url: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=33.22",
  title: "5 Leg Pc & 2 Dips Bucket",
  varity: "Non veg",
  serving: " Serves 2",
  price: "519.05",
  description:
    "Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",
};

const CartCards = () => {
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
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
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
