import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./invest.scss";

const Invest: FC = () => {
  return (
    <div>
      <Dashboard title="INVEST">
        <div className="auth-invest">
          <h3>This is the investment page</h3>
        </div>
      </Dashboard>
    </div>
  );
};

export default Invest;
