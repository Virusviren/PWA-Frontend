import React, { useState, Fragment, useEffect } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { Button, SHAPE, SIZE } from "baseui/button";
import { Pagination } from "baseui/pagination";
import PurchaseInfo from "./PurchaseInfo";
import moment from "moment";

const PurchasesList = ({ purchases }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState("");

  // ------------------- Pagination ------------------- //
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  // Total number of pages
  let totalPages = Math.ceil(purchases.length / 8);

  // Final index of array to be sliced
  const setEndingIndex = (currentPage) => {
    let index = currentPage * 8;
    return index;
  };

  // Starting index of array to be sliced
  const setStartingIndex = (currentPage) => {
    let index = currentPage * 8 - 8;
    return index;
  };

  // Handle page change
  const handlePageChange = ({ nextPage }) => {
    setCurrentPageItems(
      purchases.slice(setStartingIndex(nextPage), setEndingIndex(nextPage))
    );
    setCurrentPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  // Check and split the purchases array
  useEffect(
    () => {
      setCurrentPageItems(
        purchases.slice(
          setStartingIndex(currentPage),
          setEndingIndex(currentPage)
        )
      );
    },
    // eslint-disable-next-line
    [purchases]
  );

  const DATA = currentPageItems;

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
      <div style={{ margin: "2% 0 2% 37.5%" }}>
        <Pagination
          numPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
};

export default PurchasesList;
