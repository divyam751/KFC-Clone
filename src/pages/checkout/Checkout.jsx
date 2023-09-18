import React, { useState } from "react";
import "./Style.css";
import linesLogo from "../../assets/mobileLogo.png";
import { useNavigate } from "react-router-dom";
import PayModal from "../../components/payModal/PayModal";
import { Button, Heading, Select } from "@chakra-ui/react";
import Payment from "../payment/Payment";

const initialUserData = {
  name: "",
  email: "",
  phoneNumber: "",
  deliveryAddress: "",
  // payment_id: "",
};

const Checkout = ({ purchase, setPurchase }) => {
  const initialPaymentDetails = {
    CardHolderName: "",
    CardNumber: "",
    CVV: "",
    ExpDate: "",
    payment_amt: purchase.totalAmount,
  };

  const [userData, setUserData] = useState(initialUserData);
  const [showPayBtn, setShowPayBtn] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(initialPaymentDetails);
  const [payType, setPayType] = useState("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
    setTrigger(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevUserData) => {
      console.log(prevUserData);
      return prevUserData;
    });

    console.log(paymentDetails);
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
              <div className='checkout-card-child'>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className='checkout-form checkout-payment-gateway-card'
                >
                  <Heading>Customer Details</Heading>
                  <input
                    type='text'
                    placeholder='Full Name*'
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    className='checkout-form-input'
                    required
                  />
                  <input
                    type='number'
                    placeholder='Phone Number*'
                    value={userData.phoneNumber}
                    onChange={(e) =>
                      setUserData({ ...userData, phoneNumber: e.target.value })
                    }
                    className='checkout-form-input'
                    required
                  />
                  <input
                    type='email'
                    placeholder='Email*'
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    className='checkout-form-input'
                    required
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
                    required
                  />
                </form>
                <PayModal
                  setPayType={setPayType}
                  payType={payType}
                  userData={userData}
                />
                {payType === "Card" ? (
                  <div className='checkout-payment-gateway-card'>
                    <Heading>Card Details</Heading>
                    <input
                      type='text'
                      placeholder='Name on Card*'
                      value={paymentDetails.CardHolderName}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          CardHolderName: e.target.value,
                        })
                      }
                      className='checkout-form-input'
                      required
                    />
                    <input
                      type='number'
                      placeholder='Card Number*'
                      value={paymentDetails.CardNumber}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          CardNumber: e.target.value,
                        })
                      }
                      className='checkout-form-input'
                    />
                    <div className='checkout-payment-gateway-card-c1'>
                      <input
                        type='text'
                        placeholder='MM / YY*'
                        value={paymentDetails.ExpDate}
                        maxLength={5}
                        onChange={(e) =>
                          setPaymentDetails({
                            ...paymentDetails,
                            ExpDate: e.target.value,
                          })
                        }
                        className='checkout-form-input-c1'
                      />
                      <input
                        type='password'
                        placeholder='CVV*'
                        maxLength={3}
                        value={paymentDetails.CVV}
                        onChange={(e) =>
                          setPaymentDetails({
                            ...paymentDetails,
                            CVV: e.target.value,
                          })
                        }
                        className='checkout-form-input-c1'
                      />
                    </div>
                  </div>
                ) : payType === "Netbanking" ? (
                  <div className='checkout-payment-gateway-card'>
                    <Heading>Bank Details</Heading>
                    <Select>
                      <option value=''>Select Your Bank</option>
                      <option value='HDFC Bank'>HDFC Bank</option>
                      <option value='State Bank of India'>
                        State Bank of India
                      </option>
                      <option value='ICICI Bank'>ICICI Bank</option>
                      <option value='Axis Bank'>Axis Bank</option>
                      <option value='Kotak Mahindra Bank'>
                        Kotak Mahindra Bank
                      </option>
                    </Select>

                    <input
                      type='text'
                      placeholder='User ID*'
                      className='checkout-form-input'
                    />
                    <input
                      type='password'
                      placeholder='Password*'
                      className='checkout-form-input'
                    />
                  </div>
                ) : payType === "Cash" ? (
                  <div className='checkout-payment-gateway-card'>
                    <Heading textAlign={"start"}>Payment</Heading>
                    <input
                      type='text'
                      placeholder='Cash*'
                      className='checkout-form-input'
                      value='Cash'
                      disabled='true'
                    />
                  </div>
                ) : payType === "UPI" ? (
                  <div className='checkout-payment-gateway-card'>
                    <Heading>UPI Detail</Heading>
                    <input
                      type='text'
                      placeholder='UPI ID*'
                      className='checkout-form-input'
                    />
                  </div>
                ) : (
                  ""
                )}

                {payType !== "" ? (
                  <Button
                    colorScheme='blue'
                    mr={3}
                    onClick={() => {
                      if (
                        (paymentDetails.CardHolderName === "" ||
                          paymentDetails.CVV === "" ||
                          paymentDetails.CardNumber === "" ||
                          paymentDetails.ExpDate === "") &&
                        payType === "Card"
                      ) {
                        alert("Invalid Details");
                        return;
                      }
                      setShowPayBtn("true");
                      console.log(paymentDetails);
                    }}
                    pl={10}
                    pr={10}
                    pt={4}
                    pb={4}
                    borderRadius={30}
                  >
                    Submit
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className='checkout-storedData-right'>
              <div className='checkout-amoutBox'>
                <Heading>
                  {purchase.quantity}{" "}
                  {purchase.quantity > 1 ? " ITEMS" : " ITEM"}
                </Heading>
                <div className='checkout-amountBox-offerBox'>
                  <div className='checkout-amountBox-offerBox-circle1'></div>
                  <span className='checkout-amountBox-offerBox-text'>
                    <span> Apply Offers & Deals</span>
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
                  onClick={openPaymentModal}
                >
                  <p>Continue to Payment </p> <p> ₹ {purchase.totalAmount}</p>
                </button>
                <Payment
                  isOpen={isPaymentModalOpen}
                  onClose={closePaymentModal}
                  trigger={trigger}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
