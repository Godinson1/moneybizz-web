import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Dashboard from "../../Pages/Dashboard/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import "./homepage.scss";

const HomePage: FC = () => {
  const state = useSelector((state: RootStateOrAny) => state.dashboard);
  return (
    <div>
      <Dashboard title="HOMEPAGE">
        {state.isLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-home">
            <h3>This is the home page</h3>
          </div>
        )}
      </Dashboard>
    </div>
  );
};

export default HomePage;
