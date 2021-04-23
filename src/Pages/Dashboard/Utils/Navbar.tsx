import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import { NavbarProps } from "./interfaces";
import { useDispatch } from "react-redux";
import { setSidebarOpen } from "../../../redux";
import { small_screen_size } from "./constants";
import { useViewport } from "../../../utilities";
import "./util.scss";

const Navbar: FC<NavbarProps> = ({ mobile, title }) => {
  const dispatch = useDispatch();
  const { width } = useViewport();
  return (
    <div>
      <div className={mobile ? "navbar-mobile" : "navbar"}>
        <div className="header">
          <div>
            {width > small_screen_size && (
              <Icon
                onClick={() => dispatch(setSidebarOpen())}
                id="white nav-icon"
                className="nav-icon"
                size="big"
                name="bars"
              />
            )}
          </div>
          <div>
            <h2 id="white">{title}</h2>
          </div>
        </div>
        <div id="nav-avatar"></div>
      </div>
    </div>
  );
};

export default Navbar;
