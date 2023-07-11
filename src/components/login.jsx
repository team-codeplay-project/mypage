import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import axios from "axios";
import { AppContext } from "../App";

const LoginPage = ({ handleLogin }) => {
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { account } = useContext( AppContext ) ;

  const Userinsert = async(e) => {

    e.preventDefault();

    try {

      if( !account || !phone || !nickname ){
        console.log( "plus input" ) ;
      return ;
      }

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/`,
        {
          phone_number : phone,
          address : account ,
          name : nickname ,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "any",
          },
        }
      );

      console.log( 'create user' ) ;
      
    } catch (error) {
     console.error(error); 
    }

  }

  return (
    <div className="login-container">
      <h1 className="title">로그인</h1>
      <form onSubmit={Userinsert} className="flex flex-col">
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e)=>setNickname(e.target.value)}
        className="input-field"
      />
      <input
        type="tel"
        placeholder="휴대폰 번호"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className="input-field"
      />
      <input type ="submit" value ="회원 가입" />
      </form>
    </div>
  );
};

export default LoginPage;
