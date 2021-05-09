import React from "react";
import Catch from "./functional-error-boundary";

import "./styles.css";

import { ERROR_HEADER } from "./constants";

type Props = {
  children: React.ReactNode;
};

const MyErrorBoundary = Catch(function MyErrorBoundary(
  props: Props,
  error?: Error
) {
  if (error) {
    return (
      <div className="error-screen">
        <div className="error">
          <div className="error-image">
            <img src="/images/conn.png" width="200" height="200" alt="error" />
          </div>
          <h2 className="header-error">{ERROR_HEADER}</h2>
          <p>
            We may be experiencing a technical problem. Ensure you have an
            active internet connection and reload page. if problem persist,
            kindly contact support +2348146961062.
          </p>
          <div
            onClick={() => window.location.reload()}
            className="button-reload"
          >
            Reload Page
          </div>
        </div>
      </div>
    );
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
});

export default MyErrorBoundary;
