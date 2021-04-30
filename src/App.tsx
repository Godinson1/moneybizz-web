import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

//Import components
import { Preloader, NotFound } from "./Components";
import { ViewportProvider } from "./utilities";
import axios from "axios";

const HomePage = lazy(() => import("./Pages/HomePage"));
const Login = lazy(() => import("./Pages/Authentication/Login"));
const Register = lazy(() => import("./Pages/Authentication/Register"));
const VerifyEmail = lazy(() => import("./Pages/Authentication/VerifyEmail"));
const ResetPassword = lazy(
  () => import("./Pages/Authentication/ResetPassword")
);
const Activate = lazy(() => import("./Pages/Authentication/Activate"));
const Auth_HomePage = lazy(() => import("./Authenticated-Pages/HomePage"));
const Saving = lazy(() => import("./Authenticated-Pages/Saving"));
const Invest = lazy(() => import("./Authenticated-Pages/Invest"));
const Account = lazy(() => import("./Authenticated-Pages/Account"));
const Notification = lazy(() => import("./Authenticated-Pages/Notification"));

axios.defaults.baseURL = "https://moneybizz.herokuapp.com";

const App = () => {
  return (
    <div className="App">
      <ViewportProvider>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/load" component={Preloader} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verify-email" component={VerifyEmail} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/activate" component={Activate} />
            <Route exact path="/home" component={Auth_HomePage} />
            <Route exact path="/save" component={Saving} />
            <Route exact path="/invest" component={Invest} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ViewportProvider>
    </div>
  );
};

export default App;
