import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./module/Home/Home";
const Routess = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:id?" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Routess;
