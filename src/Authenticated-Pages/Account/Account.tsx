import React, { FC, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import Dashboard from "../../Pages/Dashboard/Components";
import {  formatNumber } from "../../utilities";
import { ACCOUNT_OPTIONS, PHONE_NUMBER } from "./constants";
import { logoutUser, updateProfilePhoto } from "../../redux";
import { useHistory } from "react-router-dom";
import "../../Components/preloader/preloader.scss";
import {
  Icon,
  SemanticICONS,
  Checkbox,
  SemanticCOLORS,
  Popup,
} from "semantic-ui-react";

import "./account.scss";

const Account: FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.user);
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<any>()
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowBalance = () => {
    setShowBalance(!showBalance);
    localStorage.setItem("showBalance", `${!showBalance}`);
  };

  const previewFile = (file: File) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      const data = fileReader.result;
      setPreviewImage(data)
    }
  }

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      previewFile(file)
      const data = new FormData();
      data.append("mb_image", file);
      dispatch(updateProfilePhoto(data));
    }
  };

  const handleAction = (title: string) => {
    if (title === "Logout") {
      dispatch(logoutUser());
    }
    if (title === "Contact Us") {
      window.location.href = PHONE_NUMBER;
    }
    if (title === "Verify Your Identity") {
      history.push("/home/identity");
    }
    if (title === "Refer & Earn N500") {
      history.push("/home/refer&earn");
    }
  };

  const showBalanceState = localStorage.getItem("showBalance");

  return (
    <div>
      <Dashboard title="My Account">
        <div className="auth-account">
          <div className="auth-flex">
            <div className="account-first">
              <div className="two-factor-banner">
                <h2>Enable Two-Factor Authentication</h2>
              </div>
              {ACCOUNT_OPTIONS.map((options) => {
                const { icon, title, color } = options;
                return (
                  <div
                    onClick={() => handleAction(title)}
                    className="auth-options"
                  >
                    <Icon
                      size="small"
                      id="icon"
                      color={color as SemanticCOLORS | undefined}
                      name={icon as SemanticICONS | undefined}
                    />

                    <div>{title}</div>
                  </div>
                );
              })}
            </div>
            <div className="account-second">
              {user && user.user && user.user.data && (
                <div className="avatar-name">
                  <div className="flex-account">
                    <div className="account-avatar">
                      <img
                        src={
                          previewImage
                            ? previewImage
                            : user.user.data.details.profile_photo
                        }
                        alt="user"
                      />
                      {user.isProfilePhotoLoading && (
                        <div className="loader-image">
                          <div className="preloader-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <Popup
                        content="Update profile photo"
                        trigger={
                          <form
                            method="post"
                            action=""
                            encType="multipart/form-data"
                          >
                            <label
                              style={{ fontSize: "1.5rem" }}
                              htmlFor={"edit-picture"}
                            >
                              <Icon id="edit" name="edit outline" />
                              <input
                                type="file"
                                id={"edit-picture"}
                                style={{ display: "none" }}
                                name="image"
                                accept="image/jpeg,image/jpg,image/png"
                                multiple
                                data-original-title="upload photos"
                                onChange={handleImage}
                              />
                            </label>
                          </form>
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <h2>
                      {user.user.data.details.firstName}{" "}
                      {user.user.data.details.lastName}
                    </h2>
                  </div>
                </div>
              )}
              <div className="todo-container">
                <div className="todo">
                  <div>
                    <h2>Get Bizz Number</h2>
                  </div>
                  <div>
                    <span>Add BVN or NIN</span>
                  </div>
                </div>
                <div className="todo">
                  <div>
                    <h2>0</h2>
                  </div>
                  <div>
                    <span>Bizz Points</span>
                  </div>
                </div>
                <div className="todo">
                  <div>
                    <h2>#BizzLink ID</h2>
                  </div>
                  <div>
                    <span>Create a Bizzlink ID</span>
                  </div>
                </div>
                <div className="todo">
                  <div>
                    <h2>{formatNumber(0)}</h2>
                  </div>
                  <div>
                    <span>Referral Earnings</span>
                  </div>
                </div>
              </div>
              <div className="show-balance">
                <div>Show Account Balance</div>
                <div>
                  <Popup
                    content={
                      showBalanceState === "true"
                        ? "Hide Dashboard Balance"
                        : "Show Dashboard Balance"
                    }
                    trigger={
                      <Checkbox
                        onChange={handleShowBalance}
                        checked={showBalanceState === "true" ? true : false}
                        toggle
                      />
                    }
                  ></Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Account;
