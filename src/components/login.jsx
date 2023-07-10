import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style.login.css";

const Login = ({ handleLogin }) => {
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleLoginButtonClick = () => {
    if (nickname && phone) {
      handleLogin(nickname);
      history.push("/");
    }
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
      <button className="login-button" onClick={handleLoginButtonClick}>
        로그인
      </button>
    </div>
  );
};

export default Login;
