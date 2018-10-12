import React from 'react';
import rerender from 'react-test-renderer';
import { Badge } from './Badge';

describe('Badge', () => {
  it('should render with default styles', () => {
    const badge = rerender.create(<Badge>1</Badge>);
    expect(badge.toJSON()).toMatchSnapshot();
  });
});
