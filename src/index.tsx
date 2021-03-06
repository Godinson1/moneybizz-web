import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/lexend";
import "semantic-ui-css/semantic.min.css";
import "./sass-styles/_global.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { MyErrorBoundary } from "./utilities";
import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyErrorBoundary>
        <Router>
          <App />
        </Router>
      </MyErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
