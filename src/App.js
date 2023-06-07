import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import MyPage from "./MyPage/MyPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
