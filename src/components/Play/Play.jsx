import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "./Play.scss";
import "react-html5video/dist/styles.css";

const Play = ({ src }) => {
  return (
    <>
      <div className="player-screen">
        <div className="play-logo">{/* <img src={logo} alt="logo" /> */}</div>
      </div>
      <Video autoPlay loop className="video-js">
        <source src={src} type="video/webm" />
      </Video>
    </>
  );
};

export default Play;
