import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";
import "../../styles.scss";

const AjoInfo = () => {
  const history = useHistory();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div className="modal-div">
        <div className="flex-between">
          <div></div>
          <div className="icon" onClick={() => history.goBack()}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="safelockinfo-container">
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="/images/happy.jpeg" alt="safelock" />
                <div className="legends">
                  <h2>What is Ajo?</h2>
                  <p>
                    Ajo allows you to save collectively for fixed period of time
                    without having access to it until maturity. It's like having
                    your own custom fixed deposit.
                  </p>
                </div>
              </div>
              <div>
                <img src="/images/men.jpeg" alt="safelock" />
                <div className="legends">
                  <h2>You are in control</h2>
                  <p>
                    Set the desired duration of time to save funds collectively.
                    You can save for as little as N10000 or as much as
                    N100000000 collectively.
                  </p>
                </div>
              </div>
              <div>
                <img src="/images/lady.jpeg" alt="safelock" />
                <div className="legends">
                  <h2>Earn interest upfront!</h2>
                  <p>Up to 13% per annum paid upfront.</p>
                </div>
              </div>
            </Carousel>
          </div>
          <div>
            <button onClick={() => history.goBack()} className="auth-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AjoInfo;
