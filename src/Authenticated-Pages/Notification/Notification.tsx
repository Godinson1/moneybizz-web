import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import "./notification.scss";

const Notification: FC = () => {
  return (
    <div>
      <Dashboard title="NOTIFICATION">
        <div className="auth-invest">
          <h3>This is the notification page</h3>
        </div>
      </Dashboard>
    </div>
  );
};

export default Notification;
