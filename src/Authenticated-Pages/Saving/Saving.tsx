import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./saving.scss";

const Saving: FC = () => {
  return (
    <div>
      <Dashboard title="SAVINGS">
        <div className="auth-saving">
          <div className="save-header">
            <div className="total-balance"></div>
            <div className="build">
              <div>Build Your Saving</div>
              <div className="banner"></div>
            </div>
          </div>
          <div className="save-options">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Saving;
