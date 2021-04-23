import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./saving.scss";

const Saving: FC = () => {
  return (
    <div>
      <Dashboard title="SAVINGS">
        <div className="auth-saving">
          <h3>This is the savings page</h3>
        </div>
      </Dashboard>
    </div>
  );
};

export default Saving;
