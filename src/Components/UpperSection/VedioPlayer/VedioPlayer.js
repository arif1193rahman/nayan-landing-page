import React from "react";
import ReactPlayer from "react-player";
import "./VedioPlayer.css";

const VedioPlayer = () => {
  return (
    <div className="container player-bottom">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};

export default VedioPlayer;
