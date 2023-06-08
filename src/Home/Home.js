import React, { useState } from "react";
import "./Home.css";
import LeftSide from "../Acc/LeftSide";
import Header from "../Acc/Header";
import { Input, Button, List } from "antd";
import { Link, useNavigate } from "react-router-dom";
import RightSide from "../Acc/RightSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";

const Home = (props) => {
  const navigate = useNavigate();
  const { userData, isLogined, setIsLogined } = props;
  console.log(userData);
  console.log(isLogined);
  const { Search } = Input;

  const list = [
    {
      title: "IT공모전 참가를 위한 디자이너 모집",
      contents:
        "2023년 7월까지 진행되는 IT공모전 어플리케이션 제작을 위해 UI/UX 및 로고 제작에 관심이 많은 디자이너를 모집합니다. 어플리케이션 제작을 위해서 React Native나 android studio를 활용할 수 있는 사람들을 모집합니다.",
      tag: ["IT공모전", "대회", "UI", "UX"],
    },
    {
      title: "소비패턴 통계연구를 위한 심리학과 학생 모집",
      contents: "졸업논문을 위해 심리학과 학생을 모집합니다.",
      tag: ["심리학과", "대학생", "통게"],
    },
  ];
  return (
    <div className="container">
      <div style={{ display: "block", textAlign: "end", padding: "5px" }}>
        <Button
          style={{ marginRight: "10px" }}
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </Button>
        <Button
          onClick={() => {
            if (isLogined) setIsLogined(false);
            else navigate("/login");
          }}
        >
          {isLogined ? "로그아웃" : "로그인"}
        </Button>
      </div>
      <Header />
      {/* header */}

      {/* body */}
      <div className="content">
        <nav
          style={{
            border: "none",
            borderRightStyle: "dashed",
            borderRightwidth: "1px",
            borderRightColor: "navy",
            margin: 0,
            padding: 0,
          }}
        >
          {isLogined ? <LeftSide /> : <UnLogLeftSide />}
        </nav>
        <main
          style={{
            minHeight: "100vh",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <div
            style={{
              dispaly: "flex",
            }}
          >
            <Search
              placeholder="input search text"
              onSearch={() => {}}
              enterButton
              style={{ width: "500px" }}
            />

            <span>
              <Button
                type="primary"
                style={{ float: "right" }}
                onClick={() => {
                  if (!isLogined) alert("로그인이 필요한 서비스입니다.");
                }}
              >
                {isLogined ? (
                  <Link to="/write">모집글 게시</Link>
                ) : (
                  <Link to="/">모집글 게시</Link>
                )}
              </Button>
            </span>
          </div>
          <br />

          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Link
                      to="/"
                      style={{ fontSize: "1.3rem", marginBottom: "10px" }}
                    >
                      {item.title}
                    </Link>
                  }
                  description={
                    <>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          textAlign: "end",
                          marginBottom: "10px",
                        }}
                      >
                        {item.tag.map((i) => (
                          <span>#{i} &nbsp;</span>
                        ))}
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
                          height: "50px",
                          overflowY: "hidden",
                        }}
                      >
                        {item.contents}
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </main>

        {/* Right side bar */}
        <div
          className="aside"
          style={{
            border: "none",
            borderLeftStyle: "dashed",
            borderLeftwidth: "1px",
            borderLeftColor: "navy",
            margin: 0,
            padding: 0,
          }}
        >
          <RightSide />
        </div>
      </div>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
