import React, {useState, useEffect} from "react";
import "../style/mypage.css";
import axios from "axios";

const Mypage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [nfts, setNfts] = useState();
  const [raffles, setRaffles] = useState();

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const getNft = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/nft/`,
      {
        headers: {
          "ngrok-skip-browser-warning": "any",
        },
      }
    );
    console.log(response);
    console.log(response.data[1].createdAt);
    setNfts(response.data);
  };

  useEffect(() => {
    getNft();
  }, []);

  const getRaffle = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/nft/2`,
        {
          headers: {
            "ngrok-skip-browser-warning": "any",
          },
        }
      );
      console.log(response);
      console.log(response.data.createdAt);
      setRaffles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRaffle();
  }, []);

  return (
    <>
      <div className="tab3-container">
        <button
          className={`tab3 ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
          role="tab"
        >
          사용전
        </button>
        <button
          className={`tab3 ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
          role="tab"
        >
          사용완료
        </button>
        <button
          className={`tab3 ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
          role="tab"
        >
          내 토큰
        </button>
      </div>
      <div>
        <div className="card-container">
          <div className="card">
            <div className="card-content">
              {activeTab === 1 && (
                <div>
                  <div className="nft-list">
                    {nfts?.map((v, i) => {
                      if (v.isUsed) return;

                      return (
                        <div key={i} className="nft-item">
                          <img src="nft1.png" alt="NFT 1" />
                          <div className="nft-overlay">
                            <span>경기 {v.id}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <div className="nft-list">
                    {nfts?.map((v, i) => {
                      if (!v.isUsed) return;

                      return (
                        <div key={i} className="nft-item">
                          <img src="nft4.png" alt="NFT 4" />
                          <div className="nft-overlay">
                            <span>경기 {v.id}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <h2>보유 토큰</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
