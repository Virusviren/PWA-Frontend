import React, { useState } from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button, SHAPE } from "baseui/button";
import InsuranceDetails from "./InsuranceDetails";

const Insurance = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      overrides={{ Root: { style: { width: "auto", margin: "25px auto" } } }}
      headerImage={"https://source.unsplash.com/user/erondu/700x400"}
      title="Company Name"
    >
      <StyledBody>
        <p>Insurance name</p>
        <p>Price - 90 PLN per year</p>
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
      <InsuranceDetails isOpen={isOpen} setIsOpen={setIsOpen} />
    </Card>
  );
};

export default Insurance;
