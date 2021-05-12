import React, { FC } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { useRouteMatch, Link, Route } from "react-router-dom";
import { Icon, Popup } from "semantic-ui-react";
import Dashboard from "../../Pages/Dashboard/Components";
import { Save } from "../../Components";
import { AutoSaveSettings } from "../Save-Features/Components";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import {
  Header,
  HomeInfo,
  Todo,
  SendFund,
  RequestFund,
  AddBVN,
  ReferEarn,
} from "./Components";
import { usePrepareLink, getChildRoute } from "../../utilities";
import { getUserDetail } from "../../redux";
import { HOMEPAGE } from "./constants";

import "./homepage.scss";

const HomePage: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [open, setOpen] = React.useState(true);
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const saveLink = usePrepareLink(getChildRoute("/quicksave"));

  return (
    <div>
      <Dashboard title={HOMEPAGE}>
        {user.isUserLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-home">
            <div className="flex-between">
              <div onClick={() => dispatch(getUserDetail())}>
                <Popup
                  content="Refresh"
                  trigger={<Icon id="refresh" size="big" name="refresh" />}
                ></Popup>
              </div>
              <div className="flex-home-btns">
                <Link to={`${url}/request_fund`} className="link">
                  <div
                    onClick={() => setOpen(!open)}
                    className="quick-buzz-btn"
                  >
                    Request Fund
                  </div>
                </Link>
                <Link to={`${url}/send_fund`} className="link">
                  <div
                    onClick={() => setOpen(!open)}
                    className="quick-buzz-btn"
                  >
                    Send Fund
                  </div>
                </Link>
                <Link to={`${url}/quicksave`} className="link">
                  <div
                    onClick={() => setOpen(!open)}
                    className="quick-save-btn"
                  >
                    + Quick Save
                  </div>
                </Link>
              </div>
            </div>
            <div className="header-home">
              <Header />
            </div>
            <div className="home-flex">
              <Todo />
              <HomeInfo />
            </div>
          </div>
        )}
      </Dashboard>
      <Route
        path={saveLink.pathname}
        children={({ match }) => {
          console.log(match);
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <Save data="home" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/request_fund`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <RequestFund />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/send_fund`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <SendFund />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/identity`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <AddBVN />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/autosave_settings`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <AutoSaveSettings />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
      <Route
        path={`${url}/refer&earn`}
        children={({ match }) => {
          return (
            <div>
              {match && (
                <div id="show-modal-picture">
                  <div className="modal-container">
                    <div>
                      <ReferEarn />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default HomePage;
