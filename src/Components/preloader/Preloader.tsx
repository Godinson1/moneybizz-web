import React, { FC } from "react";
import "./preloader.scss";

const Preloader: FC = () => {
  return (
    <div>
      <div className="preloader">
        <div className="preloader-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
