import React from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './theme/globalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './pages/layout';
import { Bag } from './pages/bag';
import { NoPage } from './pages/noPage';
import { Product } from './pages/product';
import { defaultTheme } from './theme/theme';

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='bag' element={<Bag />} />
              <Route path='/product' element={<Product />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>


      </ThemeProvider>
    </>
  );
}

export default App;
