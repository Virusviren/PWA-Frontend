import React from "react";
import { Notification } from "baseui/notification";
import CartItems from "./CartItems";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1 style={{ margin: "40px 50px 30px" }}>Shopping Cart</h1>
      {cart.items.length <= 0 && (
        <div style={{ margin: "40px 50px 60px" }}>
          <Notification
            overrides={{
              Body: { style: { width: "auto" } },
            }}
          >
            There are no items in your shopping cart!
          </Notification>
        </div>
      )}
      {cart.items.length > 0 && (
        <div style={{ margin: "40px 50px 60px" }}>
          <CartItems cartItems={cart.items} removeFromCart={removeFromCart} />
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
