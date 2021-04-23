import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./account.scss";

const Account: FC = () => {
  return (
    <div>
      <Dashboard title="ACCOUNT">
        <div className="auth-account">
          <h3>This is the account page</h3>
        </div>
      </Dashboard>
    </div>
  );
};

export default Account;
