import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../style/home.css";

// import ticketImage1 from "../";
// import ticketImage2 from "../images/image2.jpg";
// import gameImage1 from "../images/game1.jpg";
// import gameImage2 from "../images/game2.jpg";

const handleButtonClick = (game) => {
  console.log("Clicked game:", game);
};

const Homepage = ({ account }) => {
  const cardTitle = "인기 경기";
  const tickets = [
    {
      title: "ticket1",
      description: "Description of ticket 1",
      image: "ticketImage1.png",
    },
    {
      title: "ticket 2",
      description: "Description of ticket 2",
      image: "image2.jpg",
    },
    {
      title: "Product 3",
      description: "Description of Product 3",
      image: "image3.jpg",
    },
    {
      title: "Product 4",
      description: "Description of Product 4",
      image: "image4.jpg",
    },
  ];

  const cardTitle2 = "예정 경기";
  const popularGames = [
    { title: "title", date: "7월 15일 토 2:00 PM", image: "game1.jpg" },
    { title: "title", date: "7월 15일 토 2:00 PM", image: "game2.jpg" },
    { title: "title", date: "7월 15일 토 2:00 PM", image: "game3.jpg" },
    { title: "title", date: "7월 15일 토 2:00 PM", image: "game4.jpg" },
  ];

  return (
    <>
      <div className="black-shape-cotainer">
        <div className="black-shape text-white ">{cardTitle}</div>
        <div className="home-gallery">
          <div className="ticket-gallery mt-5 mb-5">
            <div className="gallery-container">
              {tickets.map((ticket, index) => (
                <div className="ticket-box" key={index}>
                  <div
                    className="ticket-image"
                    style={{ backgroundImage: `url(${ticket.image})` }}></div>
                  <div className="ticket-info">
                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="black-shape-cotainer">
          <h1 className="black-shape text-white">{cardTitle2}</h1>
          <div className="icard-container">
            {popularGames.map((game, index) => (
              <div className="icard mt-1" key={index}>
                <div
                  className="icard-image-placeholder"
                  style={{ backgroundImage: `url(${game.image})` }}></div>
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
