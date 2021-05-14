import React, { FC, useState, useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

import "./styles.scss";
import "../savefeatures.scss";

const Connections: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [allNotification, setAllNotification] = useState([]);

  useEffect(() => {
    if (user.user && user.user.data && user.user.data.connections) {
      const allData = user.user.data.connections;
      setAllNotification(allData);
    }
  }, [user.user]);

  return (
    <div>
      <div className="custom-card">
        <div className="trans">
          <div>MY CONNECTIONS</div>
          <div className="flex-header"></div>
        </div>
        <div className="flex-bottom-card">
          <div className="secondary-color">
            {allNotification.length === 0
              ? "NO CONNECTION RECORDED"
              : "SEE MORE CONNECTIONS"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
