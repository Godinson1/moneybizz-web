import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Icon } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import "./homepage.scss";

const HomePage: FC = () => {
  const state = useSelector((state: RootStateOrAny) => state.dashboard);
  return (
    <div>
      <Dashboard title="HOMEPAGE">
        {state.isLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-home">
            <div className="flex-between">
              <div>
                <Icon size="big" name="refresh" />
              </div>
              <div className="quick-save-btn">+ Quick Save</div>
            </div>
            <div className="header-container">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="home-flex">
              <div>
                <div>Todo</div>
                <div className="auth-options">
                  <Icon size="small" id="icon" name="percent" />
                  <div></div>
                </div>
                <div className="auth-options">
                  <Icon size="small" id="icon" name="percent" />
                  <div></div>
                </div>
                <div className="auth-options">
                  <Icon size="small" id="icon" name="percent" />
                  <div></div>
                </div>
              </div>
              <div>
                <div>Build Your Savings</div>
                <div className="banner"></div>
                <div>Download the App</div>
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
                <div>Build Your Savings</div>
                <div className="banner"></div>
              </div>
            </div>
          </div>
        )}
      </Dashboard>
    </div>
  );
};

export default HomePage;
