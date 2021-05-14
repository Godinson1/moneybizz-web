import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { formatNumber } from "../../../utilities";
import {
  HOME_HEADER,
  TOTAL_BALANCE,
  TOTAL_INVESTMENT,
  AVAILABLE_BALANCE,
  CONNECTIONS,
} from "../constants";
import "../homepage.scss";

const Header = () => {
  const showBalanceState = localStorage.getItem("showBalance");
  const user = useSelector((state: RootStateOrAny) => state.user);

  return (
    <div>
      {HOME_HEADER.map((data) => {
        const { title, className } = data;
        return (
          <div className="conn">
            <div className={className}>
              <div className="flex-start">
                <div>{title}</div>
                {showBalanceState === "true" ? (
                  <div>
                    {user.user && user.user.data ? (
                      <div>
                        {title === TOTAL_BALANCE ? (
                          <div>
                            {formatNumber(user.user.data.details.total_balance)}
                          </div>
                        ) : title === TOTAL_INVESTMENT ? (
                          <div>{formatNumber(0)}</div>
                        ) : title === CONNECTIONS ? (
                          <div>{user.user.data.connections.length}</div>
                        ) : title === AVAILABLE_BALANCE ? (
                          <div>
                            {formatNumber(
                              user.user.data.details.available_balance
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      <div>-------</div>
                    )}
                  </div>
                ) : (
                  <div>********</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
