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

import { globalStyle } from '@vital-ui/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${globalStyle.linkStyle};
  ${globalStyle.reset};
  ${globalStyle.vitalTypographyStyle};
  ${globalStyle.robotoFontFamily};

  body {
    font-family: 'Roboto', 'Helvetica', 'PingFang TC', 'Arial',
      'sans-serif', 'Microsoft JhengHei', 'Heiti TC';
  }
`;

class App extends PureComponent {
  state = {
    newColor: defaultTheme.colors.primary,
  };

  render() {
    console.log(globalStyle.robotoFontFamily);
    return (
      <ThemeProvider
        theme={{
          ...defaultTheme,
          ...colorPaletteGenerator(this.state.newColor),
        }}
      >
        <React.Fragment>
          <GlobalStyle />
          <Layout>
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
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
