// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './styles/colors';

type Props = {
  theme?: any,
  children: Node
}

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
  }
  render() {
    return (
      <Provider theme={{...defaultTheme, ...this.props.theme}}>
        {this.props.children}
      </Provider>
    );
  }
}

export default ThemeProvider;
