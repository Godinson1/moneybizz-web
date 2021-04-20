import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useViewport } from "../../utilities";
import { small_screen_width } from "./index";
import "./navbar.scss";

const Navbar: FC = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    if (nav) {
      document.getElementById("myNav")!.style.width = "100%";
    } else {
      document.getElementById("myNav")!.style.width = "0%";
    }
  }, [nav]);

  const { width } = useViewport();

  return (
    <div>
      <div id="myNav" className="overlay">
        <div className="overlay-content">
          <div className="menu-content">Save</div>
          <div className="menu-content">Invest</div>
          <div className="menu-content">Stories</div>
          <div className="menu-content">Faqs</div>
          <div className="menu-content">Login</div>
          <div className="register-button">Create A Free Account</div>
        </div>
      </div>
      <div className="nav">
        <div className="flex-between">
          <div className="logo">MoneyBizz</div>
          <div className="menus">
            <div className="menu">Save</div>
            <div className="menu">Invest</div>
            <div className="menu">Stories</div>
            <div className="menu">Faqs</div>
            <Link id="link" to="/login">
              <div className="menu">Login</div>
            </Link>
            <Link id="link" to="/register">
              <div className="register-button">Create A Free Account</div>
            </Link>
            <div
              className={
                width < small_screen_width ? "menu-icon" : "menu-hidden"
              }
              onClick={() => setNav(!nav)}
            >
              {nav ? <span>&#10006;</span> : <span>&#9776;</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
