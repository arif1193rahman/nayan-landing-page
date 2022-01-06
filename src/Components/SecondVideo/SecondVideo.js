import React from "react";
import secondImage from "../../images/secondImage.png";
import "./SecondVideo.css";

const SecondVideo = () => {
  return (
    <div className="container second-image">
      <div>
          <p className="second-image-text">
          <span className="second-image-first">Take A Sneak Peek And See.. </span><br/>
          <span className="second-image-second">What Our Supper Funnel Hero's Are Saying After Using</span> <br/>
          <span className="second-image-third">their <span className="second-image-third-span">FREE Super Funnel</span></span>
          </p>
        {/* <h2>Take A Sneak Peek And See..</h2>
        <h1>What Our Supper Funnel Hero's Are Saying After Using</h1>
        <h2>
          their <span>FREE Super Funnel</span>
        </h2> */}
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        {/* <img className="second-image" src={secondImage} alt="" /> */}
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};

export default SecondVideo;
