import React, { useState } from "react";
import "./Style.css";
import logo from "../../assets/kfcLogo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [mob, setMob] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mob);
    toast.success("Verification Successful!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/menu");
    }, 3000);
  };

  const navigate = useNavigate();
  return (
    <div className='login-parent'>
      <div className='login-parent-Box'>
        <div className='login-child1'>
          <h2>Sign In / Sign up </h2>
          <img src={logo} alt='logo' className='login-logo' />
          <div className='login-header-text'>
            LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!
          </div>
        </div>

        <form onSubmit={handleSubmit} className='login-form'>
          <input
            type='number'
            placeholder='Phone Number*'
            value={mob}
            onChange={(e) => setMob(e.target.value)}
            className='login-input'
            maxLength={10}
            required
          />
          <div className='login-form-text'>
            By “logging in to KFC”, you agree to our
            <a href='/#' className='Login-links'>
              {" "}
              <u>Privacy Policy</u>
            </a>{" "}
            and{" "}
            <a href='/#' className='Login-links'>
              <u>Terms & Conditions</u>
            </a>
          </div>
          <div className='login-submit-btnBox'>
            <button type='submit' className='login-submit-btn'>
              Send me a code
            </button>
          </div>
        </form>
        <div className='login-child2'>
          <div className='login-or-section'>
            <div className='orSectionLine'></div>
            <p>or</p>
            <div className='orSectionLine'></div>
          </div>
          <button onClick={() => navigate("/")} className='login-guest-button'>
            Skip, Continue As Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
