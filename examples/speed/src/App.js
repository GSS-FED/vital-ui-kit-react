import React, { PureComponent } from 'react';
import { ThemeProvider, Layout } from '@gssfed/vital-ui-kit-react';

import Nav from './components/Layout/Nav';
import Main from './components/Layout/Main';
import Header from './components/Layout/Header';

class App extends PureComponent {
  render() {
    return (
      <ThemeProvider>
        <Layout>
          <Layout.Header>
            <Header />
          </Layout.Header>
          <Layout.Sidebar>
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
