import React from "react";
import { createContext, useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import StatusBar from "./components/statusbar";
import EventPage from "./pages/Event";
import Homepage from "./pages/Home";
// import ReactPlayer from "react-player";
import Mypage from "./pages/Mypage";
import Ticket from "./pages/Ticket";
import AdminPage from "./pages/Admin";
import { n_abi, n_addr, t_abi, t_addr } from "./raffletest.config";
import Web3 from "web3";
import LoginPage from "./components/login";

export const AppContext = createContext();

const admin = "0x1f6D70acBd7B09096717fd5625783F78AF685A5a";
function App() {
  const [account, setAccount] = useState("");
  const [logIn, setLogIn] = useState(false);

  const web3 = new Web3(window.ethereum);
  const token_c = new web3.eth.Contract(t_abi, t_addr);
  const nft_c = new web3.eth.Contract(n_abi, n_addr);

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      setLogIn(true);
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

  useEffect(() => {
    connect();
    chkchainID();
  }, []);

  return (
    <AppContext.Provider
      value={{ account, connect, chkchainID, logIn, web3, token_c, nft_c }}>
      <BrowserRouter>
        <div>
          {/* <div className="full-background">
          <ReactPlayer
            url="/Videos/Noise.mp4"
            playing={true}
            loop={true}
            muted={true}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div> */}
          <div className="iphone-container">
            <StatusBar />
            <Header />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/Ticket" element={<Ticket />} />
              <Route path="/Event" element={<EventPage />} />
              <Route path="/Mypage" element={<Mypage />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/AdminPage" element={<AdminPage admin={admin} />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
