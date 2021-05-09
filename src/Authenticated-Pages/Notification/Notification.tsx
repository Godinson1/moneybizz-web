import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import dayjs from "dayjs";
import Dashboard from "../../Pages/Dashboard/Components";
import { formatNumber } from "../../utilities";

import "./notification.scss";

const Notification: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  return (
    <div>
      <Dashboard title="NOTIFICATION">
        <div className="auth-notification">
          <div className="custom-card">
            <div>TRANSACTIONS</div>
            <div className="flex-header">
              <div className="notification-header active">ALL</div>
              <div className="notification-header">CREDITS</div>
              <div className="notification-header">DEBITS</div>
              <div className="notification-header">AJO</div>
            </div>
            {user.user &&
              user.user.data &&
              user.user.data.transactions.map((data: any, index: number) => (
                <div key={index} className="flex-between">
                  <div className="flex-header">
                    <div className="status-color"></div>
                    <div>
                      Quicksave Deposit [MB]. (Payment ID: {""}
                      {data.ref}){" "}
                      {dayjs(data.createdAt).format("ddd, MMM D, YYYY h:mm A")}{" "}
                      GMT
                    </div>
                  </div>
                  <div className="amount-base">
                    {formatNumber(parseInt(data.amount))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Notification;
