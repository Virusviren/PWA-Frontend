import React, { Fragment, useState, useEffect } from "react";
import { AppNavBar } from "baseui/app-nav-bar";
import { Link } from "react-router-dom";
import firebase from "firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const provider = new firebase.auth.GoogleAuthProvider();

  const loginWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {});
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign out successful
      })
      .catch((error) => {
        // An error happened.
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

  // Admins
  const admins = ["xd@gmail.com"];

  // Guest navabar items
  const mainItems = [
    { label: "Home" },
    { label: "Login" },
    { label: "Cart" },
    { label: "About" },
  ];

  // Logged in user's navabar items
  const loggedInItems = [
    { label: "Home" },
    { label: "Cart" },
    { label: "About" },
  ];

  // Logged in navabar items for user
  const userItems = [{ label: "Previous Purchases" }, { label: "Logout" }];

  // Logged in navabar items for admin
  const adminItems = [{ label: "Manage Insurances" }, { label: "Logout" }];

  if (user !== null && !admins.includes(user.email)) {
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
                Cart (0)
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
  } else if (user !== null && admins.includes(user.email)) {
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
                Cart (0)
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
              <Link to="#!" style={{ textDecoration: "none", color: "black" }}>
                Logout
              </Link>
            )}
          </Fragment>
        )}
        userItems={adminItems}
        username="Rocky Balboa"
        usernameSubtitle="rocky.balboa@gmail.com"
        userImgUrl="https://source.unsplash.com/user/erondu/700x400"
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
                Cart (3)
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

export default Navbar;
