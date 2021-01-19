import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { KIND as ButtonKind, SHAPE } from "baseui/button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../../redux/actions/cartActions";

const InsuranceDetails = ({ isOpen, setIsOpen, insurance, addToCart }) => {
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>{insurance.companyName}</ModalHeader>
      <ModalBody>
        <h3>Type : Health Insurance</h3>
        <h3>Posted : {insurance.postedOn}</h3>
        <p style={{ margin: "25px auto" }}></p>
        <h3>Insurance Name : {insurance.insuranceName}</h3>
        <h3>Details : {insurance.insuranceDetails}</h3>
        <p style={{ margin: "25px auto" }}></p>
        <h3>Price : {insurance.price} PLN per year</h3>
      </ModalBody>
      <ModalFooter>
        <ModalButton
          kind={ButtonKind.tertiary}
          shape={SHAPE.pill}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </ModalButton>
        <ModalButton
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
            addToCart(insurance);
            setIsOpen(false);
          }}
        >
          Add to cart
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

InsuranceDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  insurance: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addToCart })(InsuranceDetails);
