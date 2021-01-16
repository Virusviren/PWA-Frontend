import React from "react";
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
import { Textarea } from "baseui/textarea";
import { Select } from "baseui/select";
import { Grid, Cell } from "baseui/layout-grid";

const AddNewInsurance = ({ isOpen, setIsOpen }) => {
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
          <Cell span={12} gridGaps={24}>
            <h2>Please fill out all the details to add a new insurance</h2>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Company Name"
              caption="Please enter the company's name"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Company Logo URL"
              caption="Please enter the URL of the company's logo"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance Name"
              caption="Please enter the insurance's name"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance Details"
              caption="Please enter all the necessary details for the insurance"
            >
              <Textarea id="textarea-id" />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance Price (PLN)"
              caption="Please enter the price of the insurance per year in PLN"
            >
              <Input id="input-id" />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance type"
              caption="Please select the type of insurance"
            >
              <Select
                id="select-id"
                options={[
                  { id: "Health Insurance", type: "healthInsurance" },
                  { id: "Life Insurance", type: "lifeInsurance" },
                  { id: "Travel Insurance", type: "travelInsurance" },
                ]}
                labelKey="id"
                valueKey="type"
              />
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
          Submit
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewInsurance;
