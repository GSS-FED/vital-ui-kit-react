import defaultVariables from './theme';
import defaultComponentsTheme from './theme/components';
import * as gloablStyle from './globalStyle';
import { colorPaletteGenerator } from './helper';

const defaultTheme = {
  ...defaultVariables,
  ...defaultComponentsTheme(defaultVariables),
};

export { default as ThemeProvider } from './ThemeProvider';
export {
  defaultVariables,
  defaultComponentsTheme,
  defaultTheme,
  gloablStyle,
  colorPaletteGenerator,
};
