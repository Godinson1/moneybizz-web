import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const HomeInfo = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <div className="info-container">
        <div className="dash-title">
          <div>BUILD YOUR SAVINGS</div>
          <Link to="/save">
            <div className="banner">
              <img src="images/wallet.png" alt="saving" />
            </div>
          </Link>
        </div>
        <div className="dash-title">
          <div>DOWNLOAD THE MOBILE APP</div>
          <div className="flex-start-button">
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
        </div>
        <div className="dash-title">
          <div>REFER & EARN</div>
          <div
            onClick={() => history.push(`${url}/refer&earn`)}
            className="banner"
          >
            <img src="images/wallet.png" alt="saving" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
