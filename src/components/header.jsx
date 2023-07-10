import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearchCircle } from "react-icons/io5";
import {
  MdOutlineAddCard,
  MdCreditCard,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCardConnected, setIsCardConnected] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

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

  //Login 페이지에서 사용자가 성공적으로 로그인하면, handleLoginButtonClick 함수에서 페이지 이동 통해 Header 컴포넌트의 loggedInUser 상태 업데이트.
  // handleLogin 함수를 Login 컴포넌트에서 받아와 사용, 로그인이 성공했을시 handleLogin 함수 호출
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
        {!isSearchOpen ? (
          <IoSearchCircle
            className="header-icon"
            size={34}
            onClick={toggleSearch}
          />
        ) : (
          <div className="search-container">
            <input type="text" placeholder="검색" />
            <div className="close-icon-container">
              <CgCloseR
                className="close-icon"
                size={15}
                onClick={toggleSearch}
              />
            </div>
          </div>
        )}
        {isCardConnected ? (
          <div className="connected-account">
            <MdCreditCard
              className="header-icon card-icon"
              size={30}
              color="#007aff"
              onClick={toggleCardConnection}
              style={{ marginTop: "2px" }}
            />
            <span
              className="account-digits"
              style={{
                fontSize: "10px",
                color: "#007aff",
                display: "block",
                marginTop: "-6px",
                marginLeft: "16px",
              }}>
              {connectedAccount?.slice(-4)}
            </span>
          </div>
        ) : (
          <MdOutlineAddCard
            className="header-icon card-icon"
            size={30}
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
