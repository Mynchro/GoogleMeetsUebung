import React from "react";
import "./ControlBar.css";

const ControlBar = () => {
  return (
    <div className="control-bar">
      <div className="left-section">
        <span className="time">1:53 PM</span>
        <span className="divider">|</span>
        <span className="meeting-code">wit-etbj-kck</span>
      </div>
      <div className="center-section">
        <div className="icon mute"></div>
        <div className="icon video-off"></div>
        <div className="icon cc"></div>
        <div className="icon emojis"></div>
        <div className="icon share-screen"></div>
        <div className="icon raise-hand"></div>
        <div className="icon more-options"></div>
        <div className="icon end-call"></div>
      </div>
      <div className="right-section">
        <div className="icon info"></div>
        <div className="icon participants"></div>
        <div className="icon chat"></div>
        <div className="icon activ"></div>
        <div className="icon lock"></div>
      </div>
    </div>
  );
};

export default ControlBar;
