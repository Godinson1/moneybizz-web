import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./invest.scss";

const Invest: FC = () => {
  return (
    <div>
      <Dashboard title="INVEST">
        <div className="auth-invest">
          <div>
            <img
              width="300"
              height="200"
              src="images/coming.png"
              alt="coming-soon"
            />
          </div>
          <h3>Bizzivest</h3>
          <div className="text-base">
            <p>Kindly check back for this feature as it is coming soon...</p>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Invest;
