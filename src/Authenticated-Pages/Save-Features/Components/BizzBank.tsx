import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useRouteMatch, Route, Link, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Save } from "../../../Components";
import {
  formatNumber,
  usePrepareLink,
  getChildRoute,
} from "../../../utilities";
import {
  Settings,
  Withdraw,
  Interest,
  AutoSaveSettings,
  SwitchAutosave,
} from "./index";
import "./styles.scss";

import "../savefeatures.scss";

const BizzBank: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const history = useHistory();
  const saveLink = usePrepareLink(getChildRoute("/quicksave"));
  const autosaveLink = usePrepareLink(getChildRoute("/autosave_settings"));
  const withdrawLink = usePrepareLink(getChildRoute("/withdraw"));
  const interestLink = usePrepareLink(getChildRoute("/interest"));
  const settingsLink = usePrepareLink(getChildRoute("/settings"));
  const autosaveToggleLink = usePrepareLink(getChildRoute("/autosavetoggle"));
  const { url } = useRouteMatch();
  const AutosaveState = localStorage.getItem("autosave");

  return (
    <div>
      <div className="card-container">
        <div className="first-card">
          <div className="custom-card">
            <div className="custom-card-header">
              <div>MY BALANCE</div>
              {user.user && user.user.data && (
                <div className="flex-between">
                  <div className="amount-text">
                    {formatNumber(user.user.data.details.total_balance)}
                  </div>
                  <Link to={`${url}/quicksave`}>
                    <div className="quick-save-btn">+ Quick Save</div>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex-bottom-card">
              <div onClick={() => history.push(`${url}/interest`)}>
                <Icon id="iconed" name="percent" color="blue" /> &nbsp; Interest
              </div>
              <div onClick={() => history.push(`${url}/withdraw`)}>
                <Icon id="iconed" name="home" color="blue" /> &nbsp; Withdraw
              </div>
              <div onClick={() => history.push(`${url}/settings`)}>
                <Icon id="iconed" name="setting" color="blue" /> &nbsp; Settings
              </div>
            </div>
          </div>
        </div>
        <div className="second-card">
          <div className="custom-card-right">
            <div>INTEREST RATE</div>
            <div className="interest">8%</div>
            <div>Per Annum</div>
          </div>
          <div className="custom-card-autosave">
            <div className="card-header">
              <div>SAVINGS INFO</div>
              {user.user && user.user.data && user.user.data.details.autoSave && (
                <div className="flex-between">
                  <div
                    onClick={() => history.push(`${url}/autosave_settings`)}
                    className="autosave-btn"
                  >
                    <div>AutoSave Deposit</div>
                    <div>
                      {formatNumber(
                        parseInt(
                          user.user.data.details.autoSave.amount.slice(0, -2)
                        )
                      )}{" "}
                      {user.user.data.details.autoSave.interval ===
                      "testing" ? (
                        "/2mins"
                      ) : (
                        <span id="bold-text">
                          {user.user.data.details.autoSave.interval}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="autosave-btn">
                    <div>Next Withdrawal</div>
                    <div>30 June 21</div>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => history.push(`${url}/autosavetoggle`)}
              className="flex-bottom-card"
            >
              <Icon id="iconed" name="power" /> &nbsp;{" "}
              {AutosaveState === "true"
                ? "Turn off AutoSave"
                : "Turn on AutoSave"}
            </div>
          </div>
          <div className="info">
            {AutosaveState === "true"
              ? "Your autosave is ON."
              : "  Your autosave is OFF."}
          </div>
        </div>
      </div>
      <Route
        path={saveLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <Save data="save" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={settingsLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <Settings />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={withdrawLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
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
      <Route
        path={interestLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <Interest />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={autosaveLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
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
        path={autosaveToggleLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
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
    </div>
  );
};

export default BizzBank;
