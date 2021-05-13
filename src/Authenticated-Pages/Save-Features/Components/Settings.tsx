import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory, Route, useRouteMatch } from "react-router-dom";
import { AutoSaveSettings, SwitchAutosave, Withdraw } from "./index";

import "./styles.scss";

const Settings = () => {
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
            <h2>Settings</h2>
            <div className="desc">
              Manage your BizzBank savings on MoneyBizz using the options below.
            </div>
          </div>
          <div
            onClick={() => history.push(`${url}/autosavetoggle`)}
            className="autosave-banner-settings"
          >
            <div>
              <Icon size="big" name="power" />
            </div>
            <div>
              <h4>Turn on AutoSave</h4>
              <div className="base">
                Your last AutoSave deposit was supposed to be on Wednesday 12th
                of May, 2021 by 10:00pm.
              </div>
            </div>
          </div>
          <div
            onClick={() => history.push(`${url}/autosave_settings`)}
            className="autosave-banner-settings"
          >
            <div>
              <Icon size="big" name="setting" />
            </div>
            <div>
              <h4>AutoSave Setting</h4>
              <div className="base">
                Automatically deposit into your BizzBank savings.
              </div>
            </div>
          </div>
          <div
            onClick={() => history.push(`${url}/withdraw`)}
            className="autosave-banner-settings"
          >
            <div>
              <Icon size="big" name="setting" />
            </div>
            <div>
              <h4>Set withdrawal days</h4>
              <div className="base">
                Set when you want to freely withdraw from your BizzBank Savings.
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
      <Route
        path={`${url}/autosave_settings`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-payment">
                  <div className="modal-container">
                    <div>
                      <AutoSaveSettings />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/autosavetoggle`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-payment">
                  <div className="modal-container">
                    <div>
                      <SwitchAutosave />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/withdraw`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-payment">
                  <div className="modal-container">
                    <div>
                      <Withdraw />
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

export default Settings;
