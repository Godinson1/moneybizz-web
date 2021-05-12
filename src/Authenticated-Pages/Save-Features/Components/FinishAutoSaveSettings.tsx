import React, { useEffect, useState } from "react";
import { Icon, Dropdown } from "semantic-ui-react";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  dayOptions,
  timeOptions,
  fundsOptions,
  startTimeOptions,
  monthOptions,
} from "./constants";
import { dropdownTypes, dropdownSetStateType } from "./types";
import { updateAutosaveSettings } from "../../../redux";
import { getMinuteHour } from "../../../utilities";
import "./styles.scss";

const FinishAutoSaveSettings = ({
  code,
  setFinish,
  amount,
}: {
  code: string;
  setFinish: Function;
  amount: string;
}) => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [weekday, setWeekday] = useState<dropdownTypes>();
  const [monthday, setMonthday] = useState<dropdownTypes>();
  const [preferredTime, setPreferredTime] = useState<dropdownTypes>();
  const [startTime, setStartTime] = useState<dropdownTypes>();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAutoSaveSettings = () => {
    const { hour, minute } = getMinuteHour(preferredTime);
    const settingsData = {
      interval: "testing",
      hour,
      minute,
      weekday: weekday as string,
      monthday: monthday as string,
      amount: amount + "00",
      active: false,
    };
    dispatch(
      updateAutosaveSettings(settingsData, history, startTime as string)
    );
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
          <div className="icon" onClick={() => setFinish(false)}>
            <Icon name="cancel" />
          </div>
        </div>
        <div className="form-save">
          <div className="info-header">
            <h2>Finish Settings</h2>
            <div className="desc">Complete your autosave settings.</div>
          </div>
          <div className="content">
            <div className="autosave-banner">
              <div>
                <Icon size="big" name="calendar" />
              </div>
              <div>
                <h4>
                  ₦{amount} {code}
                </h4>
                <div className="base">Continue your settings below.</div>
              </div>
            </div>
            {code === "monthly" && (
              <div>
                <label>Day of the month</label>
                <div className="drops">
                  <Dropdown
                    placeholder="Select Day"
                    fluid
                    value={monthday}
                    selection
                    onChange={(e, data) =>
                      setMonthday(data.value as dropdownSetStateType)
                    }
                    options={monthOptions}
                  />
                </div>
              </div>
            )}
            {code === "weekly" && (
              <div>
                <label>Day of the week</label>
                <div className="drops">
                  <Dropdown
                    placeholder="Select Day"
                    fluid
                    value={weekday}
                    selection
                    onChange={(e, data) =>
                      setWeekday(data.value as dropdownSetStateType)
                    }
                    options={dayOptions}
                  />
                </div>
              </div>
            )}
            <label>Preferred Time</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Time"
                fluid
                value={preferredTime}
                selection
                onChange={(e, data) =>
                  setPreferredTime(data.value as dropdownSetStateType)
                }
                options={timeOptions}
              />
            </div>
            <label>Where should funds come from?</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Source"
                fluid
                value={code}
                selection
                options={fundsOptions}
              />
            </div>
            <label>When do you want to start?</label>
            <div className="drops">
              <Dropdown
                placeholder="Select Start Time"
                fluid
                value={startTime}
                onChange={(e, data) =>
                  setStartTime(data.value as dropdownSetStateType)
                }
                selection
                options={startTimeOptions}
              />
            </div>
          </div>
          <div className="bottom-card">
            <button
              disabled={
                preferredTime === undefined
                  ? true
                  : user.isAutosaveSettingLoading
                  ? true
                  : code === "weekly" && weekday === undefined
                  ? true
                  : code === "monthly" && monthday === undefined
                  ? true
                  : false
              }
              onClick={handleAutoSaveSettings}
              className="auth-button"
            >
              {user.isAutosaveSettingLoading ? "Loading..." : "Save Settings"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishAutoSaveSettings;
