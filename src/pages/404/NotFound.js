import React from "react";
import "./Style.css";
import errorImg from "./404.webp";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <img src={errorImg} alt="Lost Chicken" className="errorImg" />

      <h1>Oops! This chicken has crossed the road and got lost!</h1>
      <p>
        Looks like the page you're looking for is clucking nowhere to be found.
        Don't worry, Colonel Sanders is just as surprised!
      </p>
      <button className="error-goHome" onClick={() => navigate("/")}>
        Homeward Bound! Take me back to the finger lickin' good homepage!
      </button>
    </div>
  );
};

export default NotFound;
