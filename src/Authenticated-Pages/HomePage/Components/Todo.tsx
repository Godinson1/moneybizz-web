import React from "react";
import { Icon } from "semantic-ui-react";

const Todo = () => {
  return (
    <div className="todo-container">
      <div className="dash-title">Todo</div>
      <div className="auth-options">
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Add your BVN or NIN</div>
      </div>
      <div className="auth-options">
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Safelock Funds</div>
      </div>
      <div className="auth-options">
        <Icon size="small" id="icon" color="blue" name="dot circle outline" />
        <div>Turn on Auto Save</div>
      </div>
    </div>
  );
};

export default Todo;
