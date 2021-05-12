import React, { FC, useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import dayjs from "dayjs";
import Dashboard from "../../Pages/Dashboard/Components";
import { formatNumber } from "../../utilities";

import "../Notification/notification.scss";

const Notification: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [allNotification, setAllNotification] = useState([]);
  const [activeClassName, setActiveClassName] = useState(1);

  const handleAll = () => {
    setActiveClassName(1);
  };

  useEffect(() => {
    if (user.user && user.user.data && user.user.data.connections) {
      const allData = user.user.data.connections;
      setAllNotification(allData);
    }
  }, [user.user]);

  return (
    <div>
      <Dashboard title="MY CONNECTIONS">
        <div className="auth-notification">
          <div className="custom-card">
            <div className="trans">
              <div>CONNECTIONS</div>
              <div className="flex-header">
                <div className="header-options">
                  <div
                    onClick={handleAll}
                    className={`notification-header ${
                      activeClassName === 1 ? "active" : ""
                    }`}
                  >
                    ALL
                  </div>
                </div>
                <div></div>
              </div>
              {allNotification.map((data: any, index: number) => (
                <div key={index} className="flex-between">
                  <div className="flex-header">
                    <div className="status-color"></div>
                    <div>
                      {data.type === "request_fund" ? (
                        <div>
                          {data.message} on{" "}
                          {dayjs(data.createdAt).format(
                            "ddd, MMM D, YYYY h:mm A"
                          )}{" "}
                          WAT
                        </div>
                      ) : (
                        <div>
                          Quicksave Deposit [MB]. (Payment ID: {""}
                          {data.ref}){" "}
                          {dayjs(data.createdAt).format(
                            "ddd, MMM D, YYYY h:mm A"
                          )}{" "}
                          WAT
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="amount-base">
                    {data.type === "request_fund" ? (
                      ""
                    ) : (
                      <div>
                        {formatNumber(parseInt(data.amount.slice(0, -2)))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-bottom-card">
              <div className="secondary-color">
                {allNotification.length === 0
                  ? "NO CONNECTION RECORDED"
                  : "SEE MORE CONNECTIONS"}
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Notification;
