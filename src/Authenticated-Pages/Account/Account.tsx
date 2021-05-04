import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Dashboard from "../../Pages/Dashboard/Components";
import { ACCOUNT_OPTIONS } from "./constants";
import "./account.scss";
import { Icon, SemanticICONS, Checkbox } from "semantic-ui-react";

const Account: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user.user);
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
              {user && user.data && (
                <div className="avatar-name">
                  <div className="account-avatar">
                    <img src={user.data.details.profile_photo} alt="user" />
                  </div>
                  <div>
                    <h2>
                      {user.data.details.firstName} {user.data.details.lastName}
                    </h2>
                  </div>
                </div>
              )}
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
