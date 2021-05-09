import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useHistory, Link, Route, useRouteMatch } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { formatNumber, usePrepareLink, getChildRoute } from "../../utilities";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import Dashboard from "../../Pages/Dashboard/Components";
import { Save } from "../../Components";
import "./saving.scss";
import "../HomePage/homepage.scss";

const Saving: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const history = useHistory();
  const { url } = useRouteMatch();
  const saveLink = usePrepareLink(getChildRoute("/quicksave"));

  return (
    <div>
      <Dashboard title="SAVINGS">
        {user.isUserLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-saving">
            <div className="save-header">
              <div className="total-balance">
                {user.user && user.user.data && (
                  <div>
                    <div>
                      <h2>Total Balance</h2>
                    </div>
                    <div className="tbs">
                      {formatNumber(user.user.data.details.total_balance)}
                    </div>
                  </div>
                )}
              </div>
              <Link to={`${url}/quicksave`}>
                <div className="build">
                  <div className="dash-title">Build Your Saving</div>
                  <div className="banner">
                    <img src="images/wallet.png" alt="saving" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="save-options">
              <div onClick={() => history.push("/save/b/bizzbank")}>
                <Icon name="th" size="big" />
                <h2>BizzBank</h2>
                <span>
                  Strictly save automatically; Daily, Weekly, Monthly.
                </span>
              </div>
              <div onClick={() => history.push("/save/b/ajo")}>
                <Icon name="save" size="big" />
                <h2>Ajo</h2>
                <span>
                  Collectively save funds with other bizzers for your desired
                  need.
                </span>
              </div>
              <div onClick={() => history.push("/save/b/safelock")}>
                <Icon name="lock" size="big" />
                <h2>Safelock</h2>
                <span>
                  Lock funds to avoid temptations and withdraw at set dates.
                </span>
              </div>
              <div onClick={() => history.push("/save/b/targets")}>
                <Icon name="rocket" size="big" />
                <h2>Targets</h2>
                <span>Reach your unique individual saving goals.</span>
              </div>
              <div onClick={() => history.push("/save/b/soon")}>
                <Icon name="osi" size="big" />
                <h2>Coming Soon</h2>
                <span>
                  See MoneyBizz features that will be available soonest.
                </span>
              </div>
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
                      <Save data="save" />
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

export default Saving;
