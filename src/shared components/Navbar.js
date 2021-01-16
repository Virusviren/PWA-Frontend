import React, { Fragment } from "react";
import { AppNavBar } from "baseui/app-nav-bar";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Guest navabar items
  const mainItems = [
    { label: "Home" },
    { label: "Cart" },
    { label: "Login" },
    { label: "About" },
  ];

  // Logged in navabar items
  const userItems = [{ label: "Previous Purchases" }, { label: "Logout" }];

  return (
    <AppNavBar
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            outline: `${$theme.colors.backgroundAccent} solid`,
            backgroundColor: $theme.colors.backgroundAccent,
          }),
        },
        AppName: {
          style: ({ $theme }) => ({
            color: $theme.colors.primaryB,
          }),
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
};

export default Navbar;
