import React, { useState } from "react";
import "./Style.css";
import linesLogo from "../../assets/mobileLogo.png";
import { useNavigate } from "react-router-dom";
import PayModal from "../../components/payModal/PayModal";
import { Heading } from "@chakra-ui/react";

const initialUserData = {
  name: "",
  email: "",
  phoneNumber: "",
  deliveryAddress: "",
  payment_id: "",
};

const Checkout = ({ purchase, setPurchase }) => {
  const [userData, setUserData] = useState(initialUserData);
  const [showPayBtn, setShowPayBtn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const navigate = useNavigate();
  const gst = parseFloat(purchase.subTotal * 0.05).toFixed(2);

  return (
    <div className='checkout-Body'>
      <div className='checkout-headerSection'>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        <button className='checkout-headerSection-button'>Start Now</button>
      </div>
      <div className='checkout-parentContianer'>
        <div className='checkout-cardsSection2'>
          <div className='checkout-headingSection2'>
            <img src={linesLogo} alt='logo' className='checkout-3lingLogo' />
            CHECKOUT
          </div>
          <div className='checkout-storedData'>
            <div className='checkout-storedData-left'>
              {/* LEFT CARDS */}
              <form onSubmit={(e) => handleSubmit(e)} className='checkout-form'>
                <div className='checkout-card-child'>
                  <Heading>Customer Details</Heading>
                  <input
                    type='text'
                    placeholder='Full Name*'
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    className='checkout-form-input'
                  />
                  <input
                    type='number'
                    placeholder='Phone Number*'
                    value={userData.phoneNumber}
                    onChange={(e) =>
                      setUserData({ ...userData, phoneNumber: e.target.value })
                    }
                    className='checkout-form-input'
                  />
                  <input
                    type='email'
                    placeholder='Email*'
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    className='checkout-form-input'
                  />
                  <textarea
                    placeholder='Delivery Address*'
                    value={userData.deliveryAddress}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        deliveryAddress: e.target.value,
                      })
                    }
                    className='checkout-form-input'
                  />
                  <PayModal />
                </div>
              </form>
            </div>
            <div className='checkout-storedData-right'>
              <div className='checkout-amoutBox'>
                <h2>
                  {purchase.quantity}{" "}
                  {purchase.quantity > 1 ? " ITEMS" : " ITEM"}
                </h2>
                <div className='checkout-amountBox-offerBox'>
                  <div className='checkout-amountBox-offerBox-circle1'></div>
                  <span className='checkout-amountBox-offerBox-text'>
                    {" "}
                    <img
                      src='https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg'
                      alt=''
                    />{" "}
                    Apply Offers & Deals
                  </span>
                  <button
                    className='checkout-amountBox-button'
                    onClick={() => navigate("/offers")}
                  >
                    View All
                  </button>
                  <div className='checkout-amountBox-offerBox-circle2'></div>
                </div>
                <div className='checkout-amountBox-total'>
                  <p>Subtotal</p>
                  <p>₹ {purchase.subTotal}</p>
                </div>
                <div className='checkout-amountBox-gst'>
                  <p>GST</p>
                  <p>₹ {gst}</p>
                </div>

                <div className='checkout-amountBox-line'></div>
                <button
                  className={
                    showPayBtn
                      ? "checkout-amountBox-hopeBox-checkoutBtn"
                      : "checkout-amountBox-hopeBox-checkoutBtn-disabled"
                  }
                  disabled={!showPayBtn}
                  onClick={() => alert("clicked")}
                >
                  <p>Continue to Payment </p> <p> ₹ {purchase.totalAmount}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
