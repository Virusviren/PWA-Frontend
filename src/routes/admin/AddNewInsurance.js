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
import { Textarea } from "baseui/textarea";
import { Select } from "baseui/select";
import { Grid, Cell } from "baseui/layout-grid";
import PropTypes from "prop-types";

const AddNewInsurance = ({ isOpen, setIsOpen, addInsurance, email }) => {
  const [companyName, setCompanyName] = useState("");
  const [insuranceName, setInsuranceName] = useState("");
  const [companyLogoURL, setCompanyLogoURL] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState([]);

  const handleSubmit = () => {
    const data = {
      companyName,
      insuranceName,
      companyLogoURL,
      details,
      type: type[0].insuranceValue,
      price: parseFloat(price),
      email,
    };

    addInsurance(data);

    setIsOpen(false);
  };

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
              <Input
                value={companyName}
                onChange={(event) => setCompanyName(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Company Logo URL"
              caption="Please enter the URL of the company's logo"
            >
              <Input
                value={companyLogoURL}
                onChange={(event) =>
                  setCompanyLogoURL(event.currentTarget.value)
                }
              />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance Name"
              caption="Please enter the insurance's name"
            >
              <Input
                value={insuranceName}
                onChange={(event) =>
                  setInsuranceName(event.currentTarget.value)
                }
              />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance Details"
              caption="Please enter all the necessary details for the insurance"
            >
              <Textarea
                value={details}
                onChange={(event) => setDetails(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance Price (PLN)"
              caption="Please enter the price of the insurance per year in PLN"
            >
              <Input
                value={price}
                onChange={(event) => setPrice(event.currentTarget.value)}
                required
              />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Insurance type"
              caption="Please select the type of insurance"
            >
              <Select
                options={[
                  {
                    insuranceType: "Health Insurance",
                    insuranceValue: "Health Insurance",
                  },
                  {
                    insuranceType: "Life Insurance",
                    insuranceValue: "Life Insurance",
                  },
                  {
                    insuranceType: "Travel Insurance",
                    insuranceValue: "Travel Insurance",
                  },
                ]}
                labelKey="insuranceType"
                valueKey="insuranceValue"
                onChange={({ value }) => setType(value)}
                value={type}
                required
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
          onClick={handleSubmit}
        >
          Submit
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

AddNewInsurance.propTypes = {
  addInsurance: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default AddNewInsurance;
