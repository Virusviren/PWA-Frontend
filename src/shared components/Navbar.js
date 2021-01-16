import React, { Fragment } from "react";
import { AppNavBar } from "baseui/app-nav-bar";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Development ONLY!!!
  let isLoggedIn = true;

  // Guest navabar items
  const mainItems = [{ label: "Home" }, { label: "Cart" }, { label: "About" }];

  // Logged in navabar items for user
  const userItems = [{ label: "Previous Purchases" }, { label: "Logout" }];

  // Logged in navabar items for admin
  const adminItems = [{ label: "Manage Insurances" }, { label: "Logout" }];

  if (isLoggedIn) {
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
              <Link to="#!" style={{ textDecoration: "none", color: "white" }}>
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
              <Link to="#!" style={{ textDecoration: "none", color: "black" }}>
                Logout
              </Link>
            )}
          </Fragment>
        )}
        userItems={userItems}
        username="John Cramer"
        usernameSubtitle="john.cramer@gmail.com"
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
              <Link to="#!" style={{ textDecoration: "none", color: "white" }}>
                Cart (0)
              </Link>
            )}
            {item.label === "Login" && (
              <Link to="#!" style={{ textDecoration: "none", color: "white" }}>
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
