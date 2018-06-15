// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './theme';
import defaultComponentsTheme from './theme/components';

type Props = {
  theme?: any,
  children: Node,
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
  };

  render() {
    const { theme, children } = this.props;
    const combinedTheme = { ...defaultTheme, ...theme };
    const combinedWithComponentTheme = {
      ...combinedTheme,
      ...defaultComponentsTheme(combinedTheme),
    };
    return (
      <Provider theme={combinedWithComponentTheme}>
        {children}
      </Provider>
    );
  }
}

export default ThemeProvider;
