import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE,
} from "baseui/modal";
import { SHAPE, KIND as ButtonKind } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Grid, Cell } from "baseui/layout-grid";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";

const Checkout = ({ isOpen, setIsOpen }) => {
  const [checked, setChecked] = useState(false);

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
          <Cell span={12} gridGaps={2}>
            <h3>Please enter the insurer's personal details</h3>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Full Name"
              caption="Please enter the insurer's full name"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Passport Number"
              caption="Please enter the passport number as seen on the insurer's passport"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={4}>
            <FormControl label="Age" caption="Please enter the insurer's age">
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={4}>
            <FormControl
              label="Mobile Number"
              caption="Please enter the insurer's mobile number"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={4} gridGaps={2}>
            <FormControl
              label="Gender"
              caption="Please select the gender of the insurer"
            >
              <Select
                id="select-id"
                options={[
                  { id: "Male", gender: "male" },
                  { id: "Female", gender: "female" },
                  { id: "Other", gender: "other" },
                ]}
                labelKey="id"
                valueKey="gender"
              />
            </FormControl>
          </Cell>
          <Cell span={12} gridGaps={2}>
            <h3>Please enter the insurer's address</h3>
          </Cell>
          <Cell span={2}>
            <FormControl label="Street Name" caption="e.g. ul. Unicka">
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="Building Number" caption="e.g. 3">
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="Apartment Number" caption="e.g. 75 D">
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl
              label="Post Code"
              caption="e.g. 20-126, without dashes"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="City" caption="e.g. Lublin">
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={2} gridGaps={24}>
            <FormControl label="Region" caption="e.g. Lubelskie">
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={12}>
            <FormControl
              label="Terms and Conditions"
              caption="Please accept the terms and conditions to proceed"
            >
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                labelPlacement={LABEL_PLACEMENT.right}
              >
                I agree to the processing of my personal data, terms and
                conditions required by Williams's Insurance LLC, New York, New
                York, USA.
              </Checkbox>
            </FormControl>
          </Cell>
        </Grid>
      </ModalBody>
      <ModalFooter>
        <ModalButton
          kind={ButtonKind.tertiary}
          shape={SHAPE.pill}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cancel
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
            setIsOpen(false);
          }}
        >
          Confirm and Pay
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default Checkout;
