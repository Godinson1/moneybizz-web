import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Route, useHistory, useRouteMatch, Link } from "react-router-dom";
import { Icon, Button, Header, Modal, Image } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import "./homepage.scss";

const HomePage: FC = () => {
  const state = useSelector((state: RootStateOrAny) => state.dashboard);
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <div>
      <Dashboard title="HOMEPAGE">
        {state.isLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-home">
            <div className="flex-between">
              <div>
                <Icon id="refresh" size="big" name="refresh" />
              </div>
              <Link to={`${url}/save`}>
                <div className="quick-save-btn">+ Quick Save</div>
              </Link>
            </div>
            <div className="header-home">
              <div className="conn">Helloword</div>
              <div className="conn">Helloword</div>
              <div className="conn">Helloword</div>
              <div className="conn">Helloword</div>
            </div>
            <div className="home-flex">
              <div className="todo-container">
                <div className="dash-title">Todo</div>
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
              <div className="info-container">
                <div className="dash-title">Build Your Savings</div>
                <div className="banner"></div>
                <div className="dash-title">Download the App</div>
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
                <div className="dash-title">Build Your Savings</div>
                <div className="banner"></div>
              </div>
            </div>
          </div>
        )}
      </Dashboard>
      <Route
        path={`${url}/save`}
        children={({ match }) => {
          return (
            <Modal
              onClose={() => console.log("hhh")}
              onOpen={() => console.log("hhh")}
              open={Boolean(match)}
              trigger={<Button>Show Modal</Button>}
            >
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Image
                  size="medium"
                  src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                  wrapped
                />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => history.goBack()}>
                  Nope
                </Button>
                <Button
                  content="Yep, that's me"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => history.goBack()}
                  positive
                />
              </Modal.Actions>
            </Modal>
          );
        }}
      />
    </div>
  );
};

export default HomePage;
