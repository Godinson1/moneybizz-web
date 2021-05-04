import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useRouteMatch, Link, useLocation } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import { formatNumber } from "../../utilities";
import "./homepage.scss";

const HomePage: FC = () => {
  //const state = useSelector((state: RootStateOrAny) => state.dashboard);
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [open, setOpen] = React.useState(true);
  const { url } = useRouteMatch();
  const location = useLocation();

  console.log(url);

  return (
    <div>
      <Dashboard title="HOMEPAGE">
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
              <div className="conn">
                <div className="tb">
                  <div className="flex-start">
                    <div>Total Balance</div>
                    <div>
                      {formatNumber(user.user.data.details.total_balance)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="conn">
                <div className="ti">
                  <div className="flex-start">
                    <div>Total Investments</div>
                    <div>
                      {formatNumber(user.user.data.details.total_balance)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="conn">
                <div className="cns">
                  <div className="flex-start">
                    <div id="base">Connections</div>
                    <div>{user.user.data.connections.length}</div>
                  </div>
                </div>
              </div>
              <div className="conn">
                <div className="ab">
                  <div className="flex-start">
                    <div>Available Balance</div>
                    <div>
                      {" "}
                      {formatNumber(user.user.data.details.available_balance)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-flex">
              <div className="todo-container">
                <div className="dash-title">Todo</div>
                <div className="auth-options">
                  <Icon size="small" id="icon" name="percent" />
                  <div></div>
                </div>
                <div className="auth-options">
                  <Icon size="small" id="icon" name="percent" />
                  <div></div>
                </div>
                <div className="auth-options">
                  <Icon size="small" id="icon" name="percent" />
                  <div></div>
                </div>
              </div>
              <div className="info-container">
                <div className="dash-title">Build Your Savings</div>
                <div className="banner">
                  <img src="images/wallet.png" alt="saving" />
                </div>
                <div className="dash-title">Download the App</div>
                <div className="flex-start">
                  <div className="mobile-button">
                    <div>
                      <Icon name="apple" size="big" />
                    </div>
                    <div>
                      Download on the <br /> App Store
                    </div>
                  </div>
                  <div className="mobile-button">
                    <div>
                      <Icon name="google play" size="big" color="blue" />
                    </div>
                    <div>
                      Get it on <br /> Google Play
                    </div>
                  </div>
                </div>
                <div className="dash-title">Build Your Savings</div>
                <div className="banner">
                  <img src="images/wallet.png" alt="saving" />
                </div>
              </div>
            </div>
          </div>
        )}
      </Dashboard>
    </div>
  );
};

export default HomePage;
