import React from "react";
import { Icon } from "semantic-ui-react";
import { useHistory, useRouteMatch } from "react-router-dom";

const Todo = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const AutosaveState = localStorage.getItem("autosave");

  return (
    <div className="todo-container">
      <div className="todo">TODO</div>
      <div
        onClick={() => history.push(`${url}/identity`)}
        className="auth-options"
      >
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Add your BVN or NIN</div>
      </div>
      <div
        onClick={() => history.push(`save/b/safelock`)}
        className="auth-options"
      >
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Safelock Funds</div>
      </div>
      {AutosaveState !== "true" && (
        <div
          onClick={() => history.push(`${url}/autosave_settings`)}
          className="auth-options"
        >
          <Icon size="small" id="icon" color="blue" name="dot circle outline" />
          <div>Turn on Auto Save</div>
        </div>
      )}
    </div>
  );
};

export default Todo;
