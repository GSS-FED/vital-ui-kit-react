// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './theme';
import IconProvider from '../Icon/components/IconProvider';
import defaultIcon from '../Icon/selection.json';
import defeaultComponentsTheme from './theme/components';

type Props = {
  theme?: any,
  icon?: any,
  children: Node
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    icon: {}
  };

  render() {
    const { theme, icon, children } = this.props;
    const combinedTheme = { ...defaultTheme, ...theme }
    const combinedWithComponentTheme = {...combinedTheme, ...defeaultComponentsTheme(combinedTheme)};
    return (
      <Provider theme={combinedWithComponentTheme}>
        <IconProvider icon={{ ...defaultIcon, ...icon }}>
          {children}
        </IconProvider>
      </Provider>
    );
  }
}

export default ThemeProvider;
