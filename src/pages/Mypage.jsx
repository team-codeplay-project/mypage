import React, { useState } from "react";
import "../style/mypage.css";

const Mypage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="flex bg-white shadow-md overflow-hidden">
        <button
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
          role="tab">
          사용전
        </button>
        <button
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
          role="tab">
          사용완료
        </button>
        <button
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
          role="tab">
          내 토큰
        </button>
      </div>
      <div className="p-4 mt-2">
        <div className="relative bg-white rounded-lg shadow-md mt-4">
          <div className="p-4">
            {activeTab === 1 && <div>1번 내용</div>}
            {activeTab === 2 && <div>2번 내용</div>}
            {activeTab === 3 && <div>3번 내용</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
