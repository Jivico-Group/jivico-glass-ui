import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@mui/material/styles",
    "@mui/material/colors",
    "@mui/material/CssBaseline",
    "@emotion/react",
    "@emotion/styled",
    "framer-motion",
    "lucide-react",
  ],
});
