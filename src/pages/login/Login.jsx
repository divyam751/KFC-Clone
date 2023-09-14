import React, { useState } from "react";
import "./Style.css";
import logo from "../../assets/kfcLogo.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [mob, setMob] = useState("");
  const handleSubmit = () => {
    console.log(mob);
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
            type='text'
            placeholder='Phone Number*'
            value={mob}
            onChange={(e) => setMob(e.target.value)}
            className='login-input'
          />
          <div className='login-form-text'>
            By “logging in to KFC”, you agree to our
            <a href='/#'>Privacy Policy</a> and{" "}
            <a href='/#'>Terms & Conditions</a>
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
