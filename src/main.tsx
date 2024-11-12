import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Start } from "@pages/start/start";
import { ThemeProvider } from "styled-components";
import { DesignSystem } from "@styles/design-system";
import { GlobalStyles } from "@styles/global-styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={DesignSystem}>
      <GlobalStyles />
      <Start />
    </ThemeProvider>
  </StrictMode>
);
