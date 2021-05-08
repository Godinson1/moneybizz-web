import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import "./savefeatures.scss";

const SaveFeatures: FC = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const urlData = url.substring(url.lastIndexOf("/")).slice(1);
  const colors = [
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
  ];
  const panes = [
    {
      menuItem: "Bizz Bank",

      render: () => (
        <Tab.Pane
          onclick={() => history.push("/save/bizzbank")}
          attached={false}
        >
          Tab 1 Content
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Ajo",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: "Safelock",
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
    {
      menuItem: "Targets",
      render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
    },
    {
      menuItem: "Coming Soon",
      render: () => <Tab.Pane attached={false}>Tab 5 Content</Tab.Pane>,
    },
  ];
  return (
    <div>
      <Dashboard
        title={
          urlData === "ajo"
            ? "AJO"
            : urlData === "safelock"
            ? "SAFELOCK"
            : urlData === "bizzbank"
            ? "BIZZBANK"
            : urlData === "targets"
            ? "TARGETS"
            : urlData === "soon"
            ? "COMING SOON"
            : ""
        }
      >
        <div className="auth-notification">
          <Tab
            className="tab"
            menu={{ colors: colors, secondary: true, pointing: true }}
            panes={panes}
          />
        </div>
      </Dashboard>
    </div>
  );
};

export default SaveFeatures;
