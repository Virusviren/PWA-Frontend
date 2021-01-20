import React, { useState, Fragment } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import EditInsurance from "./EditInsurance";
import InsuranceInfo from "./InsuranceInfo";
import DeleteInsurance from "./DeleteInsurance";
import moment from "moment";

const AllInsurances = ({
  insurances,
  email,
  updateInsurance,
  deleteInsurance,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [modalId, setModalId] = useState("");

  const DATA = insurances;

  return (
    <Fragment>
      <TableBuilder data={DATA}>
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
          {(row) => moment(row.postedOn).format("MMMM Do, YYYY")}
        </TableBuilderColumn>
        <TableBuilderColumn header="Last Updated">
          {(row) => moment(row.updatedOn).format("MMMM Do, YYYY")}
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
                setModalId(row._id);
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
                setModalId(row._id);
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
                setModalId(row._id);
              }}
            >
              Delete
            </Button>
          )}
        </TableBuilderColumn>
      </TableBuilder>
      {insurances.map(
        (item) =>
          item._id === modalId && (
            <EditInsurance
              isOpen={isEditOpen}
              setIsOpen={setIsEditOpen}
              insurance={item}
              email={email}
              updateInsurance={updateInsurance}
            />
          )
      )}
      {insurances.map(
        (item) =>
          item._id === modalId && (
            <InsuranceInfo
              isOpen={isDetailsOpen}
              setIsOpen={setIsDetailsOpen}
              insurance={item}
            />
          )
      )}
      {insurances.map(
        (item) =>
          item._id === modalId && (
            <DeleteInsurance
              isOpen={isDeleteOpen}
              setIsOpen={setIsDeleteOpen}
              insurance={item}
              email={email}
              deleteInsurance={deleteInsurance}
            />
          )
      )}
    </Fragment>
  );
};

export default AllInsurances;
