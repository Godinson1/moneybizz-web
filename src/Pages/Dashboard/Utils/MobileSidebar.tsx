import React, { FC } from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { SIDEBAR_LINKS } from "./constants";
import "./util.scss";

const MobileSidebar: FC = () => {
  return (
    <div>
      <div className="sidebar-dash-mobile">
        <div className="header">
          <div>
            <h2 id="white">MB</h2>
          </div>
          <div className="menu-links">
            {SIDEBAR_LINKS.map((data) => {
              const { path, exact, icon } = data;
              return (
                <NavLink activeClassName="side-link" to={path} exact={exact}>
                  <div className="flex">
                    <Icon size="big" name={icon as SemanticICONS | undefined} />
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
