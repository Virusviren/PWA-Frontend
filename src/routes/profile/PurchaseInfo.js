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
import { SHAPE } from "baseui/button";

const PurchaseInfo = ({ isOpen, setIsOpen }) => {
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
        <p style={{ margin: "25px auto" }}></p>
        <h3>Purchase Date : 12th January, 2021</h3>
        <h3>Transaction ID : 9988997766</h3>
        <h3>Insurance Number : 9988997766</h3>
        <p style={{ margin: "25px auto" }}></p>
        <h3>Insurer's details : </h3>
        <h4>Full Name</h4>
        <h4>Passport Number</h4>
        <h4>Age, Gender</h4>
        <h4>Address</h4>
        <p style={{ margin: "25px auto" }}></p>
        <h3>Valid till : 12th January, 2022</h3>
        <p style={{ margin: "25px auto" }}></p>
        <h3>Amount Paid : 90 PLN</h3>
      </ModalBody>
      <ModalFooter>
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
            setIsOpen(false);
          }}
        >
          Close
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default PurchaseInfo;
