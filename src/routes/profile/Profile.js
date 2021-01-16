import React from "react";
import PurchasesList from "./PurchasesList";
import { Notification } from "baseui/notification";

const Profile = () => {
  return (
    <div>
      <h1 style={{ margin: "40px 50px 30px" }}>Previous Purchases</h1>
      <h2 style={{ margin: "40px 50px 30px" }}>
        All your previous purchases are shown below.
      </h2>
      <div style={{ margin: "0 50px 30px" }}>
        <Notification
          overrides={{
            Body: { style: { width: "auto" } },
          }}
        >
          Information : You haven't bought anything yet. Once you start buying
          all your purchases will be shown below.
        </Notification>
      </div>
      <div style={{ margin: "0 50px 30px" }}>
        <PurchasesList />
      </div>
    </div>
  );
};

export default Profile;
