import React from "react";

import "./Style.css";
import locationImg from "../../assets/location.svg";
import logo from "../../assets/kfcLogo.svg";
import accountIcon from "../../assets/Account_Icon.svg";
import cartBucketIcon from "../../assets/bucket_cart_icon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ setBurger, burger, totalAmount, cartIconCount }) => {
  return (
    <div className='NavMainContainer'>
      <div className='headerSection'>
        <div className='setLocation'>
          <img src={locationImg} alt='location' />
          <div className='setLocationText'>
            Allow location access for local store menu and promos
          </div>
          <button className='setLocationButton'>Set Location</button>
        </div>
      </div>
      <div className='nav'>
        <div
          className='hamburger'
          onClick={() => {
            setBurger(!burger);
          }}
        >
          {burger ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>
        <span className='headerLogo'>
          <img src={logo} alt='Logo' />
        </span>
        <span className='navItemLeft'>
          <a href='/menu' className='navItems-component-Menu'>
            Menu
          </a>
          <a href='/offers' className='navItems-component-Deals'>
            Deals
          </a>
        </span>
        <div className='navItemRight'>
          <div className='accountItems'>
            <button className='signInButton'>
              <img src={accountIcon} alt='account Icon' />
              Sign In
            </button>
          </div>
          <div className='bucketCartItems'>
            <button className='headerIconButtons'>
              <span className='headerPrice'>₹ {totalAmount} </span>
              <div className='cartIcon'>
                <img src={cartBucketIcon} alt='bucketIcon' />
                <div className='cartIconCount'>{cartIconCount}</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
