// @flow
/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import { ThemeProvider as Provider } from 'styled-components/native';
import defaultTheme from './theme';


type Props = {
  theme?: any,
  children: Node
}

class ThemeProvider extends React.Component<Props> {
  state = {  }
  render() {
    return (
      <Provider theme={{...defaultTheme, ...this.props.theme}}>
        {this.props.children}
      </Provider>
    );
  }
}

export default ThemeProvider;
