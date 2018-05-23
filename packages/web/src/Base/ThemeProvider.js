// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './styles/theme';
import IconProvider from '../Icon/components/IconProvider';
import defaultIcon from '../Icon/selection.json';

type Props = {
  theme?: {
    primaryList: string[],
    secondaryList: string[],
    blackList: string[],
  },
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
    return (
      <Provider theme={{ ...defaultTheme, ...theme }}>
        <IconProvider icon={{ ...defaultIcon, ...icon }}>
          {children}
        </IconProvider>
      </Provider>
    );
  }
}

export default ThemeProvider;
