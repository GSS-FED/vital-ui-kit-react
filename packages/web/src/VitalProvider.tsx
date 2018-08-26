import React from 'react';
import { ThemeProvider as Provider } from '@vital-ui/react-theme';

type Return = (n: any) => any;

type Props = {
  theme?: object;
  componentTheme?: Return;
  children: React.ReactNode;
};

class ThemeProvider extends React.Component<Props> {
  static defaultProps = {
    theme: {},
    icon: {},
    componentTheme: (n: any) => n,
  };

  render() {
    const { theme, componentTheme, children } = this.props;
    return (
      <Provider theme={theme} componentTheme={componentTheme}>
        {children}
      </Provider>
    );
  }
}

export default ThemeProvider;
