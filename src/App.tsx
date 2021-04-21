import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

//Import components
import { Preloader, NotFound } from "./Components";
import { ViewportProvider } from "./utilities";
import { HomePage } from "./Pages";

const Login = lazy(() => import("./Pages/Authentication/Login"));
const Register = lazy(() => import("./Pages/Authentication/Register"));
const VerifyEmail = lazy(() => import("./Pages/Authentication/VerifyEmail"));
const ResetPassword = lazy(
  () => import("./Pages/Authentication/ResetPassword")
);
const Activate = lazy(() => import("./Pages/Authentication/Activate"));

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
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ViewportProvider>
    </div>
  );
};

export default App;
