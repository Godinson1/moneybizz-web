import React, { Suspense, lazy } from "react";
//import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

//Import components
import { Preloader, NotFound } from "./Components";
import { ViewportProvider } from "./utilities";
import axios from "axios";
import JwtDecode from "jwt-decode";
import { getUserDetail, store, logoutUser } from "./redux";
import AuthRoute from "./AuthRoute";

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
const SaveFeatures = lazy(() => import("./Authenticated-Pages/Save-Features"));

axios.defaults.baseURL = "https://moneybizz.herokuapp.com";
//axios.defaults.baseURL = "http://localhost:5000";

interface jwtType {
  exp: number;
  token: string;
}

const App = () => {
  const token = localStorage.BizzToken;
  if (token) {
    const decoded = JwtDecode<jwtType>(token);
    if (decoded.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
      window.location.href = "/login";
    } else {
      axios.defaults.headers.common["mb-token"] = token;
      store.dispatch(getUserDetail());
    }
  }

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
            <AuthRoute path="/home" component={Auth_HomePage} />
            <AuthRoute exact path="/save" component={Saving} />
            <AuthRoute exact path="/save/:id" component={SaveFeatures} />
            <AuthRoute exact path="/invest" component={Invest} />
            <AuthRoute exact path="/notification" component={Notification} />
            <AuthRoute exact path="/account" component={Account} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ViewportProvider>
    </div>
  );
};

export default App;
