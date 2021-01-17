import React, { useState } from "react";
import PurchasesList from "./PurchasesList";
import { Notification } from "baseui/notification";
import { Pagination } from "baseui/pagination";
import { Grid, Cell } from "baseui/layout-grid";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Grid
        gridGutters={0}
        gridMargins={0}
        overrides={{
          Grid: {
            style: { margin: "0 50px" },
          },
        }}
      >
        <Cell span={8}>
          <h1 style={{ margin: "40px 0 0" }}>Previous Purchases</h1>
        </Cell>
        <Cell span={4}>
          <p style={{ margin: "40px 0 0", textAlign: "right" }}>
            Last login : Today, 8:08 AM
          </p>
        </Cell>
      </Grid>
      <h2 style={{ margin: "40px 50px 30px" }}>
        All your previous purchases are shown in the table below.
      </h2>
      {/* <div style={{ margin: "0 50px 30px" }}>
        <Notification
          overrides={{
            Body: { style: { width: "auto" } },
          }}
        >
          Information : You haven't bought anything yet. Once you start buying
          all your purchases will be shown below.
        </Notification>
      </div> */}
      <div style={{ margin: "0 50px 30px" }}>
        <PurchasesList />
      </div>
      <div style={{ margin: "0 0 2% 37.5%" }}>
        <Pagination
          numPages={20}
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(Math.min(Math.max(nextPage, 1), 20));
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
