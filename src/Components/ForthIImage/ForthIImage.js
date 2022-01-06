import React from "react";
import "./ForthIImage.css";
import ForthImage from "../../images/forthImage.png";

const ForthIImage = () => {
  return (
    <div className="container image2-section">
      <p>
        <span className="image2-text-first">What Are YOU Waiting For...</span>{" "}
        <br />{" "}
        <span className="image2-text-second">
          Id like to rush a free copy of my brand new{" "}
        </span>
        <br /> Super Funnel to You,{" "}
        <span className="image2-text-forth">ASAP!</span>
      </p>
      <img className="image2-responsive" src={ForthImage} alt="" />
      <p className="image2-paragraph">
        Like I mentioned before, <span className="image2-paragraph-first">my Super Funnel is free</span>. This works anywhere in
        the world! <span className="image2-paragraph-first">To take this all you have to do is click below...</span>
      </p>
      <button className="image2-button-text">YES! I WANT THE FREE SUPER FUNNEL</button>

    </div>
  );
};

export default ForthIImage;
