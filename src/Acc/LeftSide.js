import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <div style={{ position: "sticky", top: "10px" }}>
      <div
        style={{
          textAlign: "center",
          height: "300px",
          backgroundColor: "lightgray",
          paddingTop: "10px",
          marginRight: "10px",
        }}
      >
        {isLogined ? (
          <>
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
              <a href="/myPage">마이페이지</a>
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
              <a href="#">알림</a>
            </div>
            <div
              onClick={() => {}}
              style={{
                backgroundColor: "gray",
                margin: "10px",
                height: "30px",
                marginTop: "30px",
              }}
            >
              <a href="#">로그아웃</a>
            </div>
          </>
        ) : (
          <div>
            <div style={{ margin: "20px" }}>로그인이 필요합니다.</div>
            <Link
              to="/login"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              로그인하기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
