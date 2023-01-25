import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./module/Home/Home";
const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
