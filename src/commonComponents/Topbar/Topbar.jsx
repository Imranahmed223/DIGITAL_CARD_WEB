import React from "react";
import "./Topbar.scss";

const Topbar = ({ info }) => {
  return (
    <div>
      <div className="topbar">
        <div className="topbar-container">
          <h2>{info?.jobTitle ? info.jobTitle : ""}</h2>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
