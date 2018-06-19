import defaultVariables from './theme';
import defaultComponentsTheme from './theme/components';

import { colorPaletteGenerator } from './theme/helper';

export { default as ThemeProvider } from './ThemeProvider';
export { colorPaletteGenerator };

const defaultTheme = {
  ...defaultVariables,
  ...defaultComponentsTheme(defaultVariables),
};

export { defaultVariables, defaultComponentsTheme, defaultTheme };
