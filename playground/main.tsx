import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { JivicoGlassProvider } from "../src/providers/JivicoGlassProvider";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <JivicoGlassProvider>
      <App />
    </JivicoGlassProvider>
  </React.StrictMode>,
);
