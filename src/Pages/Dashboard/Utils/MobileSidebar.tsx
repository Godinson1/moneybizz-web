import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { SIDEBAR_LINKS } from "./constants";
import { logoutUser } from "../../../redux";
import "./util.scss";

const MobileSidebar: FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="sidebar-dash-mobile">
        <div className="header">
          <div>
            <h2 id="white">MB</h2>
          </div>
          <div className="menu-links">
            {SIDEBAR_LINKS.map((data) => {
              const { path, exact, icon, title } = data;
              return (
                <NavLink activeClassName="side-link" to={path} exact={exact}>
                  <div className="flex tooltip">
                    <Icon size="big" name={icon as SemanticICONS | undefined} />
                    <span className="tooltiptext">{title}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => dispatch(logoutUser())}
          className="flex-logout tooltip"
        >
          <Icon size="big" name="power" />
          <span className="tooltiptext">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
