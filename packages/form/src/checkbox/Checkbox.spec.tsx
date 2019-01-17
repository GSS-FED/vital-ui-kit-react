import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from '@vital-ui/react-theme';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('should render with default styles', () => {
    const checkbox = render(<Checkbox label="default" checked />);
    expect(checkbox).toMatchSnapshot();
  });

  it('should render with Custom Theme', () => {
    const checkbox = render(
      <ThemeProvider
        componentTheme={props => ({
          checkbox: {
            label: {
              color: 'red',
            },
          },
        })}
      >
        <Checkbox label="custom" checked />
      </ThemeProvider>,
    );
    expect(checkbox).toMatchSnapshot();
  });

  it('render with round style', () => {
    const checkbox = render(<Checkbox label="round" round />);
    expect(checkbox).toMatchSnapshot();
  });
});
