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
          <h2 className="header-error">{ERROR_HEADER}</h2>
          <h4
            className="error-message"
            onClick={() => window.location.reload()}
          >
            {" "}
            &#8635; Reload Page
          </h4>
        </div>
      </div>
    );
  } else {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
});

export default MyErrorBoundary;
