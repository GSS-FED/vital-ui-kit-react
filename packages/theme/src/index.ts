import defaultVariables from './theme/default';
import defaultComponentsTheme from './theme/default/components';
import * as globalStyle from './globalStyle';
import { colorPaletteGenerator } from './helper';

const defaultTheme = {
  ...defaultVariables,
  ...defaultComponentsTheme(defaultVariables),
};

export {
  default as ThemeProvider,
  combinedWithComponent,
  combineTheme,
} from './ThemeProvider';
export {
  defaultVariables,
  defaultComponentsTheme,
  defaultTheme,
  globalStyle,
  colorPaletteGenerator,
};
