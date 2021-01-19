import React, { Fragment, useState } from "react";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { SHAPE, SIZE } from "baseui/button";
import { Button } from "baseui/button";
import Checkout from "./Checkout";
import PropTypes from "prop-types";

const CartItems = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const DATA = cartItems;

  const prices = cartItems.map((item) => item.price + 1);
  const total = prices.reduce((a, b) => a + b);

  return (
    <Fragment>
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
          onClick={() => {
            setIsOpen(true);
          }}
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
