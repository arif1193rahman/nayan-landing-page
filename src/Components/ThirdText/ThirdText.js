import React from "react";
import "./ThirdText.css";

const ThirdText = () => {
  return (
    <div>
      <div className="third-text-main">
        <p>
          <span className="third-text-first">So, you May Be Thinking</span>{" "}
          <span className="third-text-second"> WILL THIS WORK FOR ME?</span>{" "}
          <br />
          <span className="third-text-third">
            (YES, OF COURSE IT WILL)
          </span>{" "}
          <br />
          <span className="third-text-fourth">Even If You Are...</span>
        </p>
      </div>
      <div className="text-list">
        <ol className="text-list-main">
          <ul>A Complete Newbie</ul>
          <ul>Lost On Where To Start</ul>
          <ul>Sick Of failing Online</ul>
          <ul>just Getting Started</ul>
        </ol>
      </div>
      <div>
        <p className="third-paragraph">
          And now I want to <u>help you</u> to get rid of those fears of making  money
          online and<br /> make you a success with your very own online business that
          will stand the test of <br/> time... <span className="plus"><u>PLUS</u></span> <span className="second-span">fill your bank account with real
          money</span> as well!
        </p>
      </div>
    </div>
  );
};

export default ThirdText;
