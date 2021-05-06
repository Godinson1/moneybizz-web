import React, { FC, useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { Sidebar, Navbar, MobileSidebar } from "../Utils";
import { _layoutTypes } from "./types";
import { SIDEBAR_LINKS } from "../Utils/constants";
import { clearData } from "../../../redux";
import "./dashboard.scss";
import "../Utils/util.scss";

const Dashboard: FC<_layoutTypes> = ({ children, title }) => {
  const state = useSelector((state: RootStateOrAny) => state.dashboard);
  const user = useSelector((state: RootStateOrAny) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.success) {
      setTimeout(() => {
        dispatch(clearData());
      }, 5000);
    }
  }, [user.success, dispatch]);

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
            {user.success && (
              <div className="message-show">
                <span>Profile photo updated successfully.</span>
              </div>
            )}
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
                <div key={icon} className="icon">
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
