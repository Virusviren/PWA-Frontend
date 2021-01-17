import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { SHAPE } from "baseui/button";
import { Grid, Cell } from "baseui/layout-grid";

const PurchaseInfo = ({ isOpen, setIsOpen, purchase }) => {
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.auto}
      role={ROLE.dialog}
    >
      <ModalBody>
        <Grid>
          <Cell span={12} gridGaps={6}>
            <h2>Insurance Details</h2>
          </Cell>
          <Cell span={6} gridGaps={16}>
            <strong>Company Name :</strong>
          </Cell>
          <Cell span={6} gridGaps={16}>
            <strong>Insurance Type :</strong> Life Insurance
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Purchased On :</strong> 12th January, 2021
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Valid Till :</strong> 12th January, 2022
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Transaction ID :</strong>{" "}
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Insurance Number :</strong>{" "}
          </Cell>
          <Cell span={12} gridGaps={6}>
            <h2>Insurer's Details</h2>
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Full Name :</strong>{" "}
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Mobile Number :</strong>{" "}
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Passport Number :</strong>{" "}
          </Cell>
          <Cell span={1} gridGaps={24}>
            <strong>Age :</strong>{" "}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Gender :</strong>{" "}
          </Cell>
          <Cell span={12} gridGaps={6}>
            <h2>Insurer's Address</h2>
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Street Name :</strong>{" "}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Building Number :</strong>{" "}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Apartment Number :</strong>{" "}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Postal Code :</strong>{" "}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>City :</strong>{" "}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Region :</strong>{" "}
          </Cell>
          <Cell span={12} gridGaps={6}>
            <h2>Amount Paid : 99 PLN</h2>
          </Cell>
        </Grid>
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
