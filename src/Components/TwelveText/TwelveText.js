import React from "react";
import "./TwelveText.css";

const TwelveText = () => {
  return (
    <div className="container twelveText1-main">
      <div className="twelveText1">
        <p>This Is Truly A Limited Offer, So</p>
        <p>Claim Your FREE Copy Now </p>
      </div>
      <div className="twelveText1-two">
        <p>
          Thanks for taking the time to read this letter and I hope you enjoy
          the Funnel!
        </p>
        <p>
          Thanks,
          <br />
         
          <span className="twelveText1-three"> George Wickens</span>
        </p>
        <p>
          <span className="twelveText1-four">P.S.</span> In case you're one of those people (like me) who just skips to
          the end of the letter, here's the deal:
        </p>
        <p className="twelveText1-five">
          I'm giving you my incredible Super Funnel that I have used and still
          use today as you are reading to generate me over $100,000 online with
          my online business serving people online.
        </p>
        <p>
          There's no catch... no gimmicks... You will NOT be signing up for any
          "trial" to some monthly program or anything like that.
        </p>
        <p>So,<u className="twelveText1-six">Click the button below to get your FREE copy now.</u>  You won't regret it.</p>
        <button className="video-button-text">YES! I WANT THE FREE SUPER FUNNEL <span className="twelveText1-seven"> <br />(NO OPTION REQUIRED)</span></button>

      </div>
    </div>
  );
};

export default TwelveText;
