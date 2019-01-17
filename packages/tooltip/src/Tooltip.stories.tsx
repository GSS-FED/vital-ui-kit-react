import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from '.';
import { Flex } from '../../web/src';
// import 'rc-trigger/assets/index.css';

storiesOf('Packages | Tooltip', module).add('Basic', () => (
  <Flex width="500px" justifyContent="center" alignItems="center">
    <Tooltip
      placement="left"
      popup={<div>hi</div>}
      action={['click']}
    >
      <button>hover</button>
    </Tooltip>
  </Flex>
));
