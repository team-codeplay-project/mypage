import React, { useState } from "react";
import "../style.login.css";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleLogin = () => {
    // 닉네임과 휴대폰 번호를 가져와서 로그인 처리하는 코드 필요
  };

  return (
    <div className="login-container">
      <h1 className="title">로그인</h1>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={handleNicknameChange}
        className="input-field"
      />
      <input
        type="tel"
        placeholder="휴대폰 번호"
        value={phone}
        onChange={handlePhoneChange}
        className="input-field"
      />
      <button className="login-button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;
