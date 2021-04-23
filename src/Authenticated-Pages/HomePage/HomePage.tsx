import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./homepage.scss";

const HomePage: FC = () => {
  return (
    <div>
      <Dashboard title="HOMEPAGE">
        <div className="auth-home">
          <h3>This is the home page</h3>
        </div>
      </Dashboard>
    </div>
  );
};

export default HomePage;
