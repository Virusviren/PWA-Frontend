import React, { Fragment } from "react";
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
import moment from "moment";

const PurchaseInfo = ({ isOpen, setIsOpen, purchase }) => {
  const validTill = moment(purchase.purchasedOn)
    .format("MMMM Do, YYYY")
    .toString();

  const expiryYear =
    parseInt(validTill.slice(validTill.length - 4, validTill.length)) + 1;

  const finalString =
    moment(purchase.purchasedOn)
      .format("MMMM Do, YYYY")
      .toString()
      .slice(0, validTill.length - 4) + expiryYear.toString();

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
          <Cell span={12} gridGaps={26}>
            <strong>
              Insurance (s) bought : (In case you bought multiple insurances,
              every company and the type of insurance you bought from them are
              shown below)
            </strong>
          </Cell>
          <Cell span={6} gridGaps={16}>
            <strong>Company Name </strong>
          </Cell>
          <Cell span={6} gridGaps={16}>
            <strong>Insurance Type </strong>
          </Cell>
          {purchase.items.map((item) => (
            <Fragment>
              <Cell span={6} gridGaps={16}>
                {item.companyName}
              </Cell>
              <Cell span={6} gridGaps={16}>
                {item.type}
              </Cell>
            </Fragment>
          ))}
          <Cell span={12} gridGaps={24}></Cell>
          <Cell span={4} gridGaps={24}>
            <strong>Purchased On : </strong>{" "}
            {moment(purchase.purchasedOn).format("MMMM Do, YYYY")}
          </Cell>
          <Cell span={4} gridGaps={24}>
            <strong>Expires On : </strong> {finalString}
          </Cell>
          <Cell span={4} gridGaps={24}>
            <strong>Transaction ID : </strong>
            {purchase.transactionId}
          </Cell>
          <Cell span={12} gridGaps={6}>
            <h2>Insurer's Details</h2>
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Full Name : </strong>
            {purchase.fullName}
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Mobile Number : </strong>
            {purchase.mobileNumber}
          </Cell>
          <Cell span={3} gridGaps={24}>
            <strong>Passport Number : </strong>
            {purchase.passportNumber}
          </Cell>
          <Cell span={1} gridGaps={24}>
            <strong>Age : </strong>
            {purchase.age}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Gender : </strong>
            {purchase.gender}
          </Cell>
          <Cell span={12} gridGaps={6}>
            <h2>Insurer's Address</h2>
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Street Name : </strong>
            {purchase.streetName}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Building Number : </strong>
            {purchase.buildingNumber}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Apartment Number : </strong>
            {purchase.apartmentNumber}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Postal Code : </strong>
            {purchase.postalCode}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>City : </strong>
            {purchase.city}
          </Cell>
          <Cell span={2} gridGaps={24}>
            <strong>Region : </strong>
            {purchase.region}
          </Cell>
          <Cell span={12} gridGaps={6}>
            <h2>Amount Paid : {purchase.total} PLN</h2>
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
