import React from "react";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";

const StatusBar = () => {
  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    return formattedTime;
  };

  return (
    <div className="navigation-bar" id="navbar">
      <div className="time">{getCurrentTime()}</div>
      <div className="status-icons">
        <FaSignal className="icon" />
        <FaWifi className="icon" />
        <FaBatteryFull className="icon" />
      </div>
    </div>
  );
};

export default StatusBar;
