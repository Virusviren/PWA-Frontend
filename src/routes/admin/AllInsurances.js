import React, { useState, Fragment } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import EditInsurance from "./EditInsurance";
import InsuranceInfo from "./InsuranceInfo";
import DeleteInsurance from "./DeleteInsurance";

import insurances from "../../fake json/homepage";

const AllInsurances = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const DATA = insurances;

  return (
    <Fragment>
      <TableBuilder data={DATA}>
        <TableBuilderColumn header="Serial No.">
          {(row) => row.serialNo}
        </TableBuilderColumn>
        <TableBuilderColumn header="Company Name">
          {(row) => row.companyName}
        </TableBuilderColumn>
        <TableBuilderColumn header="Insurance Name">
          {(row) => row.insuranceName}
        </TableBuilderColumn>
        <TableBuilderColumn header="Price (PLN)">
          {(row) => row.price}
        </TableBuilderColumn>
        <TableBuilderColumn header="Date Posted">
          {(row) => row.postedOn}
        </TableBuilderColumn>
        <TableBuilderColumn header="Last Updated">
          {(row) => row.postedOn}
        </TableBuilderColumn>
        <TableBuilderColumn header="Edit">
          {(row) => (
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    color: "white",
                    backgroundColor: "#4a4cb4",
                  },
                },
              }}
              shape={SHAPE.pill}
              size={SIZE.mini}
              onClick={() => {
                setIsEditOpen(true);
              }}
            >
              Edit
            </Button>
          )}
        </TableBuilderColumn>
        <TableBuilderColumn header="Details">
          {(row) => (
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    color: "white",
                    backgroundColor: "#4a4cb4",
                  },
                },
              }}
              shape={SHAPE.pill}
              size={SIZE.mini}
              onClick={() => {
                setIsDetailsOpen(true);
              }}
            >
              Details
            </Button>
          )}
        </TableBuilderColumn>
        <TableBuilderColumn header="Delete">
          {(row) => (
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    color: "white",
                    backgroundColor: "#4a4cb4",
                  },
                },
              }}
              shape={SHAPE.pill}
              size={SIZE.mini}
              onClick={() => {
                setIsDeleteOpen(true);
              }}
            >
              Delete
            </Button>
          )}
        </TableBuilderColumn>
      </TableBuilder>
      <EditInsurance isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
      <InsuranceInfo isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen} />
      <DeleteInsurance isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
    </Fragment>
  );
};

export default AllInsurances;
