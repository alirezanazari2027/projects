import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider enableSystem attribute="class">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
