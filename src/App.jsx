import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import StatusBar from "./components/statusbar";
import EventPage from "./pages/Event";
import Homepage from "./pages/Home";
import ReactPlayer from "react-player";
import Mypage from "./pages/Mypage";
import Ticket from "./pages/Ticket";

function App() {
  return (
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
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
