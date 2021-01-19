import React, { Fragment, useState, useEffect } from "react";
import { AppNavBar } from "baseui/app-nav-bar";
import { Link } from "react-router-dom";
import admins from "../utilities/admins";
import firebase from "firebase";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ cart }) => {
  const [user, setUser] = useState(null);

  const provider = new firebase.auth.GoogleAuthProvider();

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        window.location.replace("/");
      })
      .catch((error) => {});
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.replace("/");
      })
      .catch((error) => {
        window.location.replace("/");
      });
  };

  // Firebase user observer
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // Guest navbar items
  const mainItems = [
    { label: "Home" },
    { label: "Login" },
    { label: "Cart" },
    { label: "About" },
  ];

  // Logged in user's navbar items
  const loggedInItems = [
    { label: "Home" },
    { label: "Cart" },
    { label: "About" },
  ];

  // Logged in navbar items for user
  const userItems = [{ label: "Previous Purchases" }, { label: "Logout" }];

  // Logged in navbar items for admin
  const adminItems = [{ label: "Manage Insurances" }, { label: "Logout" }];

  if (user && !admins.includes(user.email)) {
    return (
      <AppNavBar
        overrides={{
          Root: {
            style: { outline: "#4a4cb4 solid", backgroundColor: "#4a4cb4" },
          },
          AppName: {
            style: { color: "white" },
          },
        }}
        title="Will's Insurance LLC"
        mainItems={loggedInItems}
        mapItemToNode={(item) => (
          <Fragment>
            {item.label === "Home" && (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            )}
            {item.label === "Cart" && (
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cart ({cart.items.length})
              </Link>
            )}
            {item.label === "About" && (
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            )}
            {item.label === "Previous Purchases" && (
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                Previous Purchases
              </Link>
            )}
            {item.label === "Logout" && (
              <Link
                to="#!"
                style={{ textDecoration: "none", color: "black" }}
                onClick={logout}
              >
                Logout
              </Link>
            )}
          </Fragment>
        )}
        userItems={userItems}
        username={user.displayName}
        usernameSubtitle={user.email}
        userImgUrl={user.photoURL}
      />
    );
  } else if (user && admins.includes(user.email)) {
    return (
      <AppNavBar
        overrides={{
          Root: {
            style: { outline: "#4a4cb4 solid", backgroundColor: "#4a4cb4" },
          },
          AppName: {
            style: { color: "white" },
          },
        }}
        title="Will's Insurance LLC"
        mainItems={loggedInItems}
        mapItemToNode={(item) => (
          <Fragment>
            {item.label === "Home" && (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            )}
            {item.label === "Cart" && (
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cart ({cart.items.length})
              </Link>
            )}
            {item.label === "About" && (
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            )}
            {item.label === "Manage Insurances" && (
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "black" }}
              >
                Manage Insurances
              </Link>
            )}
            {item.label === "Logout" && (
              <Link
                to="#!"
                style={{ textDecoration: "none", color: "black" }}
                onClick={logout}
              >
                Logout
              </Link>
            )}
          </Fragment>
        )}
        userItems={adminItems}
        username={user.displayName}
        usernameSubtitle={user.email}
        userImgUrl={user.photoURL}
      />
    );
  } else {
    return (
      <AppNavBar
        overrides={{
          Root: {
            style: { outline: "#4a4cb4 solid", backgroundColor: "#4a4cb4" },
          },
          AppName: {
            style: { color: "white" },
          },
        }}
        title="Will's Insurance LLC"
        mainItems={mainItems}
        mapItemToNode={(item) => (
          <Fragment>
            {item.label === "Home" && (
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            )}
            {item.label === "Cart" && (
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Cart ({cart.items.length})
              </Link>
            )}
            {item.label === "Login" && (
              <Link
                to="#!"
                style={{ textDecoration: "none", color: "white" }}
                onClick={loginWithGoogle}
              >
                Login
              </Link>
            )}
            {item.label === "About" && (
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            )}
          </Fragment>
        )}
      />
    );
  }
};

Navbar.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Navbar);
