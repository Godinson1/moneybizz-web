import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const RequestFund = () => {
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
            <h2>Request Fund.</h2>
            <div className="desc">
              Still in development. Kindly check back later!
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

export default RequestFund;
