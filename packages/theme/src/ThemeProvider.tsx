import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import merge from 'lodash.merge';

import defaultVariables from './theme';
import defaultComponentsThemeFn from './theme/components';

type Props<T> = {
  theme?: T;
  children: React.ReactNode;
  componentTheme?: (props: typeof defaultVariables) => any;
};

class ThemeProvider<T> extends React.Component<Props<T>> {
  static defaultProps = {
    theme: {},
  };

  render() {
    const { theme, componentTheme, children } = this.props;
    let combinedTheme = defaultVariables;
    if (theme && Object.keys(theme).length > 0) {
      combinedTheme = combineTheme<T>(defaultVariables, theme);
    }

    const defaultComponentsTheme = defaultComponentsThemeFn(
      combinedTheme,
    );
    const combinedWithComponentTheme = merge(
      combinedTheme,
      defaultComponentsTheme,
      componentTheme && componentTheme(combinedTheme),
    );

    return (
      <Provider theme={combinedWithComponentTheme}>
        {children}
      </Provider>
    );
  }
}

export default ThemeProvider;

export function combineTheme<T>(
  varirables: typeof defaultVariables,
  theme: T,
): T & typeof defaultVariables {
  return {
    ...varirables,
    // @ts-ignore
    ...theme,
  };
}
