import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  MdOutlineAddCard,
  MdCreditCard,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Header = () => {
  
  const { account , setAccount , mynft , mytoken } = useContext(AppContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // await 
      setAccount(accounts[0]);
      chkchainID() ;
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = async () => {
    try {
      setAccount();
    } catch (error) {
      console.error(error);
    }
  };

  const chkchainID = async () => {
    try {
      const id = await window.ethereum.request({
        method: "eth_chainId",
        params: [],
      });

      if (id !== 0x5) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: "0x5",
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
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
        {account ? (
          <div className="connected-account">
            <MdCreditCard
              className="header-icon card-icon"
              size={40}
              color="#007aff"
              onClick={disconnect}
              style={{ marginTop: "2.5px" }}
            />
          </div>
        ) : (
          <div>
          <MdOutlineAddCard
            className="header-icon card-icon"
            size={40}
            onClick={connect}
          />
          </div>
          
        )}
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <GrClose className="close-icon2" size={20} onClick={toggleMenu} />
          {account ? (
            <div>
            <span
              className="welcome-message"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
              }}>
              {`${loggedInUser} 님`}
            </span>
            <ul className="menu-items">
              { mynft === -1 ? ( <li>loading~~</li> )
              : (
                <div>
              <li className="menu-item">티켓 수 : {mynft} : 토큰 수 : {mytoken}</li>
              <li className="menu-item">MY 티켓</li>
              <li className="menu-item">MY 정보</li>
              </div>
              )
              }
            </ul>
            </div>
          ) : (
            <div className="login-link" onClick={connect}>로그인</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
