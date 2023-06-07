import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <div style={{ width: "70px", backgroundColor: "lightgray" }}>로고</div>
      </div>
      <div
        style={{
          height: "200px",
          backgroundColor: "lightgray",
          margin: "10px",
        }}
      >
        배너
      </div>
      <div class="parent">
        <div
          class="child1"
          style={{
            backgroundColor: "lightgray",
            height: "400px",
            textAlign: "center",
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
              marginTop: "20px",
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
            마이페이지
          </div>
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "gray",
              margin: "0px 10px 0px 10px",
              height: "30px",
            }}
          >
            글 관리
          </div>
          <div
            onClick={() => {}}
            style={{
              backgroundColor: "gray",
              margin: "0px 10px 0px 10px",
              height: "30px",
            }}
          >
            알림
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
            로그아웃
          </div>
        </div>
        <div class="child2" style={{ minHeight: "100vh" }}>
          <div
            style={{
              dispaly: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input type="text" />
            <span>
              <button style={{ float: "right" }}>모집글 게시</button>
            </span>
          </div>
          <div style={{ backgroundColor: "lightgray", marginTop: "20px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              <a href="#">글 1</a>
              <hr />
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="#">#공모전</a>
            </div>
            <div>글 내용</div>
            <br />
            <br />
            <br />
          </div>
          <div style={{ backgroundColor: "lightgray", marginTop: "20px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              <a href="#">글 2</a>
              <hr />
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="#">#공모전</a>
            </div>
            <div>글 내용</div>
            <br />
            <br />
            <br />
          </div>

          <div style={{ backgroundColor: "lightgray", marginTop: "20px" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              <a href="#">글 3</a>
              <hr />
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="#">#공모전</a>
            </div>
            <div>글 내용</div>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div
          class="child1"
          style={{ backgroundColor: "lightgray", height: "500px" }}
        >
          <span>###</span>
        </div>
      </div>
      <div style={{ height: "8000px" }}></div>
    </div>
  );
};

export default Home;
