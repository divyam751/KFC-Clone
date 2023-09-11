import React from "react";
import "./Style.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
const SocialButtons = () => {
  return (
    <div className='MainButtonContainer'>
      <div className='googleButton'>
        <FcGoogle size={40} />
        <div className='textSection'>
          <h5>GET IT ON</h5>
          <h3>Google play</h3>
        </div>
      </div>
      <div className='googleButton'>
        <BsApple size={40} />
        <div className='textSection'>
          <h6>Download on the</h6>
          <h3>App Store</h3>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
