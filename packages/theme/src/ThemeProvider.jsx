// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultVariables from './theme';
import defaultComponentsTheme from './theme/components';

type Props = {
  theme?: any,
  children: Node,
  componentTheme?: (props: defaultVariables) => any,
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    componentTheme: undefined,
  };

  render() {
    const { theme, componentTheme, children } = this.props;
    const combinedTheme = { ...defaultVariables, ...theme };
    const complieTheme = componentTheme || defaultComponentsTheme;
    const combinedWithComponentTheme = {
      ...combinedTheme,
      ...complieTheme(combinedTheme),
    };
    return (
      <Provider theme={combinedWithComponentTheme}>
        {children}
      </Provider>
    );
  }
}

export default ThemeProvider;
