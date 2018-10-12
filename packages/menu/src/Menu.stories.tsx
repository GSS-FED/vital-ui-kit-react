import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import { Menu } from '.';
import { Umbrella, Pen, Pin, BirthdayCake } from '../../icon/src';
import { Box } from '../../utils/src';

storiesOf('Packages | Menu', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Menu>
      <Menu.Item>
        <Box mr={10}>
          <Umbrella name="Umbrella" />
          Umbrella
        </Box>
      </Menu.Item>
      <Menu.Item>
        <Box mr={10}>
          <Pen name="Pen" />
          Pen
        </Box>
      </Menu.Item>
      <Menu.Item>
        <Box mr={10}>
          <Pin name="Pin" />
          Pin
        </Box>
      </Menu.Item>
      <Menu.Item>
        <Box mr={10}>
          <BirthdayCake name="BirthdayCake" />
          BirthdayCake
        </Box>
      </Menu.Item>
    </Menu>
  ));
