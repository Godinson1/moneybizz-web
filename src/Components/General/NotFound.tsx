import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./general.scss";

const NotFound: FC = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar />
      <div className="notfound">
        <img width="300" height="300" src="images/notf.jpg" alt="notfound" />
        <h1>PAGE NOT FOUND</h1>
        <div className="notfound-message">
          <p>
            Hi there &#128075;! Seems the page you are looking for does not
            exist. You can either go back or try searching something on google.
          </p>
        </div>
        <div className="flex">
          <div onClick={() => history.goBack()} className="go-home">
            &#8592; Go Back
          </div>
          <div
            onClick={() => window.open("https://www.google.com", "_")}
            className="go-home"
          >
            Google &#8594;
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
