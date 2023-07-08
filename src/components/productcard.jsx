import React, { useEffect } from "react";
import "../style/rafflebox.css";

const ProductCard = ({ r_data }) => {
  
  return (
    <div className="product-box" >
      <div className="product-image"></div>
      <div className="product-info">
        <h3>{r_data.id} 번 래플</h3>
        <p>{r_data.URL} 블럭부터 추첨 </p>
      </div>
    </div>
  );
};

export default ProductCard;
