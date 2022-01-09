import React from "react";
import "./NineImageSection.css";
import nineImageFirst from "../../images/seventhImage-second.png";
import nineImageSecond from "../../images/nineImage-first.png";
import nineImageThird from "../../images/nineImage-second.png";

const NineImageSection = () => {
  return (
    <div>
      <div>
        <h1>Claim Your FREE Super Funnel Now and</h1>
        <h1>Get These FREE Action Taker Bonuses!</h1>
      </div>
      <div className="nine-card1 container">
        <p className="nine-card1-text">
          Bonus #1 -
          <span className="nine-extra">Super Funnel Hero T-Shirt</span>
        </p>
        <p className="nine-card2-text">
          "Yes, As I Mentioned Before <br /> You get My t-Shirt for Free"
        </p>
        <p className="nine-amount">Total Value: $27.00</p>
        <img className="nine-responsive-first" src={nineImageFirst} alt="" />
        <p className="nine-last-text">
          When you get my super funnel for free you get one of my t-shirts, You
          also <br /> may be wondering "Why does George wanna give away a free
          t-shirt?" <br /> <br />
          Great question... <br />
          <br />
          Every user I want us to scream out to the world that YES we are
          success <br /> YES we have broken our chains and living our lives on
          our terms. <br /> <br />
          <span className="nine-last-one">
            Get This For FREE When You Take My Super Funnel Today!
          </span>
        </p>
      </div>

      <div className="nine-card2-main">
        <div className="nine-card1 container">
          <p className="nine-card1-text">
            Bonus #2 -
            <span className="nine-extra">My $40000 In Ten Days Method</span>
          </p>
          <p className="nine-card2-text-second">
            "See Exactly How I Generated Over $40,000
            <br /> In Ten Days FREE Just By using Facebook!"
          </p>
          <p className="nine-amount">Total Value: $97.00</p>
          <img className="nine-responsive-first" src={nineImageSecond} alt="" />
          <p className="nine-last-text">
            I'll show you how I was able to leverage Facebook by posting simple
            updates to my status that helped me generated over $40,000 from my
            computer with ease...
            <br />
            <br />
            <span className="nine-last-one">
              Get This For FREE When You Take My Super Funnel Today!
            </span>
          </p>
        </div>
      </div>

      <div className="nine-card3-main">
        <div className="nine-card1 container">
          <p className="nine-card1-text">
            Bonus #3 -
            <span className="nine-extra">FREE Life Time Upgrades</span>
          </p>
          <p className="nine-card2-text">
            "Yep... That's Right My Final Bonus Is When I upgrade The Super
            Funnel You Will Get Life Time Upgrades"
          </p>
          <p className="nine-amount">Total Value: Priceless</p>
          <img className="nine-responsive-first" src={nineImageThird} alt="" />
          <p className="nine-last-text">
            
            <span className="nine-last-one">
              Get This For FREE When You Take My Super Funnel Today!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NineImageSection;
