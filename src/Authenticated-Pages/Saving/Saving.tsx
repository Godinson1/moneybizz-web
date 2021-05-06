import React, { FC } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { formatNumber } from "../../utilities";
import PreloaderMain from "../../Components/preloader/PreloaderMain";
import Dashboard from "../../Pages/Dashboard/Components";
import "./saving.scss";

const Saving: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  return (
    <div>
      <Dashboard title="SAVINGS">
        {user.isUserLoading ? (
          <PreloaderMain />
        ) : (
          <div className="auth-saving">
            <div className="save-header">
              <div className="total-balance">
                {user.user && user.user.data && (
                  <div>
                    <div>
                      <h2>Total Balance</h2>
                    </div>
                    <div className="tbs">
                      {formatNumber(user.user.data.details.total_balance)}
                    </div>
                  </div>
                )}
              </div>
              <div className="build">
                <div className="dash-title">Build Your Saving</div>
                <div className="banner">
                  <img src="images/wallet.png" alt="saving" />
                </div>
              </div>
            </div>
            <div className="save-options">
              <div>BizzBank</div>
              <div>Ajo</div>
              <div>Safelock</div>
              <div>Targets</div>
              <div>Coming Soon</div>
            </div>
          </div>
        )}
      </Dashboard>
    </div>
  );
};

export default Saving;
