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

const EditInsurance = ({
  isOpen,
  setIsOpen,
  insurance,
  email,
  updateInsurance,
}) => {
  const [companyName, setCompanyName] = useState(insurance.companyName);
  const [insuranceName, setInsuranceName] = useState(insurance.insuranceName);
  const [companyLogoURL, setCompanyLogoURL] = useState(
    insurance.companyLogoURL
  );
  const [details, setDetails] = useState(insurance.details);
  const [price, setPrice] = useState(insurance.price.toString());
  const [type, setType] = useState([
    {
      insuranceType: insurance.type,
      insuranceValue: insurance.type,
    },
  ]);

  const handleUpdate = () => {
    const data = {
      companyName,
      insuranceName,
      companyLogoURL,
      details,
      type: type[0].insuranceValue,
      price: parseFloat(price),
      email,
    };

    updateInsurance(data, insurance._id);

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
            <h2>Please change the necessary details to update the insurance</h2>
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
          onClick={handleUpdate}
        >
          Update
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default EditInsurance;
