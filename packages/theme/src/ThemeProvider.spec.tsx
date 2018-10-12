import { combinedWithComponent, combineTheme } from './ThemeProvider';
import crmTheme from './theme/crm';
import defaultVariables from './theme';
import defaultComponentsThemeFn from './theme/components';
describe('ThemeProvider', () => {
  it('it should return default theme wihtout any input props', () => {
    let combineTheme = defaultVariables;
    const combinedWithComponentTheme = combinedWithComponent(
      combineTheme,
    );

    expect(combinedWithComponentTheme).toMatchSnapshot();
  });
});
