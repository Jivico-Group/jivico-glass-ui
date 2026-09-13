import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { JivicoThemeProvider } from "../src/providers/JivicoThemeProvider.tsx";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <JivicoThemeProvider>
      <App />
    </JivicoThemeProvider>
  </React.StrictMode>,
);
