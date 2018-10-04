import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from '.';
import 'rc-trigger/assets/index.css';

storiesOf('Packages | Tooltip', module).add('Basic', () => (
  <Tooltip popup={<div>hi</div>}>
    <button>hover</button>
  </Tooltip>
));
