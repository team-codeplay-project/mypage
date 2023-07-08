import React, { useState } from "react";
import "../style/rafflebox.css";
// import ReactPlayer from "react-player";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const products = [
    {
      title: "사인볼",
      date: "July 10, 2023",
      price: "1 토큰",
    },
    {
      title: "사인볼",
      date: "July 10, 2023",
      price: "1 토큰",
    },
    {
      title: "사인볼",
      date: "July 10, 2023",
      price: "1 토큰",
    },
  ];

  let content;

  const items = [
    {
      id: 1,
      image: "product1.jpg",
      name: "아이템 1",
      description: "아이템 1에 대한 설명",
    },
    {
      id: 2,
      image: "product2.jpg",
      name: "아이템 2",
      description: "아이템 2에 대한 설명",
    },
    {
      id: 3,
      image: "product3.jpg",
      name: "아이템 3",
      description: "아이템 3에 대한 설명",
    },
    {
      id: 4,
      image: "product4.jpg",
      name: "아이템 4",
      description: "아이템 4에 대한 설명",
    },
  ];

  if (activeTab === 1 || activeTab === 2) {
    content = (
      <div className="product-container2">
        {products.map((product, index) => (
          <div className="product-box" key={index}>
            <div className="product-image"></div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.team}</p>
              <p> {product.date}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (activeTab === 3) {
    content = (
      <div className="item-list">
        {items.map((item) => (
          <div className="item-box" key={item.id}>
            <div className="item">
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              <div className="item-content">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="tab2-container shadow-md">
        <button
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
          role="tab">
          래플
        </button>
        <button
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
          role="tab">
          옥션
        </button>
        <button
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
          role="tab">
          확인하기
        </button>
      </div>

      <div className="product-gallery">{content}</div>
    </>
  );
};

export default EventPage;
