import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import imgPlaceholder from "../../assets/placeholder.webp";

const Categories = ({ url, categoryName, loading }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="categoriesCard" onClick={handleClick}>
      {loading ? (
        <div className="categories-skeleton">
          <div className="categories-skeleton-img">
            <img src={imgPlaceholder} alt="Placeholder" />
          </div>
          <div className="categories-skeleton-text"></div>
        </div>
      ) : (
        <>
          <div className="categoriesImg">
            <img src={url} alt="categoryImg" className="categoryImg" />
          </div>
          <div className="menuText">
            <h4>{categoryName}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
