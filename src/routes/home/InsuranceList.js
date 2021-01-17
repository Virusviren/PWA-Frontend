import React from "react";
import Insurance from "./Insurance";
import { Grid, Cell } from "baseui/layout-grid";

import insurances from "../../fake json/homepage";

const InsuranceList = () => {
  let row1 = insurances.slice(0, 4);
  let row2 = insurances.slice(4, 8);

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
    </Grid>
  );
};

export default InsuranceList;
