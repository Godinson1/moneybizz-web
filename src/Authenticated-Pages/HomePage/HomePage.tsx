import React, { FC } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import { Icon, Popup } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import { Header, HomeInfo, Todo } from "./Components";
import { getUserDetail } from "../../redux";
import { HOMEPAGE } from "./constants";
import "./homepage.scss";

const HomePage: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [open, setOpen] = React.useState(true);
  const { url } = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      <Dashboard title={HOMEPAGE}>
        {user.isUserLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-home">
            <div className="flex-between">
              <div onClick={() => dispatch(getUserDetail())}>
                <Popup
                  content="Refresh"
                  trigger={<Icon id="refresh" size="big" name="refresh" />}
                ></Popup>
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
