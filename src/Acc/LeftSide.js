import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = (props) => {
  return (
    <div style={{ position: "sticky", top: "20px" }}>
      <div
        style={{
          textAlign: "center",
          height: "250px",
          backgroundColor: "lightgray",
          paddingTop: "10px",
          marginRight: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            textAlign: "center",
            lineHeight: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "30px",
            marginTop: "0px",
          }}
        >
          프로필 사진
        </div>
        <div
          onClick={() => {}}
          style={{
            backgroundColor: "gray",
            margin: "0px 10px 0px 10px",
            height: "30px",
          }}
        >
          <Link to="/myPage">마이페이지</Link>
        </div>
        <div
          onClick={() => {}}
          style={{
            backgroundColor: "gray",
            margin: "0px 10px 0px 10px",
            height: "30px",
          }}
        >
          <a href="#">글 관리</a>
        </div>
        <div
          onClick={() => {}}
          style={{
            backgroundColor: "gray",
            margin: "0px 10px 0px 10px",
            height: "30px",
          }}
        >
          <Link to="/">알림</Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
