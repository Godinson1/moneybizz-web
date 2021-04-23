import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import { NavbarProps } from "./interfaces";
import "./util.scss";

const Navbar: FC<NavbarProps> = ({ setMobile, mobile, title }) => {
  return (
    <div>
      <div className={mobile ? "navbar-mobile" : "navbar"}>
        <div className="header">
          <div>
            <Icon
              onClick={() => setMobile(!mobile)}
              id="white"
              size="big"
              name="bars"
            />
          </div>
          <div>
            <h1 id="white">{title}</h1>
          </div>
        </div>
        <div id="nav-avatar"></div>
      </div>
    </div>
  );
};

export default Navbar;
