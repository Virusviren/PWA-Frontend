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
import moment from "moment";

const InsuranceInfo = ({ isOpen, setIsOpen, insurance }) => {
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
        <h3>Company Logo</h3>
        <img
          src={insurance.companyLogoURL}
          alt="company-logo"
          style={{ width: "100%" }}
        ></img>
        <h3>Type : {insurance.type}</h3>
        <h3>Posted : {moment(insurance.postedOn).format("MMMM Do, YYYY")}</h3>
        <p style={{ margin: "25px auto" }}></p>
        <h3>{insurance.insuranceName}</h3>
        <p>{insurance.details}</p>
        <h3>Price - {insurance.price} PLN per year</h3>
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
