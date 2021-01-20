import React, { useState, Fragment } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import PurchaseInfo from "./PurchaseInfo";
import moment from "moment";

const PurchasesList = ({ purchases }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState("");

  const DATA = purchases;

  return (
    <Fragment>
      <TableBuilder data={DATA}>
        <TableBuilderColumn header="Insurer's Full Name">
          {(row) => row.fullName}
        </TableBuilderColumn>
        <TableBuilderColumn header="Transaction ID">
          {(row) => row.transactionId}
        </TableBuilderColumn>
        <TableBuilderColumn header="Amount Paid (PLN)">
          {(row) => row.total}
        </TableBuilderColumn>
        <TableBuilderColumn header="Purchase Date">
          {(row) => moment(row.purchasedOn).format("MMMM Do, YYYY")}
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
              size={SIZE.compact}
              style={{ margin: "0 20px" }}
              onClick={() => {
                setIsOpen(true);
                setModalId(row._id);
              }}
            >
              Details
            </Button>
          )}
        </TableBuilderColumn>
      </TableBuilder>
      {purchases.map(
        (purchase) =>
          purchase._id === modalId && (
            <PurchaseInfo
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              purchase={purchase}
            />
          )
      )}
    </Fragment>
  );
};

export default PurchasesList;
