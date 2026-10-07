import React from "react";
import { createRoot } from "react-dom/client";
import { JivicoGlassProvider } from "../src/providers/JivicoGlassProvider";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <JivicoGlassProvider>
      <App />
    </JivicoGlassProvider>
  </React.StrictMode>,
);
