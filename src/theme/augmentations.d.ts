import type { JivicoPalette } from "./palette.js";

declare module "@mui/material/styles" {
  interface Palette {
    glass: JivicoPalette["glass"];
    "glass-surface"?: { main: string; light: string; dark: string; contrastText: string };
    glassSurface?: { main: string; light: string; dark: string; contrastText: string };
    gradients?: JivicoPalette["gradients"];
  }
  interface PaletteOptions {
    glass?: JivicoPalette["glass"];
    "glass-surface"?: { main: string; light: string; dark: string; contrastText: string };
    glassSurface?: { main: string; light: string; dark: string; contrastText: string };
    gradients?: JivicoPalette["gradients"];
  }
  interface TypeText {
    glassSurface?: string;
    "glass-surface"?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Button/Button" {
  interface ButtonPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface ChipPropsVariantOverrides {
    tonal: true;
  }
  interface ChipPropsSizeOverrides {
    large: true;
  }
}

declare module "@mui/material/Chip/Chip" {
  interface ChipPropsColorOverrides {
    glass: true;
    "glass-surface": true;
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
  interface TabsOwnProps {
    size?: "small" | "medium";
  }
}

declare module "@mui/material/Tabs/Tabs" {
  interface TabsOwnProps {
    size?: "small" | "medium";
  }
}

declare module "@mui/material/Tab" {
  interface TabOwnProps {
    size?: "small" | "medium";
  }
}

declare module "@mui/material/Tab/Tab" {
  interface TabOwnProps {
    size?: "small" | "medium";
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/TextField/TextField" {
  interface TextFieldPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Select" {
  interface SelectPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/Select/Select" {
  interface SelectPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/OutlinedInput" {
  interface OutlinedInputPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/OutlinedInput/OutlinedInput" {
  interface OutlinedInputPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/InputBase/InputBase" {
  interface InputBasePropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormControl/FormControl" {
  interface FormControlPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
}

declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    glass: true;
    "glass-surface": true;
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

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    glass: true;
    "glass-surface": true;
    gradient: true;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsColorOverrides {
    glass: true;
    "glass-surface": true;
    gradient: true;
  }
}

declare module "@mui/material/Box" {
  interface BoxPropsColorOverrides {
    glass: true;
    "glass-surface": true;
    primary: true;
    secondary: true;
    success: true;
    error: true;
    info: true;
    warning: true;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface ChipPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface TextFieldPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface SelectPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface FormControlPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface FormLabelPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface OutlinedInputPropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface InputBasePropsColorOverrides {
    glass: true;
    "glass-surface": true;
  }
  interface TypographyPropsColorOverrides {
    glass: true;
    "glass-surface": true;
    gradient: true;
  }
  interface TabsOwnProps {
    size?: "small" | "medium";
  }
  interface TabOwnProps {
    size?: "small" | "medium";
  }
}
