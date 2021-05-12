import React, { FC, useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Pagination, PaginationProps } from "semantic-ui-react";
import dayjs from "dayjs";
import Dashboard from "../../Pages/Dashboard/Components";
import { formatNumber } from "../../utilities";

import "./notification.scss";

const Notification: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [allNotification, setAllNotification] = useState([]);
  const [activeClassName, setActiveClassName] = useState(1);
  const [page, setPage] = useState<number>(1);
  //const [pagination, setPagination] = useState<number>(10);

  const handleAll = () => {
    setActiveClassName(1);
  };

  const handleCredit = () => {
    setActiveClassName(2);
  };

  const handleDebit = () => {
    setActiveClassName(3);
  };

  const handleAjo = () => {
    setActiveClassName(4);
  };

  const handleMessage = () => {
    setActiveClassName(5);
  };

  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: PaginationProps
  ) => {
    setPage(data.activePage as number);
    const requestData = {
      page,
      //pagination,
    };
    console.log(requestData);
    console.log(data.activePage);
  };

  useEffect(() => {
    if (
      user.user &&
      user.user.data &&
      user.user.data.transactions &&
      user.user.data.notifications
    ) {
      const allData = user.user.data.notifications.concat(
        user.user.data.transactions
      );
      setAllNotification(allData);
    }
  }, [user.user]);

  return (
    <div>
      <Dashboard title="NOTIFICATION">
        <div className="auth-notification">
          <div className="custom-card">
            <div className="trans">
              <div>TRANSACTIONS</div>
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
                  <div
                    onClick={handleCredit}
                    className={`notification-header ${
                      activeClassName === 2 ? "active" : ""
                    }`}
                  >
                    CREDITS
                  </div>
                  <div
                    onClick={handleDebit}
                    className={`notification-header ${
                      activeClassName === 3 ? "active" : ""
                    }`}
                  >
                    DEBITS
                  </div>
                  <div
                    onClick={handleAjo}
                    className={`notification-header ${
                      activeClassName === 4 ? "active" : ""
                    }`}
                  >
                    AJO
                  </div>
                  <div
                    onClick={handleMessage}
                    className={`notification-header ${
                      activeClassName === 5 ? "active" : ""
                    }`}
                  >
                    MESSAGE
                  </div>
                </div>
                <div>
                  {allNotification.length < 0 && (
                    <Pagination
                      firstItem={null}
                      lastItem={null}
                      onPageChange={handlePageChange}
                      totalPages={allNotification.length}
                    />
                  )}
                </div>
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
                  ? "NO TRANSACTION RECORDED"
                  : "SEE MORE TRANSACTIONS"}
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Notification;
