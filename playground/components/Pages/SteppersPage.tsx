import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";

export const SteppersPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = ["Select Campaign", "Create an ad group", "Create an ad"];

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <ComponentPage
      title="Stepper"
      description="Steppers convey progress through numbered steps. Styled with minimal circular indicators and sleek connector borders."
      category="Navigation"
      badges={["Navigation", "Steppers", "Workflow"]}
    >
      {/* 1. Horizontal Stepper */}
      <DemoBlock
        id="horizontal-stepper"
        title="Horizontal Stepper"
        description="Linear workflow stepper with responsive step labels and dynamic progress lines."
        code={`<Stepper activeStep={activeStep}>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>`}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              color="glass"
              size="small"
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              size="small"
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
            </Button>
          </Box>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
