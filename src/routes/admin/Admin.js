import React, { useState, useEffect, Fragment } from "react";
import { Notification, KIND as NotificationKind } from "baseui/notification";
import { ProgressBar } from "baseui/progress-bar";
import AllInsurances from "./AllInsurances";
import { Button, SHAPE, SIZE } from "baseui/button";
import { Pagination } from "baseui/pagination";
import { Grid, Cell } from "baseui/layout-grid";
import AddNewInsurance from "./AddNewInsurance";
import moment from "moment";
import admins from "../../utilities/admins";
import firebase from "firebase";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../redux/actions/userActions";
import {
  addInsurance,
  updateInsurance,
  deleteInsurance,
} from "../../redux/actions/adminActions";

const Admin = ({
  getUser,
  user,
  admin,
  addInsurance,
  updateInsurance,
  deleteInsurance,
}) => {
  let currentUser = firebase.auth().currentUser;

  // ------------------- Pagination ------------------- //
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  // Total number of pages
  let totalPages =
    admin.insurances !== null &&
    Math.ceil(admin.insurances.insurances.length / 8);

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
      admin.insurances.insurances.slice(
        setStartingIndex(nextPage),
        setEndingIndex(nextPage)
      )
    );
    setCurrentPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  // Check and split the insurances array
  useEffect(
    () => {
      admin.insurances !== null &&
        setCurrentPageItems(
          admin.insurances.insurances.slice(
            setStartingIndex(currentPage),
            setEndingIndex(currentPage)
          )
        );
    },
    // eslint-disable-next-line
    [admin.insurances]
  );

  // ------------------- Modal open or close ------------------- //
  const [isOpen, setIsOpen] = useState(false);

  // ------------------- Add or return user ------------------- //
  useEffect(() => {
    const data = {
      fullName: currentUser.displayName,
      email: currentUser.email,
    };

    getUser(data);

    //eslint-disable-next-line
  }, []);

  if (user.getUserLoading || admin.getAllInsurancesListLoading) {
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
  } else if (currentUser && admins.includes(currentUser.email)) {
    return (
      <div>
        <Grid
          gridGutters={0}
          gridMargins={0}
          overrides={{
            Grid: {
              style: { margin: "0 50px" },
            },
          }}
        >
          <Cell span={8}>
            <h1 style={{ margin: "40px 0 0" }}>Manage Insurances</h1>
          </Cell>
          <Cell span={4}>
            <p style={{ margin: "40px 0 0", textAlign: "right" }}>
              Last login :{" "}
              {moment(currentUser.metadata.lastSignInTime).format(
                "MMMM Do, YYYY, h:mm A"
              )}
            </p>
          </Cell>
        </Grid>
        <h2 style={{ margin: "40px 50px 30px" }}>
          Manage all your insurances from the table below.
        </h2>
        {user.getUserError !== null && (
          <div style={{ margin: "0 50px 60px" }}>
            <Notification
              overrides={{
                Body: { style: { width: "auto" } },
              }}
              kind={NotificationKind.negative}
            >
              {user.getUserError.msg}
            </Notification>
          </div>
        )}
        {admin.getAllInsurancesListError !== null && (
          <div style={{ margin: "0 50px 60px" }}>
            <Notification
              overrides={{
                Body: { style: { width: "auto" } },
              }}
              kind={NotificationKind.negative}
            >
              {admin.getAllInsurancesListError.msg}
            </Notification>
          </div>
        )}
        {user.user !== null && admin.getAllInsurancesListError === null && (
          <Fragment>
            <div style={{ margin: "0 50px 30px" }}>
              <Button
                shape={SHAPE.pill}
                size={SIZE.default}
                overrides={{
                  BaseButton: {
                    style: {
                      color: "white",
                      backgroundColor: "#4a4cb4",
                    },
                  },
                }}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Add a new insurance
              </Button>
            </div>
            <AddNewInsurance
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              addInsurance={addInsurance}
              email={currentUser.email}
            />
            {admin.addInsuranceSuccess !== null && (
              <div style={{ margin: "0 50px 30px" }}>
                <Notification
                  overrides={{
                    Body: { style: { width: "auto" } },
                  }}
                  kind={NotificationKind.positive}
                >
                  {admin.addInsuranceSuccess.msg}
                </Notification>
              </div>
            )}
            {admin.addInsuranceError !== null && (
              <div style={{ margin: "0 50px 30px" }}>
                <Notification
                  overrides={{
                    Body: { style: { width: "auto" } },
                  }}
                  kind={NotificationKind.negative}
                >
                  {admin.addInsuranceError.msg}
                </Notification>
              </div>
            )}
            {admin.updateInsuranceSuccess !== null && (
              <div style={{ margin: "0 50px 30px" }}>
                <Notification
                  overrides={{
                    Body: { style: { width: "auto" } },
                  }}
                  kind={NotificationKind.positive}
                >
                  {admin.updateInsuranceSuccess.msg}
                </Notification>
              </div>
            )}
            {admin.updateInsuranceError !== null && (
              <div style={{ margin: "0 50px 30px" }}>
                <Notification
                  overrides={{
                    Body: { style: { width: "auto" } },
                  }}
                  kind={NotificationKind.negative}
                >
                  {admin.updateInsuranceError.msg}
                </Notification>
              </div>
            )}
            {admin.deleteInsuranceSuccess !== null && (
              <div style={{ margin: "0 50px 30px" }}>
                <Notification
                  overrides={{
                    Body: { style: { width: "auto" } },
                  }}
                  kind={NotificationKind.positive}
                >
                  {admin.deleteInsuranceSuccess.msg}
                </Notification>
              </div>
            )}
            {admin.deleteInsuranceError !== null && (
              <div style={{ margin: "0 50px 30px" }}>
                <Notification
                  overrides={{
                    Body: { style: { width: "auto" } },
                  }}
                  kind={NotificationKind.negative}
                >
                  {admin.deleteInsuranceError.msg}
                </Notification>
              </div>
            )}
            {admin.insurances !== null &&
              admin.insurances.insurances.length === 0 && (
                <div style={{ margin: "0 50px 60px" }}>
                  <Notification
                    overrides={{
                      Body: { style: { width: "auto" } },
                    }}
                    kind={NotificationKind.info}
                  >
                    There are no insurances added to the system yet.
                  </Notification>
                </div>
              )}
            {admin.insurances !== null &&
              admin.insurances.insurances.length > 0 && (
                <Fragment>
                  <div style={{ margin: "0 50px 30px" }}>
                    <AllInsurances
                      insurances={currentPageItems}
                      email={currentUser.email}
                      updateInsurance={updateInsurance}
                      deleteInsurance={deleteInsurance}
                    />
                  </div>
                  <div style={{ margin: "0 0 2% 37.5%" }}>
                    <Pagination
                      numPages={totalPages}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </Fragment>
              )}
          </Fragment>
        )}
      </div>
    );
  } else if (currentUser && !admins.includes(currentUser.email)) {
    window.location.replace("/profile");
  } else {
    window.location.replace("/");
  }
};

Admin.propTypes = {
  user: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  addInsurance: PropTypes.func.isRequired,
  updateInsurance: PropTypes.func.isRequired,
  deleteInsurance: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  admin: state.admin,
});

export default connect(mapStateToProps, {
  getUser,
  addInsurance,
  updateInsurance,
  deleteInsurance,
})(Admin);
