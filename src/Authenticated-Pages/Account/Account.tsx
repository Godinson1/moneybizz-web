import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import { ACCOUNT_OPTIONS } from "./constants";
import "./account.scss";
import { Icon, SemanticICONS, Checkbox } from "semantic-ui-react";

const Account: FC = () => {
  return (
    <div>
      <Dashboard title="My Account">
        <div className="auth-account">
          <div className="auth-flex">
            <div className="account-first">
              <div className="two-factor-banner">
                <h2>2f Authentication</h2>
              </div>
              {ACCOUNT_OPTIONS.map((options) => {
                const { icon, title } = options;
                return (
                  <div className="auth-options">
                    <Icon
                      size="small"
                      id="icon"
                      name={icon as SemanticICONS | undefined}
                    />
                    <div>{title}</div>
                  </div>
                );
              })}
            </div>
            <div className="account-second">
              <div className="avatar-name">
                <div className="account-avatar"></div>
                <div>
                  <h2>Joseph Godwin</h2>
                </div>
              </div>
              <div className="todo-container">
                <div className="todo">
                  <h2>Todo/Info</h2>
                </div>
                <div className="todo">
                  <h2>Todo/Info</h2>
                </div>
                <div className="todo">
                  <h2>Todo/Info</h2>
                </div>
                <div className="todo">
                  <h2>Todo/Info</h2>
                </div>
              </div>
              <div className="show-balance">
                <div>Show Account Balance</div>
                <div>
                <Checkbox toggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Account;
