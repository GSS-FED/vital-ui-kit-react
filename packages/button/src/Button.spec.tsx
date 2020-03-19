import React from 'react';
import { Button } from './Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should render with default styles', () => {
    const button = render(<Button>button text</Button>);
    expect(button).toMatchSnapshot();
  });
});
