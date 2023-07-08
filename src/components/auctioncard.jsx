import React, { useState } from "react";
import "../style/rafflebox.css";

const AuctionCard = ({ r_data }) => {
  const [auctionPrice, setAuctionPrice] = useState(0);

  const handleAuctionClick = () => {};

  const handlePriceChange = (event) => {
    setAuctionPrice(event.target.value);
  };

  return (
    <div className="product-box">
      <div className="product-image"></div>
      <div className="product-info">
        <h3>{r_data.id} 번 래플</h3>
        <p>{r_data.URL} 블럭부터 추첨 </p>
        <div className="auction-price-container">
          <input
            type="number"
            value={auctionPrice}
            onChange={handlePriceChange}
            placeholder="경매 가격 입력"
            className="auction-price-input"
          />
          <button className="auction-button" onClick={handleAuctionClick}>
            응모하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
