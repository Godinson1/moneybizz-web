import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

//Import components
import { Preloader, NotFound } from "./Components";
import { ViewportProvider } from "./utilities";
import { HomePage } from "./Pages";

const App = () => {
  return (
    <div className="App">
      <ViewportProvider>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/load" component={Preloader} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ViewportProvider>
    </div>
  );
};

export default App;
