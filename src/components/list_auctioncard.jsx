import React from "react";
import "../style/rafflebox.css";

const AuctionCard = ({ r_data }) => {

  return (
    <div className="product-box">
    <div className="product-image"></div>
    <div className="product-info">
      <h3> {r_data.name} </h3>
      <p> 이미지 주소 {r_data.URL} </p>
    </div>
  </div>
  );
};

export default AuctionCard;
