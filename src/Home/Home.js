import React from "react";
import "./Home.css";
import LeftSide from "../Acc/LeftSide";
import Header from "../Acc/Header";
import { Input, Button, List } from "antd";
import { Link, useNavigate } from "react-router-dom";
import RightSide from "../Acc/RightSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";
import Post from "../Page/Post";

const Home = (props) => {
  const navigate = useNavigate();
  const { userData, isLogined, setIsLogined, listdata } = props;
  console.log(userData);
  console.log(isLogined);
  const { Search } = Input;

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
                  else {
                    //Post 컴포넌트 전달
                    alert("클릭됨");
                  }
                }}
              >
                모집글 게시
              </Button>
            </span>
          </div>
          <br />

          <List
            itemLayout="horizontal"
            dataSource={listdata}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Link
                      to={`/listitem/${index}`}
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
