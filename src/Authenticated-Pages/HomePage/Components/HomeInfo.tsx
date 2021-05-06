import React from "react";
import { Icon } from "semantic-ui-react";

const HomeInfo = () => {
  return (
    <div>
      <div className="info-container">
        <div className="dash-title">Build Your Savings</div>
        <div className="banner">
          <img src="images/wallet.png" alt="saving" />
        </div>
        <div className="dash-title">Download the App</div>
        <div className="flex-start">
          <div className="mobile-button">
            <div>
              <Icon name="apple" size="big" />
            </div>
            <div>
              Download on the <br /> App Store
            </div>
          </div>
          <div className="mobile-button">
            <div>
              <Icon name="google play" size="big" color="blue" />
            </div>
            <div>
              Get it on <br /> Google Play
            </div>
          </div>
        </div>
        <div className="dash-title">Build Your Savings</div>
        <div className="banner">
          <img src="images/wallet.png" alt="saving" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
