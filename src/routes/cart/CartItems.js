import React, { Fragment, useState } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { SHAPE, SIZE } from "baseui/button";
import { Button } from "baseui/button";
import { Notification, KIND } from "baseui/notification";
import Checkout from "./Checkout";
import PropTypes from "prop-types";
import firebase from "firebase";
import admins from "../../utilities/admins";

const CartItems = ({ cartItems, removeFromCart, clearCart }) => {
  // Currently logged in user
  let user = firebase.auth().currentUser;

  // Toast trigger and message
  const [triggerToast, setTriggerToast] = useState(false);
  const [msg, setMsg] = useState("");

  // Checkout form modal
  const [isOpen, setIsOpen] = useState(false);

  // Shopping cart items
  const DATA = cartItems;

  // Calculate total price for items in the cart
  const prices = cartItems.map((item) => item.price + 1);
  const total = prices.reduce((a, b) => a + b);

  // Handle checkout process
  const handleCheckout = () => {
    if (user && !admins.includes(user.email)) {
      setIsOpen(true);
    } else if (user && admins.includes(user.email)) {
      setMsg("You are not authorized to checkout.");
      setTriggerToast(true);

      setTimeout(() => {
        setTriggerToast(false);
        setMsg("");
      }, 3000);
    } else {
      setMsg("Please login before checking out.");
      setTriggerToast(true);

      setTimeout(() => {
        setTriggerToast(false);
        setMsg("");
      }, 3000);
    }
  };

  return (
    <Fragment>
      {triggerToast && (
        <div style={{ margin: "0 0 30px" }}>
          <Notification
            kind={KIND.negative}
            overrides={{
              Body: { style: { width: "auto" } },
            }}
          >
            {msg}
          </Notification>
        </div>
      )}
      <TableBuilder data={DATA}>
        <TableBuilderColumn header="Serial No.">
          {(row) => row.serialNo}
        </TableBuilderColumn>
        <TableBuilderColumn header="Insurance Name">
          {(row) => row.insuranceName}
        </TableBuilderColumn>
        <TableBuilderColumn header="Price (PLN)">
          {(row) => row.price}
        </TableBuilderColumn>
        <TableBuilderColumn header="Subtotal (PLN)">
          {(row) => row.price + 1}
        </TableBuilderColumn>
        <TableBuilderColumn header="Remove">
          {(row) => (
            <Button
              overrides={{
                BaseButton: {
                  style: {
                    color: "white",
                    backgroundColor: "#4a4cb4",
                  },
                },
              }}
              shape={SHAPE.pill}
              size={SIZE.mini}
              style={{ margin: "0 20px" }}
              onClick={() => {
                removeFromCart(row);
              }}
            >
              Remove
            </Button>
          )}
        </TableBuilderColumn>
      </TableBuilder>
      <div style={{ textAlign: "right", padding: "20px 0" }}>
        <h2>Total : {total} PLN</h2>
      </div>
      <div style={{ textAlign: "right" }}>
        <Button
          overrides={{
            BaseButton: {
              style: {
                color: "white",
                backgroundColor: "#4a4cb4",
              },
            },
          }}
          shape={SHAPE.pill}
          style={{ margin: "0 20px" }}
          onClick={clearCart}
        >
          Clear cart
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                color: "white",
                backgroundColor: "#4a4cb4",
              },
            },
          }}
          shape={SHAPE.pill}
          onClick={handleCheckout}
        >
          Proceed to checkout
        </Button>
      </div>
      <Checkout isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  );
};

CartItems.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItems;
