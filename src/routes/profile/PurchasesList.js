import React, { useState, Fragment } from "react";
import { Table } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import PurchaseInfo from "./PurchaseInfo";

const PurchasesList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const COLUMNS = [
    "Name",
    "Type",
    "Company",
    "Price (PLN)",
    "Purchase Date",
    "Details",
  ];

  const DATA = [
    [
      "Sarah Brown",
      31,
      "100 Broadway St., New York City, New York",
      90,
      "10th January, 2021",
      <Button
        shape={SHAPE.pill}
        size={SIZE.mini}
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
              color: "white",
              backgroundColor: "#4a4cb4",
            },
          },
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Details
      </Button>,
    ],
    [
      "Jane Smith",
      32,
      "100 Market St., San Francisco, California",
      90,
      "10th January, 2021",
      <Button
        shape={SHAPE.pill}
        size={SIZE.mini}
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
              color: "white",
              backgroundColor: "#4a4cb4",
            },
          },
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Details
      </Button>,
    ],
    [
      "Joe Black",
      33,
      "100 Macquarie St., Sydney, Australia",
      90,
      "10th January, 2021",
      <Button
        shape={SHAPE.pill}
        size={SIZE.mini}
        overrides={{
          BaseButton: {
            style: {
              width: "100%",
              color: "white",
              backgroundColor: "#4a4cb4",
            },
          },
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Details
      </Button>,
    ],
  ];

  return (
    <Fragment>
      <Table columns={COLUMNS} data={DATA} />
      <PurchaseInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  );
};

export default PurchasesList;
