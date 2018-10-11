import React from 'react';
import rerender from 'react-test-renderer';
import { Tooltip } from './Tooltip';
import { Value } from '@vital-ui/react-utils';

describe('Tooltip', () => {
  it('should render with default styles', () => {
    const tooltip = rerender.create(
      <Tooltip placement="left" popup={<div>hi</div>}>
        <button>hover</button>
      </Tooltip>,
    );
    expect(tooltip.toJSON()).toMatchSnapshot();
  });
});
