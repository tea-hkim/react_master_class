import React, { useState } from "react";
import Router from "./Router";
import { GlobalStyle } from "./style/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { lighttheme, darkTheme } from "./theme";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lighttheme}>
        <button onClick={() => setIsDark((cur) => !cur)}>dark mode</button>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
