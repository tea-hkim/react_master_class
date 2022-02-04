import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { RecoilRoot } from "recoil";
import App from "./App";
import { GlobalStyle } from "./style/GlobalStyled";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
