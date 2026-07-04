import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import i18n from "./i18n/i18n";

import { ThemeProvider } from "next-themes";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider enableSystem attribute="class">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
