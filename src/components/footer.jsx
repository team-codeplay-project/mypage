import React, { useState, useEffect } from "react";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveTab(currentPath);
  }, [location]);

  const TabItem = ({ icon: Icon, label, tab }) => (
    <Link to={tab} className={`tab-item ${activeTab === tab ? "active" : ""}`}>
      <Icon size={24} />
      <span className="tab-label">{label}</span>
    </Link>
  );

  return (
    <div className="footer-container">
      <TabItem icon={RiHomeLine} label="홈" tab="/" />
      <TabItem icon={HiOutlineTicket} label="티켓" tab="/ticket" />
      <TabItem icon={HiOutlineHeart} label="이벤트" tab="/event" />
      <TabItem icon={FiUserPlus} label="마이" tab="/mypage" />
      <div className="home-indicator"></div>
    </div>
  );
};

export default Footer;
