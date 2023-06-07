import React from "react";
import "./Home.css";
import LeftSide from "../Acc/LeftSide";
import Header from "../Acc/Header";

const Home = () => {
  const list = [
    { title: "글1", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글2", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글3", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글4", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글5", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글6", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글7", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글8", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글9", tag: ["공모전", "react"], contents: "글 내용" },
    { title: "글10", tag: ["공모전", "react"], contents: "글 내용" },
  ];
  return (
    <div className="container">
      {/* header */}
      <Header />
      <div
        style={{
          height: "200px",
          backgroundColor: "lightgray",
        }}
      >
        배너
      </div>
      {/* body */}
      <div className="content">
        <nav>
          <LeftSide style={{ position: "sticky", top: "0" }} />
        </nav>
        <main style={{ minHeight: "100vh" }}>
          <div
            style={{
              dispaly: "flex",
            }}
          >
            <input type="text" />
            <span>
              <button style={{ float: "right" }}>모집글 게시</button>
            </span>
          </div>
          {list.map((item) => (
            <div style={{ backgroundColor: "lightgray", marginTop: "20px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                <a href="#">{item.title}</a>
                <hr />
              </div>
              <div style={{ textAlign: "right" }}>
                <a href="#">#공모전</a>
              </div>
              <div>{item.contents}</div>
              <br />
              <br />
              <br />
            </div>
          ))}
        </main>
        <div
          className="aside"
          style={{ backgroundColor: "lightgray", height: "500px" }}
        >
          <span>###</span>
        </div>
      </div>

      {/* footer */}
      <footer>footer</footer>
    </div>
  );
};

export default Home;
