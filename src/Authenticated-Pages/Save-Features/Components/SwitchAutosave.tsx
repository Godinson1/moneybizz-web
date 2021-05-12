import React, { useEffect, useState } from "react";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { Icon, Checkbox } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { switchOffAutosave, switchOnAutosave } from "../../../redux";

import "./styles.scss";

const SwitchAutosave = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [autosave, setAutosave] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const AutosaveState = localStorage.getItem("autosave");

  console.log(AutosaveState);

  const handleSwitchOffAutosave = () => {
    const switchState = AutosaveState === "true" ? true : false;
    const switchData = {
      active: AutosaveState === "true" ? true : false,
    };
    if (switchState === true) {
      dispatch(switchOnAutosave(history));
    } else {
      dispatch(switchOffAutosave(switchData, history));
    }
  };

  const handleSwitchAutosave = () => {
    setAutosave(!autosave);
    localStorage.setItem("autosave", `${!autosave}`);
  };

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
            <h2>AutoSave</h2>
            <div className="desc">
              You can turn ON or OFF your AutoSave to your Bizzbank wallet
              below.
            </div>
          </div>
          <div className="show-autosave">
            <div>
              <Checkbox
                onChange={handleSwitchAutosave}
                checked={AutosaveState === "true" ? true : false}
                toggle
              />
            </div>
            <div>
              {AutosaveState === "true"
                ? "Turn off Autosave"
                : "Turn on Autosave"}
            </div>
          </div>
          <div>
            <button
              onClick={handleSwitchOffAutosave}
              disabled={user.isAutosaveSettingLoading}
              className="auth-button"
            >
              {user.isAutosaveSettingLoading ? "Loading..." : " Save Status"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchAutosave;
