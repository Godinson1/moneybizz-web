import React from "react";
import "./preloader.scss";

const PreloaderMain = () => {
  return (
    <div>
      <div className="loader-container">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderMain;
