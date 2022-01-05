import React from "react";
import ReactPlayer from "react-player";
import "./VedioPlayer.css";

const VedioPlayer = () => {
    
  return (
   <div className="container player-bottom">
      <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
  </div>
   </div>
  );
};

export default VedioPlayer;



  //   <div>
  //     <p>A video!</p>
  // <video src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/h264.mov" controls></video>
  // <p>That was a video.</p>
  //   </div>
//     <div className="player-wrapper">
//  <div className="react-player"> <iframe  width="560" height="315" src="https://www.youtube.com/embed/Vbg81kc56FU" frameborder="0"
//     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
 
//     </div>
      // <div className="player-wrapper">
      //   <ReactPlayer
      //     className="react-player container"
      //     url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      //     width="100%"
      //     height="100%"
      //   />
      // </div>
