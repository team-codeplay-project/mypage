import React, { useState } from "react";
import "../style/mypage.css";

const Mypage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="tab3-container">
        <button
          className={`tab3 ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
          role="tab">
          사용전
        </button>
        <button
          className={`tab3 ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
          role="tab">
          사용완료
        </button>
        <button
          className={`tab3 ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
          role="tab">
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
                    <div className="nft-item">
                      <img src="nft1.png" alt="NFT 1" />
                      <div className="nft-overlay">
                        <span>경기 1</span>
                      </div>
                    </div>
                    <div className="nft-item">
                      <img src="nft2.png" alt="NFT 2" />
                      <div className="nft-overlay">
                        <span>경기 2</span>
                      </div>
                    </div>
                    <div className="nft-item">
                      <img src="nft3.png" alt="NFT 3" />
                      <div className="nft-overlay">
                        <span>경기 3</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <div className="nft-list">
                    <div className="nft-item">
                      <img src="nft4.png" alt="NFT 4" />
                      <div className="nft-overlay">
                        <span>경기 4</span>
                      </div>
                    </div>
                    <div className="nft-item">
                      <img src="nft5.png" alt="NFT 5" />
                      <div className="nft-overlay">
                        <span>경기 5</span>
                      </div>
                    </div>
                    <div className="nft-item">
                      <img src="nft6.png" alt="NFT 6" />
                      <div className="nft-overlay">
                        <span>경기 6</span>
                      </div>
                    </div>
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
