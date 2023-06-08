import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Join&Login/Signcss.css";
import collabo_logo from "../Acc/logo.png";
import { Button } from "antd";

function Login(props) {
  const { userData, isLogined, setIsLogined } = props;
  const navigate = useNavigate();
  const [id, userId] = useState("");
  const [pwd, userPwd] = useState("");

  const userIdChange = (e) => {
    userId(e.target.value);
  };

  const userPwdChange = (e) => {
    userPwd(e.target.value);
  };

  const userLogin = () => {
    console.log("ID:", id);
    console.log("Pwd:", pwd);

    // 회원가입 정보와 일치하는지 확인
    if (id === userData?.userID && pwd === userData?.userPWD) {
      setIsLogined(true);
      window.confirm(`로그인 성공`);
      navigate("/"); // 로그인 하고 이동할 js
    } else {
      setIsLogined(false);
      alert("사용자 정보가 틀렸습니다.");
    }
  };

  const userMyPage = () => {
    navigate("/join"); // 회원가입 버튼 클릭 시 MyPage로 이동
  };

  return (
    <div className="login-container">
      <img
        src={collabo_logo}
        alt="logo"
        style={{ height: "100px", marginBottom: "20px" }}
      />
      <div className="login-form">
        <h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;로그인
        </h2>
        <br />

        <label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ID
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="inputsetting"
            type="text"
            value={id}
            onChange={userIdChange}
            placeholder="아이디"
          />
        </label>
        <label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PWD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            // style={{
            //   padding: "8px",
            //   marginBottom: "16px",
            //   border: "2px solid #000",
            //   borderRadius: "4px",
            // }}
            className="inputsetting"
            type="password"
            value={pwd}
            onChange={userPwdChange}
            placeholder="비밀번호"
          />
        </label>
        <br />
        <button className="loginbutton buttonsetting" onClick={userLogin}>
          로그인
        </button>
        <button className="myPagebutton buttonsetting" onClick={userMyPage}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
