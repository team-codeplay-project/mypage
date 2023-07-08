import React, { useState } from "react";
import "../style/booking.css";
import Dropdown from "react-dropdown-select";
import { BiBaseball } from "react-icons/bi";
import { LuArmchair } from "react-icons/lu";

const TicketBooking = () => {
  const tickets = ["티켓"];
  const seatSections = [
    {
      value: "구역",
      label: "구역",
      options: [
        { value: "켈리존 (VIP석)", label: "켈리존 (VIP석)" },
        { value: "1루 테이블석", label: "1루 테이블석" },
        { value: "1루 익사이팅존", label: "1루 익사이팅존" },
        { value: "1루 블루석", label: "1루 블루석" },
        { value: "1루 FILA 존", label: "1루 FILA 존" },
        { value: "1루 레드석", label: "1루 레드석" },
        { value: "1루 네이비석", label: "1루 네이비석" },
        { value: "1루 와야지정석", label: "1루 와야지정석" },
      ],
    },
    // {
    //   value: "휠체어석",
    //   label: "휠체어석",
    //   options: [
    //     { value: "중앙 네이비석", label: "중앙 네이비석" },
    //     {
    //       value: "1루 레드 휠체어석 (동반 가능)",
    //       label: "1루 레드 휠체어석 (동반 가능)",
    //     },
    //     {
    //       value: "1루 레드 휠체어석 (동반 불가)",
    //       label: "1루 레드 휠체어석 (동반 불가)",
    //     },
    //     { value: "3루 블루 휠체어석", label: "3루 블루 휠체어석" },
    //     {
    //       value: "3루 레드 휠체어석 (동반 가능)",
    //       label: "3루 레드 휠체어석 (동반 가능)",
    //     },
    //     {
    //       value: "3루 레드 휠체어석 (동반 불가)",
    //       label: "3루 레드 휠체어석 (동반 불가)",
    //     },
    //   ],
    // },
    // {
    //   value: "시야방해석",
    //   label: "시야방해석",
    //   options: [
    //     { value: "1루 블루석_시야방해", label: "1루 블루석_시야방해" },
    //     { value: "1루 FILA 존_시야방해", label: "1루 FILA 존_시야방해" },
    //     { value: "1루 레드석_시야방해", label: "1루 레드석_시야방해" },
    //     { value: "1루 네이비석_시야방해", label: "1루 네이비석_시야방해" },
    //     { value: "1루 와야지정석_시야방해", label: "1루 와야지정석_시야방해" },
    //     { value: "3루 블루석_시야방해", label: "3루 블루석_시야방해" },
    //     { value: "3루 오렌지석_시야방해", label: "3루 오렌지석_시야방해" },
    //     { value: "3루 레드석_시야방해", label: "3루 레드석_시야방해" },
    //     { value: "3루 네이비석_시야방해", label: "3루 네이비석_시야방해" },
    //     { value: "3루 와야지정석_시야방해", label: "3루 와야지정석_시야방해" },
    //   ],
    // },
  ];

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleSectionChange = (option) => {
    setSelectedSection(option[0].value);
    setSelectedSeat(null);
  };

  const handleBooking = () => {
    if (selectedTicket && selectedSeat) {
      console.log("Booking Confirmed!");
    } else {
      console.log("Please select all options!");
    }
  };

  return (
    <>
      <div className="tab3-container">
        <button
          className={`tab3 ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
          role="tab">
          티켓 예매
        </button>
      </div>

      <div className="ticket-booking">
        {activeTab === 1 && (
          <>
            <div className="section-row">
              <div className="section">
                <h2 className="section-title">
                  <BiBaseball className="section-icon" />
                  경기
                </h2>
                <div className="ticket-list">
                  {tickets.map((ticket) => (
                    <div
                      key={ticket}
                      className={`ticket-item ${
                        selectedTicket === ticket ? "selected" : ""
                      }`}
                      onClick={() => handleTicketClick(ticket)}>
                      <p>{ticket}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="section">
              <h2 className="section-title">
                <LuArmchair className="section-icon" />
                구역
              </h2>
              <div className="seat-select">
                <Dropdown
                  options={seatSections}
                  value={selectedSection}
                  onChange={handleSectionChange}
                  placeholder="Select a section"
                  className="dropdown-select"
                  menuPlacement="auto"
                />
              </div>
            </div>

            {selectedSection && (
              <div className="section">
                <h2 className="section-title">
                  <LuArmchair className="section-icon" />
                  좌석
                </h2>
                <div className="seat-select">
                  <Dropdown
                    options={
                      seatSections.find(
                        (section) => section.value === selectedSection
                      )?.options || []
                    }
                    value={selectedSeat}
                    onChange={(option) => setSelectedSeat(option[0].value)}
                    placeholder="Select a seat"
                    className="dropdown-select"
                    menuPlacement="auto"
                  />
                </div>
              </div>
            )}

            <button className="book-button" onClick={handleBooking}>
              예매하기
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default TicketBooking;
