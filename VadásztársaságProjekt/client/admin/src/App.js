import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Members from "./pages/Members";
import axios from "axios";
import Login from "./components/login-components/Login";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <div className="dp-flex">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
