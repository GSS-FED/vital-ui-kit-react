// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import defaultTheme from './styles/colors';
import IconProvider from '../Icon/components/IconProvider';
import defaultIcon from '../Icon/selection.json';

type Props = {
  theme?: any,
  icon?: any,
  children: Node
}

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    icon: {},
  }
  render() {
    return (
      <Provider theme={{...defaultTheme, ...this.props.theme}}>
        <IconProvider icon={{...defaultIcon, ...this.props.icon}}>
          {this.props.children}
        </IconProvider>
      </Provider>
    );
  }
}

export default ThemeProvider;
