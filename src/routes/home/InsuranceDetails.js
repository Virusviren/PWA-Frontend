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

const InsuranceDetails = ({ isOpen, setIsOpen, insurance }) => {
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
        >
          Add to cart
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default InsuranceDetails;
