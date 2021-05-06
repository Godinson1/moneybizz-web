import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import { Header, HomeInfo, Todo } from "./Components";
import { HOMEPAGE } from "./constants";
import "./homepage.scss";

const HomePage: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [open, setOpen] = React.useState(true);
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <div>
      <Dashboard title={HOMEPAGE}>
        {user.isUserLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-home">
            <div className="flex-between">
              <div>
                <Icon id="refresh" size="big" name="refresh" />
              </div>
              <Link
                to={{
                  pathname: `${url}/save`,
                  state: {
                    background: location,
                  },
                }}
                className="link"
              >
                <div onClick={() => setOpen(!open)} className="quick-save-btn">
                  + Quick Save
                </div>
              </Link>
            </div>
            <div className="header-home">
              <Header />
            </div>
            <div className="home-flex">
              <Todo />
              <HomeInfo />
            </div>
          </div>
        )}
      </Dashboard>
    </div>
  );
};

export default HomePage;
