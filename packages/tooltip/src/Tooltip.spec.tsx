import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { Button } from '@vital-ui/react-button/src';

describe('Tooltip', () => {
  it('should render with default styles', () => {
    const tooltip = render(
      <Tooltip placement="left" popup={'hi'} action={['click']}>
        <Button>Click</Button>
      </Tooltip>,
    );

    const button = tooltip.getByText('Click');
    button.click();
    expect(tooltip).toMatchSnapshot();
  });
});
