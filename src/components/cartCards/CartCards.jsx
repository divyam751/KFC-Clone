import React, { useState } from "react";
import "./Style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartCards = ({ card, purchase, setPurchase, cartData, setCartData }) => {
  // const [itemCount, setItemCount] = useState(1);

  const handleRemove = (id) => {
    const updatedCartData = cartData.filter((item) => item.id !== id);

    const index = cartData.findIndex((item) => item.id === id);

    const updatedPurchase = { ...purchase };
    updatedPurchase.quantity =
      updatedPurchase.quantity - cartData[index].quantity;
    updatedPurchase.subTotal = parseFloat(
      parseFloat(updatedPurchase.subTotal) -
        parseFloat(card.price * card.quantity),
    ).toFixed(2);

    updatedPurchase.totalAmount = parseFloat(
      updatedPurchase.subTotal * 1.05,
    ).toFixed(2);

    setCartData(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setPurchase(updatedPurchase);
  };
  const handleDec = (id) => {
    // setItemCount(itemCount - 1);
    const updatedPurchase = { ...purchase };
    updatedPurchase.quantity -= 1;
    updatedPurchase.subTotal = parseFloat(
      parseFloat(updatedPurchase.subTotal) - parseFloat(card.price),
    ).toFixed(2);
    updatedPurchase.totalAmount = parseFloat(
      updatedPurchase.subTotal * 1.05,
    ).toFixed(2);

    setPurchase(updatedPurchase);

    const index = cartData.findIndex((item) => item.id === id);
    cartData[index].quantity -= 1;

    localStorage.setItem("cartData", JSON.stringify(cartData));
  };
  const handleInc = (id) => {
    // setItemCount(itemCount + 1);
    const updatedPurchase = { ...purchase };
    updatedPurchase.quantity += 1;
    updatedPurchase.subTotal = parseFloat(
      parseFloat(updatedPurchase.subTotal) + parseFloat(card.price),
    ).toFixed(2);
    updatedPurchase.totalAmount = parseFloat(
      updatedPurchase.subTotal * 1.05,
    ).toFixed(2);

    setPurchase(updatedPurchase);
    const index = cartData.findIndex((item) => item.id === id);
    cartData[index].quantity += 1;

    localStorage.setItem("cartData", JSON.stringify(cartData));

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
            <p
              className='cart-cards-right-child1-remove'
              onClick={() => handleRemove(card.id)}
            >
              Remove
            </p>
          </div>
          <div className='cart-cards-right-child2'>
            <button
              onClick={() => handleDec(card.id)}
              disabled={card.quantity < 2}
              className='cart-cards-right-child2-buttons'
            >
              -
            </button>
            <h3> {card.quantity} </h3>
            <button
              onClick={() => handleInc(card.id)}
              className='cart-cards-right-child2-buttons'
            >
              +
            </button>
            <div className='cart-cards-right-child2-itemPrice'>
              <p>₹ {parseFloat(card.price * card.quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
