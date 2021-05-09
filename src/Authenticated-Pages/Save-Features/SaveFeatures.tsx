import React, { FC } from "react";
import Dashboard from "../../Pages/Dashboard/Components";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  getIndex,
  getTabString,
  handleTabRouting,
  panes,
  renderPage,
} from "./index";
import { Tab, TabProps, Icon, Popup } from "semantic-ui-react";
import { useViewport } from "../../utilities";
import "./savefeatures.scss";

const SaveFeatures: FC = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { width } = useViewport();

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
        <div className="auth-saving-features">
          {width > 978 ? (
            <Tab
              onTabChange={handleTabChange}
              className="tab"
              menu={{ secondary: true, pointing: true }}
              panes={panes}
              color="blue"
              defaultActiveIndex={getIndex(urlData)}
            />
          ) : (
            <div>
              <div onClick={() => history.goBack()}>
                <Popup
                  content="Go back"
                  trigger={
                    <Icon
                      size="big"
                      id="icon-back"
                      name="long arrow alternate left"
                    />
                  }
                />
              </div>
              {renderPage(urlData)}
            </div>
          )}
        </div>
      </Dashboard>
    </div>
  );
};

export default SaveFeatures;
