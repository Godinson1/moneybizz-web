import React from "react";
import { Icon } from "semantic-ui-react";

const Todo = () => {
  return (
    <div className="todo-container">
      <div className="dash-title">Todo</div>
      <div className="auth-options">
        <Icon size="small" id="icon" name="percent" />
        <div></div>
      </div>
      <div className="auth-options">
        <Icon size="small" id="icon" name="percent" />
        <div></div>
      </div>
      <div className="auth-options">
        <Icon size="small" id="icon" name="percent" />
        <div></div>
      </div>
    </div>
  );
};

export default Todo;
