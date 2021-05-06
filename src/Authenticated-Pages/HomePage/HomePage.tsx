import React, { FC } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { useRouteMatch, Link, Route, useHistory } from "react-router-dom";
import { Icon, Popup, Modal } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import { Save } from "../../Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import { Header, HomeInfo, Todo } from "./Components";
import { usePrepareLink } from "../../utilities";
import { getUserDetail } from "../../redux";
import { HOMEPAGE } from "./constants";
import "./homepage.scss";

const HomePage: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [open, setOpen] = React.useState(true);
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const saveLink = usePrepareLink({
    to: "/save",
    isRelativePath: true,
    query: {},
    pushToQuery: {},
    hash: null,
    keepOldQuery: false,
    state: {},
  });

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
              <Link to={`${url}/save`} className="link">
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
      <Route
        path={saveLink.pathname}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <Save />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default HomePage;
