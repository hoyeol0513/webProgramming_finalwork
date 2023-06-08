import React from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div style={{ position: "sticky", top: "25px" }}>
      <div
        style={{
          height: "150px",
          paddingTop: "10px",
          marginRight: "10px",
        }}
      >
        {/* <Avatar
          src={userData.userImg}
          style={{ margin: "10px" }}
          size={120}
          icon={<UserOutlined />}
        /> */}
        <div
          onClick={() => {}}
          style={{
            margin: "0px 10px 0px 10px",
            height: "30px",
          }}
        >
          <Link to="/myPage">마이페이지</Link>
        </div>
        <div
          onClick={() => {}}
          style={{
            margin: "0px 10px 0px 10px",
            height: "30px",
          }}
        >
          <a href="#">글 관리</a>
        </div>
        <div
          onClick={() => {}}
          style={{
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
