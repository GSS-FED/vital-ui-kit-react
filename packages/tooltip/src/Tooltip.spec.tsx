import React from 'react';
import { render } from 'react-testing-library';
import { Tooltip } from './Tooltip';
import { Button } from '@vital-ui/react-button/src';

describe('Tooltip', () => {
  it('should render with default styles', () => {
    const tooltip = render(
      <Tooltip
        placement="left"
        popup={<div>hi</div>}
        action={['click']}
      >
        <Button>Click</Button>
      </Tooltip>,
    );

    const button = tooltip.getByText('Click');
    button.click();
    expect(tooltip).toMatchSnapshot();
  });
});
