import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import i18n from "./i18n/i18n";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
