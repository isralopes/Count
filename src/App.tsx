import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./components/Router";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />

    </ThemeProvider>
  )
}


