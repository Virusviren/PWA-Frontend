import React, { useState, useEffect, Fragment } from "react";
import PurchasesList from "./PurchasesList";
import { Notification, KIND } from "baseui/notification";
import { Pagination } from "baseui/pagination";
import { Grid, Cell } from "baseui/layout-grid";
import { ProgressBar } from "baseui/progress-bar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import admins from "../../utilities/admins";
import firebase from "firebase";
import { getPreviousPurchases } from "../../redux/actions/userActions";

const Profile = ({ getPreviousPurchases, user }) => {
  let currentUser = firebase.auth().currentUser;

  const [currentPage, setCurrentPage] = useState(1);

  // Initial API call
  useEffect(() => {
    getPreviousPurchases(currentUser.email);
    //eslint-disable-next-line
  }, []);

  if (user.getPreviousPurchasesLoading || user.getUserLoading) {
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
  } else if (currentUser && !admins.includes(currentUser.email)) {
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
            <h1 style={{ margin: "40px 0 0" }}>Previous Purchases</h1>
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
        {user.getPreviousPurchasesError !== null && (
          <div style={{ margin: "35px 50px 60px" }}>
            <Notification
              overrides={{
                Body: { style: { width: "auto" } },
              }}
              kind={KIND.negative}
            >
              {user.getPreviousPurchasesError.msg}
            </Notification>
          </div>
        )}
        {user.getPreviousPurchasesSuccess !== null && (
          <Fragment>
            <h2 style={{ margin: "40px 50px 30px" }}>
              All your previous purchases are shown in the table below.
            </h2>
            {user.getPreviousPurchasesSuccess !== null &&
              user.getPreviousPurchasesSuccess.purchases.length <= 0 && (
                <div style={{ margin: "0 50px 30px" }}>
                  <Notification
                    overrides={{
                      Body: { style: { width: "auto" } },
                    }}
                  >
                    You haven't bought anything yet. Once you start buying all
                    your purchases will be shown below.
                  </Notification>
                </div>
              )}
            {user.getPreviousPurchasesSuccess !== null &&
              user.getPreviousPurchasesSuccess.purchases.length > 0 && (
                <Fragment>
                  <div style={{ margin: "0 50px 30px" }}>
                    <PurchasesList
                      purchases={user.getPreviousPurchasesSuccess.purchases}
                    />
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
                </Fragment>
              )}
          </Fragment>
        )}
      </div>
    );
  } else if (currentUser && admins.includes(currentUser.email)) {
    window.location.replace("/admin");
  } else {
    window.location.replace("/");
  }
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  getPreviousPurchases: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getPreviousPurchases })(Profile);
