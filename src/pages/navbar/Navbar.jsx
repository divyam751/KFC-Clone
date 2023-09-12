import React, { useEffect, useState } from "react";

import "./Style.css";
import locationImg from "../../assets/location.svg";
import logo from "../../assets/kfcLogo.svg";
import accountIcon from "../../assets/Account_Icon.svg";
import cartBucketIcon from "../../assets/bucket_cart_icon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setBurger, burger, totalAmount, cartIconCount }) => {
  const navigate = useNavigate();

  const [className, setClassName] = useState("");
  const headerFunction = () => {
    if (window.location.pathname !== `/`) {
      setClassName("hidden");
    } else {
      setClassName("headerSection");
    }
  };
  useEffect(() => {
    headerFunction();
  });

  return (
    <div className='NavMainContainer'>
      <div className={className}>
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
        <span className='headerLogo' onClick={() => navigate("/")}>
          <img src={logo} alt='Logo' />
        </span>
        <span className='navItemLeft'>
          <Link to='/menu' className='navItems-component-Menu'>
            Menu
          </Link>
          <Link to='/offers' className='navItems-component-Deals'>
            Deals
          </Link>
        </span>
        <div className='navItemRight'>
          <div className='accountItems'>
            <button className='signInButton' onClick={() => navigate("/login")}>
              <img src={accountIcon} alt='account Icon' />
              Sign In
            </button>
          </div>
          <div className='bucketCartItems'>
            <button
              className='headerIconButtons'
              onClick={() => navigate("/cart")}
            >
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
