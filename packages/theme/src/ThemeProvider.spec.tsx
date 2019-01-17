import React from 'react';
import renderer from 'react-test-renderer';
import styled, { withTheme } from 'styled-components';
import defaultVariables from './theme';
import ThemeProvider, {
  combinedWithComponent,
} from './ThemeProvider';

describe('ThemeProvider', () => {
  let combineTheme = defaultVariables;
  const combinedWithComponentTheme = combinedWithComponent(
    combineTheme,
  );
  it('match combine theme with componentTheme', () => {
    expect(combinedWithComponentTheme).toMatchSnapshot();
  });

  it('should return default theme wihtout any input props', () => {
    const MyDiv = styled.div``;
    const MyDivWithTheme = withTheme(MyDiv);
    const wrapper = renderer.create(
      <ThemeProvider>
        <MyDivWithTheme />
      </ThemeProvider>,
    );
    expect(wrapper.root.findByType(MyDiv).props.theme).toEqual(
      combinedWithComponentTheme,
    );
  });
});
