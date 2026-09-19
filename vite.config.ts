import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist-docs",
    emptyOutDir: true,
  },
  server: {
    port: 3002,
    open: true,
  },
});
