import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import MyPage from "./Page/MyPage";
import Login from "./Join&Login/Login";
import Join from "./Join&Login/Join";
import List from "./Page/List";
import Notice from "./Page/Notice";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLogined, setIsLogined] = useState();
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
