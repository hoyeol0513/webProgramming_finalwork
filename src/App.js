import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import MyPage from "./Page/MyPage";
import Login from "./Join&Login/Login";
import Join from "./Join&Login/Join";
import List from "./Page/List";
import Notice from "./Page/Notice";
import Post from "./Page/Post";
import BoardListItem from "./Page/BoardListItem";

function App() {
  const list = [
    {
      title: "IT공모전 참가를 위한 디자이너 모집",
      contents:
        "2023년 7월까지 진행되는 IT공모전 어플리케이션 제작을 위해 UI/UX 및 로고 제작에 관심이 많은 디자이너를 모집합니다. 어플리케이션 제작을 위해서 React Native나 android studio를 활용할 수 있는 사람들을 모집합니다.",
      // tag: ["IT공모전", "대회", "UI", "UX"],
      acquireMajor: "상관없음",
      numberTeam: 0,
      location: "상관없음",
      education: "상관없음",
    },
    {
      title: "소비패턴 통계연구를 위한 심리학과 학생 모집",
      contents: "졸업논문을 위해 심리학과 학생을 모집합니다.",
      // tag: ["심리학과", "대학생", "통게"],
      acquireMajor: "상관없음",
      numberTeam: 0,
      location: "상관없음",
      education: "상관없음",
    },
  ];
  const [userData, setUserData] = useState(null);
  const [isLogined, setIsLogined] = useState();
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [listdata, setListdata] = useState(list);

  const userSignUp = (id, pwd, edu, maj) => {
    setUserData({
      userID: id,
      userPWD: pwd,
      userEdu: edu,
      userMaj: maj,
      userPort: data,
      userImg: image,
    });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userData={userData}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                listdata={listdata}
              />
            }
          ></Route>
          <Route
            path="/myPage"
            element={
              <MyPage
                userData={userData}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                setUserData={setUserData}
                data={data}
                setData={setData}
                image={image}
                setImage={setImage}
              />
            }
          ></Route>
          <Route
            path="/list"
            element={<List isLogined={isLogined} setIsLogined={setIsLogined} />}
          ></Route>
          <Route
            path="/notice"
            element={
              <Notice isLogined={isLogined} setIsLogined={setIsLogined} />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                userSignUp={userSignUp}
                userData={userData}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
              />
            }
          ></Route>
          <Route
            path="/join"
            element={<Join userSignUp={userSignUp} userData={userData} />}
          ></Route>
          <Route
            path="/post"
            element={
              <Post
                isLogined={isLogined}
                setIsLogined={setIsLogined}
                listdata={listdata}
                setListdata={setListdata}
              />
            }
          ></Route>
          <Route
            path="/listitem/:id"
            element={
              <BoardListItem
                listdata={listdata}
                isLogined={isLogined}
                setIsLogined={setIsLogined}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
