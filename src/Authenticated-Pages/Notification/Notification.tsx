import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import { Tab } from "semantic-ui-react";
import "./notification.scss";

const Notification: FC = () => {
  const panes = [
    {
      menuItem: "Tab 1",
      render: () => (
        <Tab.Pane loading attached={false}>
          Tab 1 Content
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Tab 2",
      render: () => (
        <Tab.Pane loading attached={false}>
          Tab 2 Content
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Tab 3",
      render: () => (
        <Tab.Pane loading attached={false}>
          Tab 3 Content
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div>
      <Dashboard title="NOTIFICATION">
        <div className="auth-notification">
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          <h3>Notification</h3>
          <div className="text-base">
            <p>
              Kindly check back for this feature as it is currently in
              development...
            </p>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Notification;
