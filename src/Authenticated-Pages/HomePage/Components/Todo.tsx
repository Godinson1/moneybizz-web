import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Icon } from "semantic-ui-react";
import { useHistory, useRouteMatch } from "react-router-dom";
import RecentActivities from "./RecentActivities";

const Todo = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const { url } = useRouteMatch();
  const history = useHistory();
  const AutosaveState = localStorage.getItem("autosave");

  return (
    <div className="todo-container">
      <div className="todo">TODO</div>
      {user.user &&
        user.user.data &&
        user.user.data.details.bvnConfirmed !== true && (
          <div
            onClick={() => history.push(`${url}/identity`)}
            className="auth-options"
          >
            <Icon
              size="small"
              id="icon"
              color="blue"
              name="dot circle outline"
            />
            <div>Verify your Identity</div>
          </div>
        )}
      <div
        onClick={() => history.push(`save/b/safelock`)}
        className="auth-options"
      >
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Safelock Funds</div>
      </div>
      <div
        onClick={() => history.push(`${url}/security_question`)}
        className="auth-options"
      >
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>
          Set your security question now!{" "}
          <Icon name="lock" color="blue" size="small" />
        </div>
      </div>
      {user.user && user.user.data && user.user.data.details.autoSave && (
        <div>
          {AutosaveState !== "true" && (
            <div
              onClick={() =>
                user.user.data.details.autoSave.amount > 0
                  ? history.push(`${url}/autosavetoggle`)
                  : history.push(`${url}/autosave_settings`)
              }
              className="auth-options"
            >
              <Icon
                size="small"
                id="icon"
                color="blue"
                name="dot circle outline"
              />
              <div>Turn on Auto Save</div>
            </div>
          )}
        </div>
      )}
      <div
        onClick={() => history.push(`/save/b/bizzbank/interest`)}
        className="auth-options"
      >
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Get your savings interest for the month!</div>
      </div>
      <div className="recent-activities">
        <RecentActivities />
      </div>
    </div>
  );
};

export default Todo;
