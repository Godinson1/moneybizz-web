import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import { ACCOUNT_OPTIONS } from "./constants";
import "./account.scss";
import { Icon, SemanticICONS } from "semantic-ui-react";

const Account: FC = () => {
  return (
    <div>
      <Dashboard title="My Account">
        <div className="auth-account">
          <h3>This is the account page</h3>
          <div className="auth-flex">
            <div>
              <div className="two-factor-banner"></div>
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
            <div>
              <div className="account-avatar"></div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Account;
