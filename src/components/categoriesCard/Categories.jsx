import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Categories = ({ url, categoryName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div className='categoriesCard' onClick={handleClick}>
      <div className='categoriesImg'>
        <img src={url} alt='categoryImg' className='categoryImg' />
      </div>
      <div className='menuText'>
        <h4>{categoryName}</h4>
      </div>
    </div>
  );
};

export default Categories;
