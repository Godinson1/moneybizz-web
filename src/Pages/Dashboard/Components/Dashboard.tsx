import React, { FC, useState } from "react";
import { Sidebar, Navbar, MobileSidebar } from "../Utils";
import { _layoutTypes } from "./types";
import "./dashboard.scss";
import "../Utils/util.scss";

const Dashboard: FC<_layoutTypes> = ({ children, title }) => {
  const [mobile, setMobile] = useState<boolean>(false);
  return (
    <div>
      <div className="dashboard-main">
        <div className={mobile ? "sidebar-dash-mobile" : "sidebar-dash"}>
          {mobile ? <MobileSidebar /> : <Sidebar />}
        </div>
        <div className="dashboard-content">
          <div className="navs">
            <Navbar title={title} setMobile={setMobile} mobile={mobile} />
          </div>
          <div className={mobile ? "main-mobile" : "main"}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
