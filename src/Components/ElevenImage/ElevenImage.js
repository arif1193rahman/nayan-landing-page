import React from "react";
import "./ElevenImage.css";
import elevenImage from "../../images/forthImage.png";

const ElevenImage = () => {
  return (
    <div>
      <div className="eleven-second container">
        <img className="eleven-img" src={elevenImage} alt="" />
        <p className="eleven-second-text">
          Let Me Show You EVERYTHING You Get <br /> When You Claim The Super
          Funnel Today!
        </p>
      </div>
      <div className="container eleven-third">
        <div className="eleven-list">
          <div className="eleven-list1">
            <h2>The Super Funnel</h2>
            <h2>Bonus #1 My Free T-Shirt</h2>
            <h2>Bonus #2 - My $40,000 In Ten <br /> Days Method</h2>
            <h2>Bonus #3 - FREE Life Time Upgrades</h2>
          </div>
          <div className="eleven-cost1">
            <h2> ($997. Value)</h2>
            <h2> ($27. Value)</h2>
            <h2> ($97. Value)</h2>
            <h2>(Value - Priceless)</h2>
          </div>
        </div>
        <div className="eleven4-main">
          <p className="eleven4-one">Total Value: $1,121</p>
          <p className="eleven4-two">Get Your Copy Today For</p>
          <p className="eleven4-three">FREE!</p>
      </div>
      <button className="video-button-text">YES! I WANT THE FREE SUPER FUNNEL</button>
      </div>
      
    </div>
  );
};

export default ElevenImage;
