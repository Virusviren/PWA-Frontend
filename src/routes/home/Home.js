import React, { useState, useEffect } from "react";
import { Tabs, Tab, FILL } from "baseui/tabs-motion";
import { Pagination } from "baseui/pagination";
import InsuranceList from "./InsuranceList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInsurances } from "../../redux/actions/guestActions";

const Home = ({ getInsurances, guest }) => {
  // Initial API call
  useEffect(() => {
    getInsurances();

    //eslint-disable-next-line
  }, []);

  const healthInsurances =
    guest.insurances !== null &&
    guest.insurances.insurances.filter(
      (item) => item.type === "Health Insurance"
    );

  const lifeInsurances =
    guest.insurances !== null &&
    guest.insurances.insurances.filter(
      (item) => item.type === "Life Insurance"
    );

  const travelInsurances =
    guest.insurances !== null &&
    guest.insurances.insurances.filter(
      (item) => item.type === "Travel Insurance"
    );

  const [activeKey, setActiveKey] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  // Change insurance type tab
  const changeTab = ({ activeKey }) => setActiveKey(activeKey);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "40px auto 65px" }}>
        We provide the following types of insurances
      </h1>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Tabs
          activeKey={activeKey}
          onChange={changeTab}
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
            {guest.insurances !== null && activeKey === 0 && (
              <InsuranceList insurances={healthInsurances} />
            )}
          </Tab>
          <Tab title="Life Insurance">
            {guest.insurances !== null && activeKey === 1 && (
              <InsuranceList insurances={lifeInsurances} />
            )}
          </Tab>
          <Tab title="Travel Insurance">
            {guest.insurances !== null && activeKey === 2 && (
              <InsuranceList insurances={travelInsurances} />
            )}
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

Home.propTypes = {
  guest: PropTypes.object.isRequired,
  getInsurances: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guest: state.guest,
});

export default connect(mapStateToProps, { getInsurances })(Home);
