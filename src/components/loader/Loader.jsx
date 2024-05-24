import React from "react";
import "./Style.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <h1>
        Our backend deployed on a free Render account, so thanks for your
        patience during initial loading!
      </h1>
      <div className="custom-loader"> </div>
    </div>
  );
};

export default Loader;
