import React, { FC } from "react";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
//import { SidebarTypes } from "./interfaces";
import { SIDEBAR_LINKS } from "./constants";
import "./util.scss";

const Sidebar: FC = () => {
  return (
    <div className="sidebar-dash">
      <div className="header">
        <div>
          <h2 id="white">{"MoneyBizz"}</h2>
        </div>
        <div className="menu-links">
          {SIDEBAR_LINKS.map((data) => {
            const { path, exact, icon, title } = data;
            return (
              <NavLink activeClassName="side-link" to={path} exact={exact}>
                <div className="flex">
                  <Icon size="big" name={icon as SemanticICONS | undefined} />
                  <div>{title}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="flex-logout tooltip">
          <Icon size="big" name="power" />
          <span className="tooltiptext">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
