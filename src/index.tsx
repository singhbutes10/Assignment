import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { themeDefault } from "./Theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDefault}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
