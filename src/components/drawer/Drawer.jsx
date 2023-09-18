import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/mobileLogo.png";
import "../../pages/navbar/Style.css";
import "./Style.css";
import cartBucketIcon from "../../assets/bucket_cart_icon.svg";
import accountIcon from "../../assets/Account_Icon.svg";
import menuBurger from "../../assets/menu-burger.png";
import offerImg from "../../assets/offer.png";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function CustomDrawer({ isOpen, onClose, purchase }) {
  const navigate = useNavigate();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size='full' placement='left'>
      <DrawerOverlay />
      <DrawerContent
        style={{
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <DrawerHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid gray",
          }}
        >
          <DrawerCloseButton
            style={{
              width: "40px",
              height: "40px",
              marginTop: "10px",
              backgroundColor: "white",
              border: "none",
            }}
          />
          <img
            src={logo}
            alt='logo'
            onClick={() => {
              navigate("/");
              onClose();
            }}
          />
          <div className='bucketCartItems'>
            <button className='headerIconButtons'>
              <div
                className='cartIcon'
                onClick={() => {
                  navigate("/cart");
                  onClose();
                }}
              >
                <div className='cartIconCount'>{purchase.quantity}</div>
              </div>
            </button>
          </div>
        </DrawerHeader>
        <DrawerBody width={"90%"} p={20}>
          <div className='mobileNavContainer'>
            <div className='title-Text'>LET'S GET COOKIN'</div>
            <div className='mobileNavAccount'>
              <button
                className='signInButton'
                onClick={() => {
                  navigate("/login");
                  onClose();
                }}
              >
                <img src={accountIcon} alt='account Icon' />
                Sign In / Sign Up <BsArrowRight />
              </button>
            </div>
            <div className='mobileNav'>
              <div
                className='mobile-component-link'
                onClick={() => {
                  navigate("/menu");
                  onClose();
                }}
              >
                Menu{" "}
              </div>
              <div className='mobileNavImages'>
                <img
                  src={menuBurger}
                  alt='menuBurger'
                  className='mobileNavImages'
                />
              </div>
            </div>
            <div className='mobileNav'>
              <div
                className='mobile-component-link'
                onClick={() => {
                  navigate("/offers");
                  onClose();
                }}
              >
                Deals
              </div>
              <div className='mobileNavImages'>
                <img
                  src={offerImg}
                  alt='offerImg'
                  className='mobileNavImages'
                />
              </div>
            </div>
            <div className='mobileFooterNav'>
              <p>Get Help</p>
              <p>Contact Us</p>
              <p>KFC Feedback</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default CustomDrawer;
