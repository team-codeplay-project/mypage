import React, { useState } from "react";
import "../style/seatselect.css";

const SelectedSeatsCard = ({ seats, onConfirm }) => {
  return (
    <div className="selected-seats-card">
      <div className="selected-seats">
        <h2>선택한 좌석</h2>
        <ul>
          {seats.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
        <button onClick={onConfirm}>선택</button>
      </div>
    </div>
  );
};

const SeatSelectionPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleSeatSelection = (row, seat) => {
    const seatKey = `${row}-${seat}`;
    const isSelected = selectedSeats.includes(seatKey);

    if (isSelected) {
      const updatedSeats = selectedSeats.filter((seat) => seat !== seatKey);
      setSelectedSeats(updatedSeats);
    } else {
      const updatedSeats = [...selectedSeats, seatKey];
      setSelectedSeats(updatedSeats);
    }

    setTicketQuantity(selectedSeats.length + (isSelected ? -1 : 1));
  };

  const handleConfirmBooking = () => {
    console.log("Selected Seats:", selectedSeats);
    console.log("Ticket Quantity:", ticketQuantity);
    // 예매 확인 처리 함수
    // 선택된 좌석 및 티켓 수량 전송
  };

  const handleTicketQuantityChange = (event) => {
    setTicketQuantity(parseInt(event.target.value));
  };

  const renderSeatMap = () => {
    const seatMap = [
      { row: 1, seats: 13 },
      { row: 2, seats: 15 },
      { row: 3, seats: 15 },
      { row: 4, seats: 16 },
    ];

    return seatMap.map(({ row, seats }) => {
      const rowSeats = [];

      for (let seat = 1; seat <= seats; seat++) {
        const seatKey = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatKey);

        let blank = 0;
        if (seat % 3 === 0) {
          blank = 10;
        }

        rowSeats.push(
          <div
            key={seatKey}
            className={`seat ml-4 ${isSelected ? "selected" : ""}`}
            style={{ marginLeft: blank }}
            onClick={() => handleSeatSelection(row, seat)}></div>
        );
      }

      return (
        <div key={`row-${row}`} className="row">
          {rowSeats}
        </div>
      );
    });
  };

  return (
    <div className="combine-card">
      <div className="seat-selection-page">
        <div className="seat-container">
          <h2>테이블석</h2>
          <div className="seat-map">{renderSeatMap()}</div>
        </div>
        <div className="booking-container">
          <div className="ticket-quantity">
            <h2>티켓 수량</h2>
            <input
              type="number"
              min="1"
              value={ticketQuantity}
              onChange={handleTicketQuantityChange}
            />
          </div>
          {selectedSeats.length > 0 && (
            <SelectedSeatsCard
              seats={selectedSeats}
              onConfirm={handleConfirmBooking}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
