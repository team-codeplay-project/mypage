import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../style/ticketbox1.css";

const handleButtonClick = (game) => {
  console.log("Clicked game:", game);
};

const Homepage = ({ account }) => {
  const cardTitle = "인기경기";
  const tickets = [
    { title: "ticket1", description: "Description of ticket 1" },
    { title: "ticket 2", description: "Description of ticket 2" },
    { title: "Product 3", description: "Description of Product 3" },
    { title: "Product 4", description: "Description of Product 4" },
  ];

  const cardTitle2 = "예정경기";
  const popularGames = [
    { title: "title", date: "7월 15일 토 2:00 PM" },
    { title: "title", date: "7월 15일 토 2:00 PM" },
    { title: "title", date: "7월 15일 토 2:00 PM" },
    { title: "title", date: "7월 15일 토 2:00 PM" },
  ];

  return (
    <>
      <div className="home-gallery">
        <div className="black-shape text-white ">{cardTitle}</div>
        <div className="ticket-gallery mt-5 mb-5">
          <div className="gallery-container">
            {tickets.map((ticket, index) => (
              <div className="ticket-box" key={index}>
                <div className="ticket-image"></div>
                <div className="ticket-info">
                  <h3>{ticket.title}</h3>
                  <p>{ticket.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 ">
          <h1 className="black-shape text-white">{cardTitle2}</h1>
          <div className="icard-container mt-5">
            {popularGames.map((game, index) => (
              <div className="icard mt-1" key={index}>
                <div className="icard-image-placeholder"></div>
                <div className="icard-content">
                  <h5 className="icard-title">{game.title}</h5>
                  <small className="icard-updated">{game.date}</small>
                  <div className="icard-button-container">
                    <div className="icard-button-wrapper">
                      <button
                        className="icard-button"
                        onClick={() => handleButtonClick(game)}>
                        <IoIosArrowForward className="icard-button-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
