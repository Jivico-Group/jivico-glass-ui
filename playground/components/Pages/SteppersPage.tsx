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

type StepperColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export const SteppersPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = ["Select Campaign", "Create an ad group", "Create an ad"];

  const stepperColors: {
    color: StepperColor;
    label: string;
    description: string;
  }[] = [
    {
      color: "primary",
      label: "Primary",
      description: "Monochrome brand workflow",
    },
    {
      color: "secondary",
      label: "Secondary",
      description: "Subtle neutral workflow",
    },
    {
      color: "accent",
      label: "Accent",
      description: "Jivico champagne / premium workflow",
    },
    {
      color: "info",
      label: "Info",
      description: "Informational workflow",
    },
    {
      color: "success",
      label: "Success",
      description: "Positive / completed workflow",
    },
    {
      color: "warning",
      label: "Warning",
      description: "Attention / caution workflow",
    },
    {
      color: "error",
      label: "Error",
      description: "Error / corrective workflow",
    },
  ];

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
      {/* ─────────────────────────────────────────────────────────────────────
          1. Horizontal Stepper
      ───────────────────────────────────────────────────────────────────── */}

      <DemoBlock
        id="horizontal-stepper"
        title="Horizontal Stepper"
        description="Linear workflow stepper with responsive step labels and dynamic progress lines."
        code={`<Stepper activeStep={activeStep} color="accent">
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>`}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} color="accent" sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-end",
            }}
          >
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
              color="accent"
              onClick={handleNext}
              size="small"
              disabled={activeStep === steps.length - 1}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
            </Button>
          </Box>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          2. Color Variants
      ───────────────────────────────────────────────────────────────────── */}

      <DemoBlock
        id="stepper-color-variants"
        title="Color Variants"
        description="Use the theme-level Stepper color to adapt the workflow to different UI contexts."
        code={`<Stepper activeStep={1} color="primary" />
<Stepper activeStep={1} color="secondary" />
<Stepper activeStep={1} color="accent" />
<Stepper activeStep={1} color="info" />
<Stepper activeStep={1} color="success" />
<Stepper activeStep={1} color="warning" />
<Stepper activeStep={1} color="error" />`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            width: "100%",
          }}
        >
          {stepperColors.map(({ color, label, description }) => (
            <Box key={color}>
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {label}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </Box>

              <Stepper activeStep={1} color={color}>
                {steps.map((step) => (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          ))}
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          3. All States
      ───────────────────────────────────────────────────────────────────── */}

      <DemoBlock
        id="stepper-states"
        title="Stepper States"
        description="Active, completed, upcoming, and error states using the accent color."
        code={`<Stepper activeStep={2} color="accent">
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>`}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={2} color="accent">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          4. Vertical Stepper
      ───────────────────────────────────────────────────────────────────── */}

      <DemoBlock
        id="vertical-stepper"
        title="Vertical Stepper"
        description="Vertical workflow presentation using the same theme-level color system."
        code={`<Stepper
  activeStep={1}
  orientation="vertical"
  color="accent"
>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>`}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 520,
          }}
        >
          <Stepper activeStep={1} orientation="vertical" color="accent">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </DemoBlock>

      {/* ─────────────────────────────────────────────────────────────────────
          5. Compact Stepper
      ───────────────────────────────────────────────────────────────────── */}

      <DemoBlock
        id="compact-stepper"
        title="Compact Stepper"
        description="A compact workflow suitable for dense forms and admin interfaces."
        code={`<Stepper
  activeStep={1}
  color="accent"
  sx={{
    "& .MuiStepLabel-label": {
      fontSize: "0.75rem",
    },
  }}
>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>`}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={1}
            color="accent"
            sx={{
              "& .MuiStepLabel-label": {
                fontSize: "0.75rem",
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
