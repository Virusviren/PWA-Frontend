import React, { useState, Fragment } from "react";
import { Table } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import EditInsurance from "./EditInsurance";
import InsuranceInfo from "./InsuranceInfo";
import DeleteInsurance from "./DeleteInsurance";

const AllInsurances = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const COLUMNS = [
    "Company Name",
    "Insurance Name",
    "Price (PLN)",
    "Date Posted",
    "Last Updated",
    "Edit",
    "Details",
    "Delete",
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
          setIsEditOpen(true);
        }}
      >
        Edit
      </Button>,
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
          setIsDetailsOpen(true);
        }}
      >
        Details
      </Button>,
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
          setIsDeleteOpen(true);
        }}
      >
        Delete
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
          setIsEditOpen(true);
        }}
      >
        Edit
      </Button>,
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
          setIsDetailsOpen(true);
        }}
      >
        Details
      </Button>,
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
          setIsDeleteOpen(true);
        }}
      >
        Delete
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
          setIsEditOpen(true);
        }}
      >
        Edit
      </Button>,
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
          setIsDetailsOpen(true);
        }}
      >
        Details
      </Button>,
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
          setIsDeleteOpen(true);
        }}
      >
        Delete
      </Button>,
    ],
  ];
  return (
    <Fragment>
      <Table columns={COLUMNS} data={DATA} />
      <EditInsurance isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      <InsuranceInfo isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen} />
      <DeleteInsurance isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
    </Fragment>
  );
};

export default AllInsurances;
