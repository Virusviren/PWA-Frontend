import React, { useState } from "react";
import { Notification } from "baseui/notification";
import AllInsurances from "./AllInsurances";
import { Button, SHAPE, SIZE } from "baseui/button";
import { Pagination } from "baseui/pagination";
import AddNewInsurance from "./AddNewInsurance";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 style={{ margin: "40px 50px 30px" }}>Manage Insurances</h1>
      <h2 style={{ margin: "40px 50px 30px" }}>
        Manage all your insurances from the table below.
      </h2>
      <div style={{ margin: "0 50px 30px" }}>
        <Notification
          overrides={{
            Body: { style: { width: "auto" } },
          }}
        >
          Information : There are no insurances to show. Once you add new
          insurances they will be shown below.
        </Notification>
      </div>
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
};

export default Admin;
