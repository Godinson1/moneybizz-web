import React, { FC } from "react";
import { formatNumber } from "../../../utilities";
import { Icon } from "semantic-ui-react";
import "./styles.scss";

import "../savefeatures.scss";

const BizzBank: FC = () => {
  return (
    <div>
      <div className="card-container">
        <div className="first-card">
          <div className="custom-card">
            <div className="custom-card-header">
              <div>MY BALANCE</div>
              <div className="flex-between">
                <div className="amount-text">{formatNumber(30000)}</div>
                <div className="quick-save-btn">+ Quick Save</div>
              </div>
            </div>
            <div className="flex-bottom-card">
              <div>
                <Icon id="iconed" name="percent" color="blue" /> &nbsp; Interest
              </div>
              <div>
                <Icon id="iconed" name="home" color="blue" /> &nbsp; Withdraw
              </div>
              <div>
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
              <div className="flex-between">
                <div className="autosave-btn">
                  <div>AutoSave Deposit</div>
                  <div>N2000 Weekly</div>
                </div>
                <div className="autosave-btn">
                  <div>Next Withdrawal</div>
                  <div>30 June 21</div>
                </div>
              </div>
            </div>
            <div className="flex-bottom-card">
              <Icon id="iconed" name="power" /> &nbsp;Turn on AutoSave
            </div>
          </div>
          <div className="info">Your autosave is off.</div>
        </div>
      </div>
    </div>
  );
};

export default BizzBank;
