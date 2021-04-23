import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { Sidebar, Navbar, MobileSidebar } from "../Utils";
import { _layoutTypes } from "./types";
import { SIDEBAR_LINKS } from "../Utils/constants";
import "./dashboard.scss";
import "../Utils/util.scss";

const Dashboard: FC<_layoutTypes> = ({ children, title }) => {
  const state = useSelector((state: RootStateOrAny) => state.dashboard);

  return (
    <div>
      <div className="dashboard-main">
        <div
          className={
            state.isSidebarOpen ? "sidebar-dash-mobile" : "sidebar-dash"
          }
        >
          {state.isSidebarOpen ? <MobileSidebar /> : <Sidebar />}
        </div>
        <div className="dashboard-content">
          <div className="navs">
            <Navbar title={title} mobile={state.isSidebarOpen} />
          </div>
          <div className={state.isSidebarOpen ? "main-mobile" : "main"}>
            {children}
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="flex-footer">
          {SIDEBAR_LINKS.map((data) => {
            const { path, exact, icon } = data;
            return (
              <NavLink activeClassName="side-link" to={path} exact={exact}>
                <div className="icon">
                  <Icon size="big" name={icon as SemanticICONS | undefined} />
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
