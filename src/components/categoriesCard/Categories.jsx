import React from "react";
import "./Style.css";

const Categories = ({ url, categoryName }) => {
  return (
    <div className='categoriesCard'>
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
