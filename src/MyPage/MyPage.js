import React from "react";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import "../Home/Home.css";

const MyPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <nav style={{ marginTop: "10px" }}>
          <LeftSide />
        </nav>
        <main style={{ minHeight: "100vh" }}>
          <h2 style={{ fontWeight: "bolder", fontSize: "1.7rem" }}>
            마이페이지
          </h2>
          <div
            style={{
              backgroundColor: "lightgray",
              height: "450px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="profile"
              style={{ flexGrow: "3", textAlign: "center" }}
            >
              <div
                style={{
                  backgroundColor: "gray",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "gray",
                  width: "200px",
                }}
                onClick={() => {
                  console.log("클릭됨");
                }}
              >
                프로필 사진 변경
              </div>
              <div
                style={{
                  backgroundColor: "gray",
                  width: "200px",
                }}
                onClick={() => {
                  console.log("클릭됨");
                }}
              >
                프로필 사진 초기화
              </div>
            </div>
            <div style={{ flexGrow: "6" }}>
              <ul>
                <li>아이디</li>
                <li>
                  학력
                  <select>
                    <option value="0">학력 선택</option>
                    <option value="1">고등학교 졸업</option>
                    <option value="2">대학교 재학</option>
                    <option value="3">대학교 휴학</option>
                    <option value="4">대학교 졸업</option>
                  </select>
                </li>

                <li>
                  학과
                  <select>
                    <option value="0">학과 선택</option>
                    <option value="1">컴퓨터공학</option>
                    <option value="2">컴퓨터공학</option>
                    <option value="3">컴퓨터공학</option>
                    <option value="4">컴퓨터공학</option>
                  </select>
                </li>
                <li>나의 포토폴리오</li>
                <div
                  style={{
                    height: "150px",
                    backgroundColor: "gray",
                    marginLeft: "10px",
                  }}
                ></div>
              </ul>
              <div style={{ textAlign: "end" }}>
                <button style={{ marginRight: "10px" }}>수정</button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <button style={{ margin: "10px" }}>변경사항 저장</button>
            <button style={{ margin: "10px" }}>회원 탈퇴</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPage;
