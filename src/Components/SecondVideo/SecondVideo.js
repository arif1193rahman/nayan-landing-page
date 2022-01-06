import React from "react";
import secondImage from '../../images/secondImage.png';
import './SecondVideo.css';

const SecondVideo = () => {
  return (
    <div className="container second-image">
        <h1>This is Video</h1>
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
