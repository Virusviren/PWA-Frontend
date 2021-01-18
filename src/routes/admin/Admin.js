import React, { useState } from "react";
import { Notification } from "baseui/notification";
import AllInsurances from "./AllInsurances";
import { Button, SHAPE, SIZE } from "baseui/button";
import { Pagination } from "baseui/pagination";
import { Grid, Cell } from "baseui/layout-grid";
import AddNewInsurance from "./AddNewInsurance";
import admins from "../../utilities/admins";
import firebase from "firebase";

const Admin = () => {
  let user = firebase.auth().currentUser;

  const [currentPage, setCurrentPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  if (user && admins.includes(user.email)) {
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
            <h1 style={{ margin: "40px 0 0" }}>Manage Insurances</h1>
          </Cell>
          <Cell span={4}>
            <p style={{ margin: "40px 0 0", textAlign: "right" }}>
              Last login : Yesterday, 9:30 PM
            </p>
          </Cell>
        </Grid>
        <h2 style={{ margin: "40px 50px 30px" }}>
          Manage all your insurances from the table below.
        </h2>
        {/* <div style={{ margin: "0 50px 30px" }}>
        <Notification
          overrides={{
            Body: { style: { width: "auto" } },
          }}
        >
          Information : There are no insurances to show. Once you add new
          insurances they will be shown below.
        </Notification>
      </div> */}
        <div style={{ margin: "0 50px 30px" }}>
          <Button
            shape={SHAPE.pill}
            size={SIZE.default}
            overrides={{
              BaseButton: {
                style: {
                  color: "white",
                  backgroundColor: "#4a4cb4",
                },
              },
            }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Add a new insurance
          </Button>
        </div>
        <div style={{ margin: "0 50px 30px" }}>
          <AllInsurances />
        </div>
        <AddNewInsurance isOpen={isOpen} setIsOpen={setIsOpen} />
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
  } else if (user && !admins.includes(user.email)) {
    window.location.replace("/profile");
  } else {
    window.location.replace("/");
  }
};

export default Admin;
