import React, { useState, useEffect, Fragment } from "react";
import { Tabs, Tab, FILL } from "baseui/tabs-motion";
import { Notification, KIND as NotificationKind } from "baseui/notification";
import { ProgressBar } from "baseui/progress-bar";
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

  // Change insurance type tab
  const changeTab = ({ activeKey }) => {
    setActiveKey(activeKey);
  };

  if (guest.getInsurancesLoading) {
    return (
      <div style={{ margin: "60px auto" }}>
        <ProgressBar
          showLabel
          infinite
          successValue={100}
          getProgressLabel={() => "Loading ... Please wait ..."}
        />
      </div>
    );
  } else {
    return (
      <div>
        {guest.getInsurancesError !== null && (
          <div style={{ margin: "0 50px 60px" }}>
            <Notification
              overrides={{
                Body: { style: { width: "auto" } },
              }}
              kind={NotificationKind.negative}
            >
              {guest.getInsurancesError.msg}
            </Notification>
          </div>
        )}
        {guest.insurances !== null && guest.insurances.insurances.length <= 0 && (
          <div style={{ margin: "0 50px 60px" }}>
            <Notification
              overrides={{
                Body: { style: { width: "auto" } },
              }}
              kind={NotificationKind.info}
            >
              Website is still under construction. Please visit sometime later.
            </Notification>
          </div>
        )}
        {guest.insurances !== null && guest.insurances.insurances.length > 0 && (
          <Fragment>
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
                  {guest.insurances !== null && (
                    <InsuranceList insurances={healthInsurances} />
                  )}
                </Tab>
                <Tab title="Life Insurance">
                  {guest.insurances !== null && (
                    <InsuranceList insurances={lifeInsurances} />
                  )}
                </Tab>
                <Tab title="Travel Insurance">
                  {guest.insurances !== null && (
                    <InsuranceList insurances={travelInsurances} />
                  )}
                </Tab>
              </Tabs>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
};

Home.propTypes = {
  guest: PropTypes.object.isRequired,
  getInsurances: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  guest: state.guest,
});

export default connect(mapStateToProps, { getInsurances })(Home);
