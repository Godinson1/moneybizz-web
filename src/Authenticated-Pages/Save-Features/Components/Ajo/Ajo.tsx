import React, { FC, useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { useRouteMatch, Route, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { AjoInfo, CreateAjo } from "./Components";
import { formatNumber } from "../../../../utilities";
import { AJO } from "./Components/constants";
import { safelockType } from "../types";

//import "../../Save-Features/savefeatures.scss";
import "../styles.scss";

const Ajo: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const history = useHistory();
  const [allAjo, setAllAjo] = useState<Array<safelockType>>([]);
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
    const filtereOngoing = AJO.filter((ajo) => ajo.status === "ongoing");
    setAllAjo(filtereOngoing);
  }, []);

  const handleSort = (status: string) => {
    const filtereCompleted = AJO.filter((ajo) => ajo.status === status);
    setAllAjo(filtereCompleted);
  };

  return (
    <div>
      <div className="card-container">
        <div className="first-card">
          <div className="custom-card">
            <div className="custom-card-header">
              <div>AJO BALANCE</div>
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
                <Icon id="iconed" name="plus" color="blue" /> Create Ajo
              </div>
              <div onClick={() => history.push(`${url}/learn_safelock`)}>
                <Icon id="iconed" name="info circle" color="blue" /> What is
                Ajo?
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
              <div>MY AJO</div>
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
            {allAjo.map((data) => {
              const { name, amount, interest } = data;
              return (
                <div className="active-safelock">
                  <div className="flex-content first">
                    <div className="icon">
                      <Icon name="save" size="big" color="blue" />
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
                      <AjoInfo />
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
                      <CreateAjo />
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

export default Ajo;
