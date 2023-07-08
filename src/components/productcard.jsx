import React from "react";
import "../style/rafflebox.css";

const ProductCard = ({ product, index }) => {
  return (
    <div className="product-box" key={index}>
      <div className="product-image"></div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.team}</p>
        <p> {product.date}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
