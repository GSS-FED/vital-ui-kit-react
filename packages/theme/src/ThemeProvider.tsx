import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import merge from 'lodash.merge';

import defaultVariables from './theme';
import defaultComponentsTheme from './theme/components';

type Props = {
  theme?: any;
  children: Node;
  componentTheme?: (props: typeof defaultVariables) => any;
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    componentTheme: (n: any) => n,
  };

  render() {
    const { theme, componentTheme, children } = this.props;

    const combinedTheme = { ...defaultVariables, ...theme };

    const combinedWithComponentTheme = merge(
      combinedTheme,
      defaultComponentsTheme(combinedTheme),
      componentTheme!(combinedTheme),
    );

    return (
      <Provider theme={combinedWithComponentTheme}>
        {children}
      </Provider>
    );
  }
}

export default ThemeProvider;
