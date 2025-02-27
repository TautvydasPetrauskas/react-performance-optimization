import { scan } from "react-scan"; // import this BEFORE react

import { createRoot } from "react-dom/client";
import App from "./App";

if (typeof window !== "undefined") {
  scan({
    showToolbar: true,
    enabled: true,
    log: true,
  });
}

createRoot(document.getElementById("root")!).render(<App />);
