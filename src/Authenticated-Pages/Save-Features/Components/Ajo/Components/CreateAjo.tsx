import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { AJO_OPTIONS } from "./constants";
import "./styles.scss";
import "../../styles.scss";

const CreateAjo = () => {
  const history = useHistory();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div className="modal-div">
        <div className="flex-between">
          <div></div>
          <div className="icon" onClick={() => history.goBack()}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="info-header">
            <h2>Create Ajo</h2>
            <div className="desc">
              Collectively save funds with other bizzers for your desired need.
            </div>
          </div>
          {AJO_OPTIONS.map((data) => (
            <div className="safelock-options">
              <div>
                {" "}
                <Icon color="blue" name="circle outline" />
                {data.type} Savings
              </div>
              <div> Ajo</div>
            </div>
          ))}
          <div>
            <button onClick={() => history.goBack()} className="auth-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAjo;
