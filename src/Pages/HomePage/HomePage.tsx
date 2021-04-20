import React, { FC } from "react";
import { Icon } from "semantic-ui-react";
import { Navbar } from "../../Components";
import "./homepage.scss";

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="home-header">
        <div>
          <h1>Making Financial Matters Easy & Peasy</h1>
          <p>
            A financial app that helps users save, invest in a hassle-free
            manner while also sending money to loved ones.
          </p>
          <div className="register-button-home">Create A Free Account</div>
          <div className="flex-start">
            <div className="mobile-button">
              <div>
                <Icon name="apple" size="big" />
              </div>
              <div>
                Download on the <br /> App Store
              </div>
            </div>
            <div className="mobile-button">
              <div>
                <Icon name="google play" size="big" color="blue" />
              </div>
              <div>
                Get it on <br /> Google Play
              </div>
            </div>
          </div>
        </div>
        <div className="picture-holder">
          <div className="fadein">
            <img id="f3" src="images/happy.jpeg" alt="one" />
            <img id="f2" src="images/men.jpeg" alt="two" />
            <img id="f1" src="images/lady.jpeg" alt="three" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
