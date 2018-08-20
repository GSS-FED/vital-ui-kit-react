import React from 'react';
import { ThemeProvider as Provider } from '@vital-ui/react-theme';
import { IconContext, defaultIcon } from '@vital-ui/react-icon';

type Return = (n: any) => any;

type Props = {
  theme?: object;
  componentTheme?: Return;
  icon?: object;
  children: React.ReactNode;
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    icon: {},
    componentTheme: (n: any) => n,
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
