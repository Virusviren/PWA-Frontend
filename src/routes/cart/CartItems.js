import React, { Fragment, useState } from "react";
import { Table } from "baseui/table-semantic";
import { SHAPE, SIZE } from "baseui/button";
import { Button } from "baseui/button";
import Checkout from "./Checkout";

const CartItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const COLUMNS = [
    "Serial No.",
    "Name",
    "Price (PLN)",
    "Subtotal (PLN)",
    "Remove",
  ];

  const DATA = [
    [
      "Sarah Brown",
      31,
      "100 Broadway St., New York City, New York",
      45,
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
      >
        Remove
      </Button>,
    ],
    [
      "Jane Smith",
      32,
      "100 Market St., San Francisco, California",
      50,
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
      >
        Remove
      </Button>,
    ],
    [
      "Joe Black",
      33,
      "100 Macquarie St., Sydney, Australia",
      99,
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
      >
        Remove
      </Button>,
    ],
  ];

  return (
    <Fragment>
      <Table columns={COLUMNS} data={DATA} />
      <div style={{ textAlign: "right", padding: "20px 0" }}>
        <h2>Total : 235 PLN</h2>
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

export default CartItems;
