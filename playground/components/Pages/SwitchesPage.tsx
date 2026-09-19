import React, { useState } from "react";
import {
  Box,
  Switch,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";

export const SwitchesPage: React.FC = () => {
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [radio, setRadio] = useState("a");

  return (
    <ComponentPage
      title="Switch & Selection Controls"
      description="Switches toggle the state of a single setting on or off. Styled with a frosted glass track, floating pill thumb, and subtle specular lighting."
      category="Inputs"
      badges={["Inputs", "Glass Switch", "Tactile Thumb"]}
    >
      {/* 1. Switches */}
      <DemoBlock
        id="switches"
        title="Glass Switches"
        description="Luxury glass switches with translucent track, smooth spring physics, and focus halo."
        code={`<Switch defaultChecked />
<Switch />
<Switch disabled defaultChecked />
<Switch size="small" defaultChecked />`}
      >
        <FormGroup row sx={{ gap: 3, alignItems: "center" }}>
          <FormControlLabel
            control={
              <Switch checked={sw1} onChange={(e) => setSw1(e.target.checked)} />
            }
            label="Glass Active"
          />
          <FormControlLabel
            control={
              <Switch checked={sw2} onChange={(e) => setSw2(e.target.checked)} />
            }
            label="Glass Inactive"
          />
          <FormControlLabel
            control={<Switch defaultChecked size="small" />}
            label="Small"
          />
          <FormControlLabel
            control={<Switch disabled defaultChecked />}
            label="Disabled"
          />
        </FormGroup>
      </DemoBlock>

      {/* 2. Checkboxes */}
      <DemoBlock
        id="checkboxes"
        title="Checkboxes"
        description="Checkboxes allow users to select one or more items from a set."
        code={`<Checkbox defaultChecked />
<Checkbox />
<Checkbox disabled defaultChecked />`}
      >
        <FormGroup row sx={{ gap: 2 }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
          <FormControlLabel control={<Checkbox disabled defaultChecked />} label="Disabled" />
        </FormGroup>
      </DemoBlock>

      {/* 3. Radio Buttons */}
      <DemoBlock
        id="radio-buttons"
        title="Radio Buttons"
        description="Radio buttons allow users to select one option from a mutually exclusive set."
        code={`<RadioGroup value={val} onChange={(e) => setVal(e.target.value)} row>
  <FormControlLabel value="a" control={<Radio />} label="Option A" />
  <FormControlLabel value="b" control={<Radio />} label="Option B" />
</RadioGroup>`}
      >
        <RadioGroup
          row
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          sx={{ gap: 2 }}
        >
          <FormControlLabel value="a" control={<Radio />} label="Standard" />
          <FormControlLabel value="b" control={<Radio />} label="Luxury Glass" />
          <FormControlLabel value="c" control={<Radio />} label="Monochrome" />
        </RadioGroup>
      </DemoBlock>
    </ComponentPage>
  );
};
