import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { NavbarProps } from "./interfaces";
import { useDispatch } from "react-redux";
import { Markup } from "interweave";
import { setSidebarOpen } from "../../../redux";
import { small_screen_size } from "./constants";
import { useViewport, getUserMessage } from "../../../utilities";
import "./util.scss";

const Navbar: FC<NavbarProps> = ({ mobile, title }) => {
  const user = useSelector((state: RootStateOrAny) => state.user.user);

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
          {user && user.data && (
            <div>
              <h2 id="white">
                {title === "HOMEPAGE"
                  ? `${user.data.details.firstName},`
                  : title}
              </h2>
              {title === "HOMEPAGE" ? (
                <div className="greeting">
                  <Markup content={getUserMessage()} />{" "}
                </div>
              ) : title === "SAVINGS" &&
                user.data.details.total_balance === 0 ? (
                <div className="greeting">Begin your financial journey 💪.</div>
              ) : title === "SAVINGS" ? (
                <div className="greeting">
                  You are doing well, Keep on moving on 💪.
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        {user && user.data && (
          <Link to="/account" id="link">
            <div className="avatar-banter">
              {user.data.details.profile_photo ? (
                <img src={user.data.details.profile_photo} alt="user" />
              ) : (
                <span>
                  {user.data.details.firstName.slice(0, 1)}
                  {user.data.details.lastName.slice(0, 1)}
                </span>
              )}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
