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

const InsuranceInfo = ({ isOpen, setIsOpen }) => {
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
        <h3>Company Logo</h3>
        <img
          src="https://source.unsplash.com/user/erondu/700x400"
          alt="company-logo"
          style={{ width: "100%" }}
        ></img>
        <h3>Type : Health Insurance</h3>
        <h3>Posted : 2 months ago</h3>
        <p style={{ margin: "25px auto" }}></p>
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
      </ModalFooter>
    </Modal>
  );
};

export default InsuranceInfo;
