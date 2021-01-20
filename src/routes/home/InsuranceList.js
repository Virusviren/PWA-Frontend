import React, { useState, useEffect } from "react";
import Insurance from "./Insurance";
import { Grid, Cell } from "baseui/layout-grid";
import { Pagination } from "baseui/pagination";

const InsuranceList = ({ insurances }) => {
  // ------------------- Pagination ------------------- //
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  let row1 = currentPageItems.slice(0, 4);
  let row2 = currentPageItems.slice(4, 8);

  // Total number of pages
  let totalPages = Math.ceil(insurances.length / 8);

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
      insurances.slice(setStartingIndex(nextPage), setEndingIndex(nextPage))
    );
    setCurrentPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  // Check and split the insurances array
  useEffect(
    () => {
      setCurrentPageItems(
        insurances.slice(
          setStartingIndex(currentPage),
          setEndingIndex(currentPage)
        )
      );
    },
    // eslint-disable-next-line
    [insurances]
  );

  return (
    <Grid align="center" gridGutters={24}>
      {/* Row 1 */}
      {row1.map((item) => (
        <Cell span={3}>
          <Insurance insurance={item} />
        </Cell>
      ))}
      {/* Row 2 */}
      {row2.map((item) => (
        <Cell span={3}>
          <Insurance insurance={item} />
        </Cell>
      ))}
      <div style={{ margin: "2% 0 2% 37.5%" }}>
        <Pagination
          numPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Grid>
  );
};

export default InsuranceList;
