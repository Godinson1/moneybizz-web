import React, { FC, useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useRouteMatch, Route, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { SafelockInfo, CreateSafelock } from "./Components";
import { formatNumber } from "../../../../utilities";
import { SAFELOCK } from "../constants";
import { safelockType } from "../types";

//import "../../Save-Features/savefeatures.scss";
import "../styles.scss";

const Safelock: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const history = useHistory();
  const [allSafelock, setAllSafelock] = useState<Array<safelockType>>([]);
  const [activeClassName, setActiveClassName] = useState(1);

  const { url } = useRouteMatch();

  const handleOngoing = () => {
    setActiveClassName(1);
    handleSort("ongoing");
  };

  const handleCompleted = () => {
    setActiveClassName(2);
    handleSort("completed");
  };

  useEffect(() => {
    const filtereOngoing = SAFELOCK.filter(
      (safelock) => safelock.status === "ongoing"
    );
    setAllSafelock(filtereOngoing);
  }, []);

  const handleSort = (status: string) => {
    const filtereCompleted = SAFELOCK.filter(
      (safelock) => safelock.status === status
    );
    setAllSafelock(filtereCompleted);
  };

  return (
    <div>
      <div className="card-container">
        <div className="first-card">
          <div className="custom-card">
            <div className="custom-card-header">
              <div>SAFELOCK BALANCE</div>
              {user.user && user.user.data && (
                <div className="flex-between">
                  <div className="amount-text">{formatNumber(0)}</div>
                </div>
              )}
            </div>
            <div className="flex-bottom-card">
              <div
                onClick={() => history.push(`${url}/selectsafelockduration`)}
              >
                <Icon id="iconed" name="plus" color="blue" /> &nbsp; Create a
                Safelock
              </div>
              <div onClick={() => history.push(`${url}/learn_safelock`)}>
                <Icon id="iconed" name="info circle" color="blue" /> &nbsp; What
                is Safelock?
              </div>
            </div>
          </div>
        </div>
        <div className="second-card">
          <div className="custom-card-right">
            <div>INTEREST RATE</div>
            <div className="interest">6% - 13%</div>
            <div>Per Annum</div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="first-card">
          <div className="custom-card">
            <div className="trans">
              <div>MY SAFELOCKS</div>
              <div className="flex-header">
                <div className="header-options">
                  <div
                    onClick={handleOngoing}
                    className={`safelock-header ${
                      activeClassName === 1 ? "active" : ""
                    }`}
                  >
                    Ongoing
                  </div>
                  <div
                    onClick={handleCompleted}
                    className={`safelock-header ${
                      activeClassName === 2 ? "active" : ""
                    }`}
                  >
                    Completed
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            {allSafelock.map((data) => {
              const { name, amount, interest } = data;
              return (
                <div className="active-safelock">
                  <div className="flex-content first">
                    <div>
                      <Icon name="lock" size="big" color="blue" />
                    </div>
                    <div>
                      <div>{name}</div>
                      <div>Title</div>
                    </div>
                  </div>
                  <div className="flex-content">
                    <div>
                      <div>{formatNumber(parseInt(amount))}</div>
                      <div>Amount</div>
                    </div>
                  </div>
                  <div className="flex-content">
                    <div>
                      <div>{formatNumber(parseInt(interest))}</div>
                      <div>Interest Earned</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
      <Route
        path={`${url}/learn_safelock`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <SafelockInfo />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/selectsafelockduration`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <CreateSafelock />
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

export default Safelock;
