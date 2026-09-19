import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { JivicoThemeProvider } from "../src/providers/JivicoThemeProvider";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <JivicoThemeProvider>
      <App />
    </JivicoThemeProvider>
  </React.StrictMode>,
);
