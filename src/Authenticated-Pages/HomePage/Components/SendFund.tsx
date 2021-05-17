import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const SendFund = () => {
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
          <div className="info-header">
            <h2>Send Fund.</h2>
            <div className="desc">
              Still in development. Kindly check back later!
            </div>
          </div>
          <div className="autosave-banner-settings">
            <div>
              <Icon size="big" name="setting" />
            </div>
            <div>
              <h4>Mono Credit</h4>
              <div className="base">
                Send fund to a single user using his/her bizz handle.
              </div>
            </div>
          </div>
          <div className="autosave-banner-settings">
            <div>
              <Icon size="big" name="setting" />
            </div>
            <div>
              <h4>Multiple Credit - Give Away</h4>
              <div className="base">
                Send fund to more than one user at a go using their bizz handle.
              </div>
            </div>
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

export default SendFund;
