// @flow

import React, { PureComponent } from 'react';
import {
  ThemeProvider,
  Layout,
  colorPaletteGenerator,
  defaultTheme,
} from '@gssfed/vital-ui-kit-react';

import Nav from './components/Layout/Nav';
import Main from './components/Layout/Main';
import Header from './components/Layout/Header';

type State = {
  newColor: string,
};

class App extends PureComponent<void, State> {
  state = {
    newColor: defaultTheme.primary,
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
