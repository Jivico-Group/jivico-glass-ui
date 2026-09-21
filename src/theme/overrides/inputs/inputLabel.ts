import type { Components, Theme } from "@mui/material/styles";
import type { JivicoPalette } from "../../palette";

export const getInputLabelOverrides = (
  palette: JivicoPalette,
): Components<Theme> => ({
  MuiInputLabel: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const colorKey = (
          ownerState.color ? ownerState.color : "primary"
        ) as keyof typeof palette;
        const activeColorGroup = (palette[colorKey] ||
          palette.primary) as Record<string, string>;
        const activeColor = activeColorGroup.main;
        const isSemantic =
          colorKey === "success" ||
          colorKey === "warning" ||
          colorKey === "error" ||
          colorKey === "info";

        let translate = "translate(18px, 13px) scale(1)"; // medium
        let shrinkTranslate = "translate(18px, -9px) scale(0.75)";

        if (ownerState.size === "small") {
          translate = "translate(14px, 8px) scale(1)";
          shrinkTranslate = "translate(14px, -9px) scale(0.75)";
        } else if ((ownerState.size as string) === "large") {
          translate = "translate(20px, 17px) scale(1)";
          shrinkTranslate = "translate(20px, -9px) scale(0.75)";
        }

        return {
          fontSize: "0.9375rem",
          color: isSemantic ? activeColor : palette.text.secondary,
          "&.Mui-focused": {
            color: activeColor,
          },
          // Use explicit class targeting and !important to beat MUI's default specificity
          "&.MuiInputLabel-outlined": {
            transform: `${translate} !important`,
            "&.MuiInputLabel-shrink": {
              transform: `${shrinkTranslate} !important`,
            },
          },
          ...(ownerState.variant === "outlined" && {
            // Also ensure that the legend width accommodates the horizontal padding changes
            "& + .MuiOutlinedInput-root > fieldset > legend": {
              marginLeft:
                ownerState.size === "small"
                  ? 0
                  : (ownerState.size as string) === "large"
                    ? 6
                    : 4,
            },
          }),
        };
      },
    },
  },
});
