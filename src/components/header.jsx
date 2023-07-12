import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  MdOutlineAddCard,
  MdCreditCard,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const [isCardConnected, setIsCardConnected] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const connectAccount = async () => {
    if (isCardConnected) {
      setIsCardConnected(false);
      setConnectedAccount(null);
    } else {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setIsCardConnected(true);
        setConnectedAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const toggleCardConnection = () => {
    connectAccount();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearchInput = () => {
    setSearchValue("");
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header-menu">
        <FiMenu
          className={`header-icon ${isMenuOpen ? "active" : ""}`}
          size={28}
          strokeWidth={2}
          onClick={toggleMenu}
        />
      </div>
      <div className="header-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          {searchValue && (
            <div className="close-icon-container">
              <CgCloseR
                className="close-icon"
                size={15}
                onClick={clearSearchInput}
              />
            </div>
          )}
        </div>
        {isCardConnected ? (
          <div className="connected-account">
            <MdCreditCard
              className="header-icon card-icon"
              size={34}
              color="#007aff"
              onClick={toggleCardConnection}
              style={{ marginTop: "2.5px" }}
            />
          </div>
        ) : (
          <MdOutlineAddCard
            className="header-icon card-icon"
            size={34}
            onClick={toggleCardConnection}
          />
        )}
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <GrClose className="close-icon2" size={20} onClick={toggleMenu} />
          {loggedInUser ? (
            <span
              className="welcome-message"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
              }}>
              {`${loggedInUser} 님`}
            </span>
          ) : (
            <Link to="/login" className="login-link">
              로그인
              <Link to="/login" className="login-link-icon">
                <MdOutlineArrowForwardIos size={20} />
              </Link>
            </Link>
          )}
          <ul className="menu-items">
            <li className="menu-item">MY 티켓</li>
            <li className="menu-item">MY 잔고</li>
            <li className="menu-item">MY 정보</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
