import { Avatar, Button, Input, Space } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Acc/Header";
import LeftSide from "../Acc/LeftSide";
import UnLogLeftSide from "../Acc/UnLogLeftSide";
import Footer from "../Acc/Footer";
import "../Home/Home.css";
import RightSide from "../Acc/RightSide";
import { UserOutlined } from "@ant-design/icons";

const BoardListItem = (props) => {
  const { id } = useParams();
  const { listdata, isLogined, setIsLogined } = props;
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedComment = comment;
    if (isLogined) {
      if (updatedComment !== "")
        setCommentList([...commentList, updatedComment]);
    } else alert("로그인 후 이용하실 수 있습니다.");
    setComment("");
  };
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
        <main style={{ minHeight: "100vh", paddingLeft: "20px" }}>
          <div style={{ marginLeft: "20px", marginRight: "20px" }}>
            {listdata.map((item, index) => {
              return (
                index == id && (
                  <>
                    <h2
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.7rem",
                        marginTop: "10px",
                        color: "navy",
                      }}
                    >
                      {item.title}
                    </h2>
                    <div
                      style={{
                        margin: "10px 0 10px 0",
                        textAlign: "end",
                        width: "95%",
                      }}
                    >
                      {item.tag.map((i) => (
                        <div style={{ display: "inline-block" }}>
                          #{i} &nbsp;
                        </div>
                      ))}
                    </div>
                    <h3>프로젝트 내용</h3>
                    <div
                      style={{
                        width: "95%",
                        height: "200px",
                        overflowY: "auto",
                        backgroundColor: "lightgray",
                        padding: "50px 20px 30px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      {item.contents}
                    </div>
                    <h4>댓글 전체보기</h4>
                    <hr />
                    <div
                      style={{
                        width: "100%",
                        height: "300px",
                        overflowY: "scroll",
                      }}
                    >
                      {commentList.map((item, index) => (
                        <div>
                          <Space direction="horizontal">
                            <Avatar
                              style={{ margin: "10px" }}
                              size={25}
                              icon={<UserOutlined />}
                            />
                            <div key={index}>유저 : {item}</div>
                          </Space>
                        </div>
                      ))}
                    </div>
                    <form onSubmit={handleSubmit} className="form-container">
                      <Input
                        placeholder="댓글을 입력하세요"
                        type="text"
                        className="text"
                        value={comment}
                        onChange={handleInputChange}
                      />
                    </form>
                  </>
                )
              );
            })}
          </div>
        </main>
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BoardListItem;
