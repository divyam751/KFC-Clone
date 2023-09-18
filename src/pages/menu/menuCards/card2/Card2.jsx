import React from "react";
import "./Style.css";
import { Flex } from "@chakra-ui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cardPointN from "../../../../assets/NonVeg.svg";
import cardPointV from "../../../../assets/Veg.svg";

const Card2 = ({ card, setPurchase, purchase }) => {
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
    <div className='menu-card2-parent'>
      <div className='menu-card2-child1'>
        <img
          src={card.url}
          alt={card.title}
          className='menu-card2-child1-img'
        />
        <div className='menu-card2-child1-desc'>
          <div className='menu-card2-child1-title'> {card.title} </div>
          <Flex gap={4} pb={2}>
            <img
              src={card.varity === "Non veg" ? cardPointN : cardPointV}
              alt={card.varity}
              className='menu-card2-child1-point'
            />
            <p>{card.varity}</p>
            {card.serving ? <li>{card.serving}</li> : ""}
          </Flex>
          <Flex gap={4} pb={2}>
            {card.oldPrice ? (
              <>
                <h4 className='menu-card2-child1-oldPrice'>{card.oldPrice}</h4>
                <h4 className='menu-card2-child1-currentPrice'>
                  ₹ {card.price}
                </h4>
                `
              </>
            ) : (
              <h4 className='menu-card2-child1-currentPrice'>₹ {card.price}</h4>
            )}
          </Flex>
          <div className='card2-desc'>{card.description}</div>
        </div>
      </div>
      <div className='menu-card2-child2'>
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
  );
};

export default Card2;
