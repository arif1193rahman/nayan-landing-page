import React from "react";
import './EightVideo.css';

const EightVideo = () => {
  return (
    <div className="container eight-video-responsive">
      <h1>See What Heman Had to Say About The Super funnel</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      <button className="video-button-text">YES! I WANT THE FREE SUPER FUNNEL</button>

    </div>
  );
};

export default EightVideo;
