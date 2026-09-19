import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentPage } from "../Common/ComponentPage.js";
import { DemoBlock } from "../Common/DemoBlock.js";
import { GradientText } from "../../../src/components/index.js";
import { useGlassMode } from "../../../src/context/ThemeContext.js";

export const TypographyPage: React.FC = () => {
  const { mode } = useGlassMode();
  const isDark = mode === "dark";

  return (
    <ComponentPage
      title="Typography & Fonts"
      description="Use typography to present your design and content as clearly and efficiently as possible, featuring Montserrat, Google Sans Flex, and Space Grotesk."
      category="Data Display"
      badges={["Typography", "Montserrat", "GradientText"]}
    >
      {/* 1. Gradient Text */}
      <DemoBlock
        id="gradient-text"
        title="Gradient Text"
        description="A specialized text component applying Apple specular gradients across headings."
        code={`import { GradientText } from 'jivico-glass-ui';

<Typography variant="h3">
  <GradientText isDark={isDark}>Luxury Glass UI</GradientText>
</Typography>`}
      >
        <Typography variant="h3" sx={{ fontWeight: 800 }}>
          <GradientText isDark={isDark}>Jivico Design System</GradientText>
        </Typography>
      </DemoBlock>

      {/* 2. Heading Hierarchy */}
      <DemoBlock
        id="headings"
        title="Heading Scale"
        description="Standardized typographic scale calibrated for clarity and modern contrast."
        code={`<Typography variant="h1">h1. Heading</Typography>
<Typography variant="h2">h2. Heading</Typography>
<Typography variant="h3">h3. Heading</Typography>
<Typography variant="h4">h4. Heading</Typography>
<Typography variant="h5">h5. Heading</Typography>
<Typography variant="h6">h6. Heading</Typography>`}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            width: "100%",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            h3. Heading (2.5rem / 40px)
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            h4. Heading (2rem / 32px)
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            h5. Heading (1.5rem / 24px)
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            h6. Heading (1.25rem / 20px)
          </Typography>
          <Typography variant="body1" color="text.secondary">
            body1. Montserrat / Space Grotesk body typography with comfortable
            1.6 line height and optical kerning.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            caption. Metadata and auxiliary text tokens.
          </Typography>
        </Box>
      </DemoBlock>
    </ComponentPage>
  );
};
