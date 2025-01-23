import { scan } from "react-scan"; // import this BEFORE react

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

if (typeof window !== "undefined") {
  scan({
    showToolbar: true,
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
