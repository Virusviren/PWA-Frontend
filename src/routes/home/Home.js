import React, { useState } from "react";
import { Tabs, Tab, FILL } from "baseui/tabs-motion";
import { Pagination } from "baseui/pagination";
import InsuranceList from "./InsuranceList";

const Home = () => {
  const [activeKey, setActiveKey] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "40px auto 65px" }}>
        We provide the following types of insurances
      </h1>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Tabs
          activeKey={activeKey}
          onChange={({ activeKey }) => setActiveKey(activeKey)}
          fill={FILL.fixed}
          overrides={{
            TabHighlight: {
              style: ({ $theme }) => ({
                outline: "#4a4cb4",
                backgroundColor: "#4a4cb4",
              }),
            },
          }}
        >
          <Tab title="Health Insurance">
            <InsuranceList />
          </Tab>
          <Tab title="Life Insurance">
            <InsuranceList />
          </Tab>
          <Tab title="Travel Insurance">
            <InsuranceList />
          </Tab>
        </Tabs>
      </div>
      <div style={{ margin: "0 0 2% 37.5%" }}>
        <Pagination
          numPages={20}
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(Math.min(Math.max(nextPage, 1), 20));
          }}
        />
      </div>
    </div>
  );
};

export default Home;
