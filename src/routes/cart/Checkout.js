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

const Checkout = ({
  isOpen,
  setIsOpen,
  buyInsurance,
  email,
  total,
  items,
  clearCart,
}) => {
  const [tcAgree, setTCAgree] = useState(false);
  const [fullName, setFullName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState([]);
  const [streetName, setStreetName] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const handleConfirmAndPay = () => {
    const data = {
      fullName,
      passportNumber,
      gender: gender[0].genderValue,
      age: parseInt(age),
      mobileNumber,
      streetName,
      buildingNumber: parseInt(buildingNumber),
      apartmentNumber: parseInt(apartmentNumber),
      postalCode,
      city,
      region,
      email,
      total,
      items,
    };

    buyInsurance(data, clearCart);

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
          <Cell span={12} gridGaps={2}>
            <h3>Please enter the insurer's personal details</h3>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Full Name"
              caption="Please enter the insurer's full name"
            >
              <Input
                value={fullName}
                onChange={(event) => setFullName(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={6}>
            <FormControl
              label="Passport Number"
              caption="Please enter the passport number as seen on the insurer's passport"
            >
              <Input
                value={passportNumber}
                onChange={(event) =>
                  setPassportNumber(event.currentTarget.value)
                }
              />
            </FormControl>
          </Cell>
          <Cell span={4}>
            <FormControl label="Age" caption="Please enter the insurer's age">
              <Input
                value={age}
                onChange={(event) => setAge(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={4}>
            <FormControl
              label="Mobile Number"
              caption="Please enter the insurer's mobile number"
            >
              <Input
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.currentTarget.value)}
              />
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
                  { gender: "Male", genderValue: "Male" },
                  { gender: "Female", genderValue: "Female" },
                  { gender: "Other", genderValue: "Other" },
                ]}
                labelKey="gender"
                valueKey="genderValue"
                onChange={({ value }) => setGender(value)}
                value={gender}
              />
            </FormControl>
          </Cell>
          <Cell span={12} gridGaps={2}>
            <h3>Please enter the insurer's address</h3>
          </Cell>
          <Cell span={2}>
            <FormControl label="Street Name" caption="e.g. ul. Unicka">
              <Input
                value={streetName}
                onChange={(event) => setStreetName(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="Building Number" caption="e.g. 3">
              <Input
                value={buildingNumber}
                onChange={(event) =>
                  setBuildingNumber(event.currentTarget.value)
                }
              />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="Apartment Number" caption="e.g. 75">
              <Input
                value={apartmentNumber}
                onChange={(event) =>
                  setApartmentNumber(event.currentTarget.value)
                }
              />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="Post Code" caption="e.g. 20-126">
              <Input
                value={postalCode}
                onChange={(event) => setPostalCode(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={2}>
            <FormControl label="City" caption="e.g. Lublin">
              <Input
                value={city}
                onChange={(event) => setCity(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={2} gridGaps={24}>
            <FormControl label="Region" caption="e.g. Lubelskie">
              <Input
                value={region}
                onChange={(event) => setRegion(event.currentTarget.value)}
              />
            </FormControl>
          </Cell>
          <Cell span={12}>
            <FormControl
              label="Terms and Conditions"
              caption="Please accept the terms and conditions to proceed"
            >
              <Checkbox
                checked={tcAgree}
                onChange={(e) => setTCAgree(e.target.checked)}
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
        {gender === [] ||
        fullName === "" ||
        passportNumber === "" ||
        age === "" ||
        mobileNumber === "" ||
        streetName === "" ||
        buildingNumber === "" ||
        apartmentNumber === "" ||
        postalCode === "" ||
        city === "" ||
        region === "" ||
        tcAgree === false ? (
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
            onClick={handleConfirmAndPay}
            disabled
          >
            Confirm and Pay
          </ModalButton>
        ) : (
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
            onClick={handleConfirmAndPay}
          >
            Confirm and Pay
          </ModalButton>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default Checkout;
