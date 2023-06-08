import React, { useState } from "react";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import "../Home/Home.css";
import { Button, Input, Select, Space, Typography } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Paragraph from "antd/es/skeleton/Paragraph";

const MyPage = (props) => {
  const navigate = useNavigate();
  const { userData, setUserData, isLogined, setIsLogined } = props;
  console.log(userData);
  console.log(isLogined);
  const [port, setPort] = useState("");
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
            if (isLogined) {
              setIsLogined(false);
              navigate("/");
            } else navigate("/login");
          }}
        >
          {isLogined ? "로그아웃" : "로그인"}
        </Button>
      </div>
      <Header />
      <div className="content">
        <nav>
          <LeftSide />
        </nav>
        <main style={{ minHeight: "80vh" }}>
          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "1.7rem",
              marginTop: "-1px",
            }}
          >
            마이페이지
          </h2>
          <div
            style={{
              backgroundColor: "white",
              border: "solid 3px lightgray",
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
              <Space direction="vertical">
                <Button
                  type="primary"
                  style={{ width: "200px", margin: "5px" }}
                >
                  <Link to="#">프로필 사진 변경</Link>
                </Button>
                <Button type="dashed" style={{ width: "200px", margin: "5px" }}>
                  <Link to="#">프로필 사진 초기화</Link>
                </Button>
              </Space>
            </div>
            <div style={{ flexGrow: "10" }}>
              <ul>
                <li>
                  아이디
                  <Input
                    style={{
                      margin: "0 0px 0 15px",
                      display: "inline-block",
                      width: "200px",
                    }}
                    onChange={(e) => {
                      setUserData({
                        userID:
                          userData.userID === e.target.value
                            ? userData.userID
                            : e.target.value,
                        userPWD: userData.userPWD,
                        userEdu: userData.userEdu,
                        userMaj: userData.userMaj,
                      });
                    }}
                    defaultValue={isLogined ? userData.userID : ""}
                  />
                </li>
                <li>
                  학력
                  <Select
                    defaultValue={isLogined ? userData.userEdu : "학력선택"}
                    style={{
                      width: "200px",
                      marginLeft: "30px",
                    }}
                    onChange={(e) => {
                      setUserData({
                        userID: userData.userID,
                        userPWD: userData.userPWD,
                        userEdu: e,
                        userMaj: userData.userMaj,
                      });
                    }}
                    options={[
                      { value: "학력선택" },
                      { value: "고등학교 졸업" },
                      { value: "대학교 재학" },
                      { value: "대학교 휴학" },
                      { value: "대학교 졸업" },
                    ]}
                  />
                </li>

                <li>
                  학과
                  <Select
                    defaultValue={isLogined ? userData.userMaj : "학력선택"}
                    style={{
                      width: "200px",
                      marginLeft: "30px",
                    }}
                    onChange={(e) => {
                      setUserData({
                        userID: userData.userID,
                        userPWD: userData.userPWD,
                        userEdu: userData.userEdu,
                        userMaj: e,
                      });
                    }}
                    options={[
                      { value: "학과선택" },
                      { value: "컴퓨터" },
                      { value: "디자인/일러스트" },
                      { value: "언어" },
                      { value: "경영/마케팅" },
                      { value: "심리" },
                      { value: "음악" },
                      { value: "음식/요리" },
                      { value: "언론/커뮤니케이션" },
                      { value: "기타" },
                    ]}
                  />
                </li>
                <li>나의 포토폴리오</li>
                <div
                  style={{
                    height: "150px",
                    backgroundColor: "white",
                    border: "solid 3px lightgray",
                    marginLeft: "10px",
                  }}
                ></div>
              </ul>
            </div>
          </div>
          <div style={{ textAlign: "end" }}>
            <Button
              type="primary"
              style={{ float: "right", margin: "5px" }}
              onClick={() => {
                setUserData({
                  userID: userData.userID,
                  userPWD: userData.userPWD,
                  userEdu: userData.userEdu,
                  userMaj: userData.userMaj,
                });
                alert("수정되었습니다.");
              }}
            >
              변경사항 저장
            </Button>
            <Button
              type="dashed"
              style={{ float: "right", margin: "5px" }}
              onClick={() => {
                setUserData();
                setIsLogined(false);
                navigate("/");
              }}
            >
              회원 탈퇴
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPage;
