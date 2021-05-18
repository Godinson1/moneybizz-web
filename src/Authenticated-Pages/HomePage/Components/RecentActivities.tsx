import React, { useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Icon } from "semantic-ui-react";

const RecentActivities = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [allNotification, setAllNotification] = useState([]);

  dayjs.extend(relativeTime);

  useEffect(() => {
    if (
      user.user &&
      user.user.data &&
      user.user.data.transactions &&
      user.user.data.notifications
    ) {
      const allData = user.user.data.notifications.concat(
        user.user.data.transactions
      );
      setAllNotification(allData.slice(0, 5));
    }
  }, [user.user]);

  return (
    <div className="todo-container">
      <div className="todo">RECENT ACTIVITIES</div>
      {allNotification.map((data: any, index) => (
        <div className="auth-recent" key={index}>
          <div className="flex-between-recent">
            <div className="flex-recent">
              <Icon
                size="small"
                id="icon"
                color="blue"
                name="dot circle outline"
              />
              <div>
                {data.type === "request_fund" ? (
                  <div>
                    {data.message} - {dayjs(data.createdAt).fromNow()}
                  </div>
                ) : (
                  <div>
                    Bizz wallet credited. (Payment ID: {""}
                    {data.ref}) - {dayjs(data.createdAt).fromNow()}
                  </div>
                )}
              </div>
            </div>
            <div>
              {data.type === "request_fund" ? (
                ""
              ) : (
                <div>{`₦${parseInt(data.amount.slice(0, -2))}`}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
