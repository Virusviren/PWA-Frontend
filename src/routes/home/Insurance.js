import React, { useState } from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button, SHAPE } from "baseui/button";
import InsuranceDetails from "./InsuranceDetails";

const Insurance = ({ insurance }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      overrides={{
        Root: {
          style: { width: "auto", margin: "25px auto", height: "auto" },
        },
        HeaderImage: {
          style: { objectFit: "cover", height: "200px" },
        },
        Title: {
          style: { height: "70px" },
        },
      }}
      headerImage={insurance.companyLogoURL}
      title={insurance.companyName}
    >
      <StyledBody>
        <p style={{ height: "75px" }}>{insurance.insuranceName}</p>
        <p>
          Price : <strong>{insurance.price} PLN</strong> per year
        </p>
      </StyledBody>
      <StyledAction>
        <Button
          overrides={{
            BaseButton: {
              style: {
                width: "100%",
                color: "white",
                backgroundColor: "#4a4cb4",
              },
            },
          }}
          shape={SHAPE.pill}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Details
        </Button>
      </StyledAction>
      <InsuranceDetails
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        insurance={insurance}
      />
    </Card>
  );
};

export default Insurance;
