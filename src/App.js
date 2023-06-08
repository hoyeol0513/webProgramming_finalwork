import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import MyPage from "./MyPage/MyPage";
import Login from "./Join&Login/Login";
import Join from "./Join&Login/Join";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLogined, setIsLogined] = useState();
  const [data, setData] = useState([]);
  const userSignUp = (id, pwd, edu, maj) => {
    setUserData({
      userID: id,
      userPWD: pwd,
      userEdu: edu,
      userMaj: maj,
      userPort: data,
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
              />
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
