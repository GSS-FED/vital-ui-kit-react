// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import {
  defaultVariables,
  defaultComponentsTheme,
} from '@vital-ui/react-theme';
import { IconContext, defaultIcon } from '@vital-ui/react-icon';

type Props = {
  theme?: any,
  icon?: any,
  children: Node,
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    icon: {},
  };

  render() {
    const { theme, icon, children } = this.props;
    const combinedTheme = { ...defaultVariables, ...theme };
    const combinedWithComponentTheme = {
      ...combinedTheme,
      ...defaultComponentsTheme(combinedTheme),
    };
    return (
      <Provider theme={combinedWithComponentTheme}>
        <IconContext.Provider value={{ ...defaultIcon, ...icon }}>
          {children}
        </IconContext.Provider>
      </Provider>
    );
  }
}

export default ThemeProvider;
