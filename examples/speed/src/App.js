import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@gssfed/vital-ui-kit-react';

import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  margin: 0px auto;
  background-color: #f8f8f8;
  max-width: 1440px;
  overflow: hidden;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 5px 10px rgba(13, 13, 13, 0.33);
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 220px;
  transition: width 0.3s ease-in-out;
  z-index: 7;
  background-color: #1E3768;
  overflow: auto;
`;

const MainWrapper = styled.div`
  padding-top: 50px;
  padding-left: 220px;
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 5;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Wrapper>
          <Box>
            <Header />
            <NavWrapper>
              <Nav />
            </NavWrapper>
            <MainWrapper>
              <Main />
            </MainWrapper>
          </Box>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
