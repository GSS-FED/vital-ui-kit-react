import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Menu } from '@vital-ui/react-menu/src';
import {
  Umbrella,
  Pen,
  Pin,
  BirthdayCake,
} from '@vital-ui/react-icon';
import { Box } from '@vital-ui/react-utils/src';

storiesOf('Packages | Menu', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Menu')(() => (
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
      )),
    ),
  );
