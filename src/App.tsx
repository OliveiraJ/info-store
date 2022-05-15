import React from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './theme/globalStyle';
import { MainContainer, TopBarContainer, FooterContainer, GridLayout } from './components/containers/containers';
import { Main } from './components/main/main';
import { TopBar } from './components/top-bar/top-bar';
import { Footer } from './components/footer/footer';
import { defaultTheme } from './theme/theme';

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={defaultTheme}>

        <GridLayout>
          <TopBarContainer>
            <TopBar />
          </TopBarContainer>
          <MainContainer >
            <Main />
          </MainContainer>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </GridLayout>

      </ThemeProvider>
    </>
  );
}

export default App;
