import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { GlassPanel } from "../src/components/index";
import { GradientText } from "../src/components/index";

export default function App() {
  const [text, setText] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h3" fontWeight={800} textAlign="center">
        <GradientText>Jivico Glass UI Playground</GradientText>
      </Typography>

      <GlassPanel>
        <Typography variant="h6" mb={2}>
          Glass Panel Test
        </Typography>
        <Typography color="text.secondary">
          This is an internal playground to test components in isolation.
          Changes to `src/` will hot-reload instantly here!
        </Typography>
      </GlassPanel>

      <GlassPanel>
        <Typography variant="h6" mb={2}>
          Inputs Test
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
          }}
        >
          <TextField label="Standard Input" placeholder="Type something..." />
          <TextField
            label="Multiline Input"
            placeholder="Multiline test..."
            multiline
            // rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary Button
          </Button> */}
          <Autocomplete
            multiple
            options={[
              "Option 1",
              "Option 2",
              "Option 3",
              "ajhbxahjbdxjahsbxjahsx",
              "ajhsbxagsgajxbagsxja",
            ]}
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete Test" />
            )}
          />
        </Box>
      </GlassPanel>
    </Box>
  );
}
