import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory, useRouteMatch, Route } from "react-router-dom";
import { SAFELOCK_OPTIONS } from "./constants";
import { Lock } from "./index";
import "./styles.scss";
import "../../styles.scss";

const CreateSafelock = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

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
            <h2>How long do you want to lock funds?</h2>
            <div className="desc">
              Select a duration that you want to lock your funds & earn upfront
              interests of up to 35.6%
            </div>
          </div>
          {SAFELOCK_OPTIONS.map((data) => (
            <div
              onClick={() => history.push(`${url}/${data.value}`)}
              className="safelock-options"
            >
              <div>{data.days}</div>
              <div>at {data.interest} per annum</div>
            </div>
          ))}
          <div>
            <button onClick={() => history.goBack()} className="auth-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Route
        path={`${url}/:id`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-payment">
                  <div className="modal-container">
                    <div>
                      <Lock />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default CreateSafelock;
