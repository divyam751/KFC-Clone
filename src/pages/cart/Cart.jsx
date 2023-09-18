import React, { useEffect, useState } from "react";
import "./Style.css";
import linesLogo from "../../assets/mobileLogo.png";
import { useNavigate } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";
import CartCards from "../../components/cartCards/CartCards";

const Cart = ({ purchase, setPurchase }) => {
  const [cartData, setCartData] = useState([]);

  const initialHope = JSON.parse(localStorage.getItem("hope")) || false;
  console.log(initialHope);
  const [hope, setHope] = useState(initialHope);

  const handleHope = () => {
    setHope(!hope);
    localStorage.setItem("hope", !hope);
    const updatedPurchase = { ...purchase };
    if (!hope) {
      updatedPurchase.totalAmount = parseFloat(
        parseFloat(updatedPurchase.totalAmount) + 5,
      ).toFixed(2);
    } else {
      updatedPurchase.totalAmount = parseFloat(
        updatedPurchase.totalAmount - 5,
      ).toFixed(2);
    }
    setPurchase(updatedPurchase);
  };

  const navigate = useNavigate();
  const gst = parseFloat(purchase.subTotal * 0.05).toFixed(2);

  const fetchData = () => {
    const localCart = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(localCart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='cart-Body'>
      <div className='cart-headerSection'>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        <button className='cart-headerSection-button'>Start Now</button>
      </div>
      {purchase.quantity < 1 ? (
        <div className='cart-cardsSection'>
          <div className='cart-headingSection'>
            <img src={linesLogo} alt='logo' className='cart-3lingLogo' />
            MY CART
          </div>

          <div className='cart-data-parent-Empty-box'>
            <div className='cart-data-parent-Empty-box-left'>
              <p>YOUR CART IS EMPTY. LET'S START AN ORDER!</p>
              <button
                className='cart-empty-Start-button'
                onClick={() => navigate("/menu")}
              >
                Start Order
              </button>
            </div>
            <div className='cart-data-parent-Empty-box-right'>
              <img
                src='https://online.kfc.co.in/static/media/empty_cart.32f17a45.png'
                alt='empty cart img'
                className='EmptyCartImage'
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='cart-parentContianer'>
          <div className='cart-cardsSection2'>
            <div className='cart-headingSection2'>
              <img src={linesLogo} alt='logo' className='cart-3lingLogo' />
              MY CART
            </div>
            <div className='cart-storedData'>
              <div className='cart-storedData-left'>
                {cartData.map((card, index) => {
                  return (
                    <CartCards
                      card={card}
                      key={index}
                      purchase={purchase}
                      setPurchase={setPurchase}
                      cartData={cartData}
                      setCartData={setCartData}
                    />
                  );
                })}
              </div>
              <div className='cart-storedData-right'>
                <div className='cart-amoutBox'>
                  <Heading>
                    {purchase.quantity}{" "}
                    {purchase.quantity > 1 ? " ITEMS" : " ITEM"}
                  </Heading>
                  <div className='cart-amountBox-offerBox'>
                    <div className='cart-amountBox-offerBox-circle1'></div>
                    <div className='cart-amountBox-offerBox-text'>
                      <p>Apply Offers & Deals</p>
                    </div>
                    <button
                      className='cart-amountBox-button'
                      onClick={() => navigate("/offers")}
                    >
                      View All
                    </button>
                    <div className='cart-amountBox-offerBox-circle2'></div>
                  </div>
                  <div className='cart-amountBox-total'>
                    <p>Subtotal</p>
                    <p>₹ {purchase.subTotal}</p>
                  </div>
                  <div className='cart-amountBox-gst'>
                    <p>GST</p>
                    <p>₹ {gst}</p>
                  </div>
                  {hope ? (
                    <div className='cart-amountBox-addHope'>
                      <p>Add Hope</p>
                      <p>₹ 5.00</p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className='cart-amountBox-line'></div>
                  <div className='cart-amountBox-hopeBox'>
                    <input
                      type='checkbox'
                      onChange={() => {
                        handleHope();
                      }}
                      checked={hope}
                    />
                    <Flex direction={"column"} fontSize={10}>
                      <p> Donate ₹5.00 Tick to Add Hope.</p>
                      <p> Our goal is to feed 20 million people by 2023.</p>
                    </Flex>
                    <img
                      src='https://causemarketing.com/wp-content/uploads/2016/12/add-hope-logo.png'
                      alt='hope img'
                      className='addHopeImage'
                    />
                  </div>
                  <button
                    className='cart-amountBox-hopeBox-checkoutBtn'
                    onClick={() => navigate("/checkout")}
                  >
                    <p>Checkout </p> <p> ₹ {purchase.totalAmount}</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
