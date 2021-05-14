import React from "react";
import { Icon } from "semantic-ui-react";

const RecentActivities = () => {
  return (
    <div className="todo-container">
      <div className="todo">RECENT ACTIVITIES</div>
      {Array(5)
        .fill(0)
        .map(() => (
          <div className="auth-options">
            <div className="flex-between-recent">
              <div className="flex-recent">
                <Icon
                  size="small"
                  id="icon"
                  color="blue"
                  name="dot circle outline"
                />
                <div>
                  <div>Bizz wallet credited</div>
                  <div>3 days ago</div>
                </div>
              </div>
              <div>N1.23</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecentActivities;
