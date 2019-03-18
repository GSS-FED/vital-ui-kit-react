import React from 'react';
import { Button } from './Button';
import { render } from 'react-testing-library';

describe('Button', () => {
  it('should render with default styles', () => {
    const button = render(<Button>button text</Button>);
    expect(button).toMatchSnapshot();
  });
});
