import React from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './theme/globalStyle';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes/routes';
import { defaultTheme } from './theme/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
