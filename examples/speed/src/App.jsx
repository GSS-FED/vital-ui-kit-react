import React, { PureComponent } from 'react';
import {
  ThemeProvider,
  colorPaletteGenerator,
  defaultTheme,
} from '@vital-ui/react';

import Layout from './Layout';
import Nav from './components/Layout/Nav';
import Main from './components/Layout/Main';
import Header from './components/Layout/Header';

import { gloablStyle } from '@vital-ui/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${gloablStyle.linkStyle};
  ${gloablStyle.reset};
  ${gloablStyle.vitalTypographyStyle};
  ${gloablStyle.robotoFontFamily};
`;

class App extends PureComponent {
  state = {
    newColor: defaultTheme.colors.primary,
  };

  render() {
    return (
      <ThemeProvider
        theme={{
          ...defaultTheme,
          ...colorPaletteGenerator(this.state.newColor),
        }}
      >
        <Layout>
          <GlobalStyle />
          <Layout.Header>
            <Header
              onChangeColor={color => {
                this.setState({
                  newColor: color,
                });
              }}
            />
          </Layout.Header>
          <Layout.Sidebar style={{ overflow: 'scroll' }}>
            <Nav />
          </Layout.Sidebar>
          <Layout.Content>
            <Main />
          </Layout.Content>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
