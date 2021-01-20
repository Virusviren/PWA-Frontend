import React from "react";
import { KIND, Notification } from "baseui/notification";
import CartItems from "./CartItems";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeFromCart, clearCart } from "../../redux/actions/cartActions";
import { buyInsurance } from "../../redux/actions/userActions";

const Cart = ({ cart, removeFromCart, clearCart, buyInsurance, user }) => {
  return (
    <div>
      <h1 style={{ margin: "40px 50px 30px" }}>Shopping Cart</h1>
      {!user.buyInsuranceLoading &&
        cart.items.length <= 0 &&
        user.buyInsuranceSuccess === null && (
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
      {!user.buyInsuranceLoading && user.buyInsuranceError !== null && (
        <div style={{ margin: "40px 50px 30px" }}>
          <Notification
            overrides={{
              Body: { style: { width: "auto" } },
            }}
            kind={KIND.negative}
          >
            {user.buyInsuranceError.msg}
          </Notification>
        </div>
      )}
      {!user.buyInsuranceLoading && user.buyInsuranceSuccess !== null && (
        <div style={{ margin: "40px 50px 30px" }}>
          <Notification
            overrides={{
              Body: { style: { width: "auto" } },
            }}
            kind={KIND.positive}
          >
            {user.buyInsuranceSuccess.msg}
          </Notification>
        </div>
      )}
      {user.buyInsuranceLoading && (
        <div style={{ margin: "40px 50px 30px" }}>
          <Notification
            overrides={{
              Body: { style: { width: "auto" } },
            }}
            kind={KIND.info}
          >
            Please wait while the payment is being made. Do not refresh this
            page!
          </Notification>
        </div>
      )}
      {!user.buyInsuranceLoading && cart.items.length > 0 && (
        <div style={{ margin: "40px 50px 60px" }}>
          <CartItems
            cartItems={cart.items}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            buyInsurance={buyInsurance}
          />
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  buyInsurance: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user,
});

export default connect(mapStateToProps, {
  removeFromCart,
  clearCart,
  buyInsurance,
})(Cart);
