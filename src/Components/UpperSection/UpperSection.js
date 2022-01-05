import React from "react";
import image1 from "../../images/discover.png";
import "./UpperSection.css";
import VedioPlayer from "./VedioPlayer/VedioPlayer";

const UpperSection = () => {
  return (
    <div>
      <div className="header-section">
        <img className="image1-responsive" src={image1} alt="" />
        <VedioPlayer></VedioPlayer>
      </div>
      
    </div>
  );
};

export default UpperSection;
