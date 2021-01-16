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

const InsuranceDetails = ({ isOpen, setIsOpen }) => {
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
      <ModalHeader>Company Name</ModalHeader>
      <ModalBody>
        <h3>Type : Health Insurance</h3>
        <h3>Insurance name</h3>
        <p>Insurance details</p>
        <h3>Price - 90 PLN per year</h3>
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
                backgroundColor: "#1E54B7",
              },
            },
          }}
          shape={SHAPE.pill}
        >
          Add to cart
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default InsuranceDetails;
