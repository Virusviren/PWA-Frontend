import React from "react";
import { Notification } from "baseui/notification";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div>
      <h1 style={{ margin: "40px 50px 30px" }}>Shopping Cart</h1>
      <div style={{ margin: "40px 50px 30px" }}>
        <Notification
          overrides={{
            Body: { style: { width: "auto" } },
          }}
        >
          Information : There are no items in your shopping cart!
        </Notification>
      </div>
      <div style={{ margin: "40px 50px 30px" }}>
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
