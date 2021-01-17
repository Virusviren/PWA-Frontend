import React, { useState, Fragment } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import PurchaseInfo from "./PurchaseInfo";

import purchases from "../../fake json/profilepage";

const PurchasesList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const DATA = purchases;

  return (
    <Fragment>
      <TableBuilder data={DATA}>
        <TableBuilderColumn header="Serial No.">
          {(row) => row.serialNumber}
        </TableBuilderColumn>
        <TableBuilderColumn header="Insurance Name">
          {(row) => row.insuranceName}
        </TableBuilderColumn>
        <TableBuilderColumn header="Insurance Type">
          {(row) => row.insuranceType}
        </TableBuilderColumn>
        <TableBuilderColumn header="Price (PLN)">
          {(row) => row.price}
        </TableBuilderColumn>
        <TableBuilderColumn header="Purchase Date">
          {(row) => row.purchasedOn}
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
              }}
            >
              Details
            </Button>
          )}
        </TableBuilderColumn>
      </TableBuilder>
      <PurchaseInfo isOpen={isOpen} setIsOpen={setIsOpen} purchase={""} />
    </Fragment>
  );
};

export default PurchasesList;
