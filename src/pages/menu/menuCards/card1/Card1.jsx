import React from "react";
import "./Style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card1 = ({ card, setPurchase, purchase }) => {
  const handleClick = ({ card }) => {
    const localCart = JSON.parse(localStorage.getItem("cartData")) || [];
    const index = localCart.findIndex((item) => item.id === card.id);

    if (index >= 0) {
      localCart[index].quantity += 1;
    } else {
      card.quantity = 1;
      localCart.push(card);
    }
    localStorage.setItem("cartData", JSON.stringify(localCart));

    const updatedPurchase = { ...purchase };
    updatedPurchase.quantity += 1;
    updatedPurchase.subTotal = parseFloat(
      parseFloat(updatedPurchase.subTotal) + parseFloat(card.price),
    ).toFixed(2);
    updatedPurchase.totalAmount = parseFloat(
      updatedPurchase.subTotal * 1.05,
    ).toFixed(2);
    setPurchase(updatedPurchase);
    toast.success("🍗 Item added to cart!", {
      position: "top-center",
      autoClose: 2000,
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
        <p className='menu-cardTitle'>{card.title}</p>
        <div className='offer-cardCategory'>
          <img
            src='https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg'
            alt=''
          />
          <p>{card.varity}</p>
          <li> {card.serving}</li>
        </div>
        <p className='menu-cardPrice'>₹ {card.price}</p>
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
