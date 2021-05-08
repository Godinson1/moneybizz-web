import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getIndex, getTabString, handleTabRouting, panes } from "./index";
import { Tab, TabProps } from "semantic-ui-react";
import "./savefeatures.scss";

const SaveFeatures: FC = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const urlData = url.substring(url.lastIndexOf("/")).slice(1);
  const handleTabChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: TabProps
  ) => {
    console.log(data.activeIndex);
    handleTabRouting(data.activeIndex as number, history);
  };

  return (
    <div>
      <Dashboard title={getTabString(urlData)}>
        <div className="auth-notification">
          <Tab
            onTabChange={handleTabChange}
            className="tab"
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            defaultActiveIndex={getIndex(urlData)}
          />
        </div>
      </Dashboard>
    </div>
  );
};

export default SaveFeatures;
