import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { DesignSystem } from "@styles/design-system";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "@styles/global-styles";
import { Router } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={DesignSystem}>
      <GlobalStyles />
      <RouterProvider router={Router} />
    </ThemeProvider>
    <ToastContainer />
  </StrictMode>
);
