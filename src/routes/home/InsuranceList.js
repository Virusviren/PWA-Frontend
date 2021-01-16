import React from "react";
import Insurance from "./Insurance";
import { Grid, Cell } from "baseui/layout-grid";

const InsuranceList = () => {
  return (
    <Grid align="center" gridGutters={24}>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
      <Cell span={3}>
        <Insurance />
      </Cell>
    </Grid>
  );
};

export default InsuranceList;
