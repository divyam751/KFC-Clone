import React, { useState } from "react";
import "./Style.css";
import linesLogo from "../../assets/mobileLogo.png";
import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import CartCards from "../../components/cartCards/CartCards";

const Cart = ({ cartIconCount, totalAmount }) => {
  const [cartData, setCartData] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [hope, setHope] = useState(false);
  const navigate = useNavigate();
  const gst = parseFloat(totalAmount * 0.05).toFixed(2);
  const hopePrice = 5;
  const initialCheckoutPrice = parseFloat(
    parseFloat(totalAmount) + parseFloat(gst),
  ).toFixed(2);
  const [checkoutPrice, setCheckoutPrice] = useState(initialCheckoutPrice);

  return (
    <div className='cart-Body'>
      <div className='cart-headerSection'>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        <button className='cart-headerSection-button'>Start Now</button>
      </div>
      {empty ? (
        <div className='cart-cardsSection'>
          <div className='cart-headingSection'>
            <img src={linesLogo} alt='logo' className='cart-3lingLogo' />
            MY CART
          </div>

          <div className='cart-data-parent-Empty-box'>
            <div className='cart-data-parent-Empty-box-left'>
              YOUR CART IS EMPTY. LET'S START AN ORDER!
              <button className='cart-empty-Start-button'>Start Order</button>
            </div>
            <div className='cart-data-parent-Empty-box-right'>
              <img
                src='https://online.kfc.co.in/static/media/empty_cart.32f17a45.png'
                alt=''
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
                <CartCards />
                <CartCards />
              </div>
              <div className='cart-storedData-right'>
                <div className='cart-amoutBox'>
                  <h2>
                    {cartIconCount} {cartIconCount > 1 ? " ITEMS" : " ITEM"}
                  </h2>
                  <div className='cart-amountBox-offerBox'>
                    <div className='cart-amountBox-offerBox-circle1'></div>
                    <span className='cart-amountBox-offerBox-text'>
                      {" "}
                      <img
                        src='https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg'
                        alt=''
                      />{" "}
                      Apply Offers & Deals
                    </span>
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
                    <p>₹ {totalAmount}</p>
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
                        setHope(!hope);
                        hope
                          ? setCheckoutPrice(
                              parseFloat(
                                parseFloat(checkoutPrice) -
                                  parseFloat(hopePrice),
                              ).toFixed(2),
                            )
                          : setCheckoutPrice(
                              parseFloat(
                                parseFloat(checkoutPrice) +
                                  parseFloat(hopePrice),
                              ).toFixed(2),
                            );
                      }}
                    />
                    <Flex direction={"column"}>
                      <p> Donate ₹5.00 Tick to Add Hope.</p>
                      <p> Our goal is to feed 20 million people by 2023.</p>
                    </Flex>
                    <img
                      src='https://causemarketing.com/wp-content/uploads/2016/12/add-hope-logo.png'
                      alt='hope img'
                      className='addHopeImage'
                    />
                  </div>
                  <button className='cart-amountBox-hopeBox-checkoutBtn'>
                    <p>Checkout </p> <p> ₹ {checkoutPrice}</p>
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
