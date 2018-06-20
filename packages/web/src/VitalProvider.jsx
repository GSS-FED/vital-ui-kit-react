// @flow

import React, { type Node } from 'react';
import { ThemeProvider as Provider } from '@vital-ui/react-theme';
import { IconContext, defaultIcon } from '@vital-ui/react-icon';

type Props = {
  theme?: any,
  componentTheme?: (props: any) => any,
  icon?: any,
  children: Node,
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    icon: {},
    componentTheme: undefined,
  };

  render() {
    const { theme, icon, componentTheme, children } = this.props;
    return (
      <Provider theme={theme} componentTheme={componentTheme}>
        <IconContext.Provider value={{ ...defaultIcon, ...icon }}>
          {children}
        </IconContext.Provider>
      </Provider>
    );
  }
}

export default ThemeProvider;
