import type { JivicoPalette } from "./palette.js";

declare module "@mui/material/styles" {
  interface Palette {
    glass: JivicoPalette["glass"];
    gradients?: JivicoPalette["gradients"];
  }
  interface PaletteOptions {
    glass?: JivicoPalette["glass"];
    gradients?: JivicoPalette["gradients"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    glass: true;
  }
  interface ChipPropsVariantOverrides {
    tonal: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/Tabs" {
  interface TabsPropsIndicatorColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/Switch" {
  interface SwitchPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/Slider" {
  interface SliderPropsColorOverrides {
    glass: true;
    success: true;
    warning: true;
    error: true;
    info: true;
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    glass: true;
  }
}

declare module "@mui/material/Avatar" {
  interface AvatarPropsVariantOverrides {
    glass: true;
  }
}
