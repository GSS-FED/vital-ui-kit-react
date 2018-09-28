import React from 'react';
import { storiesOf } from '@storybook/react';

import { Flex } from '.';

storiesOf('utils | Flex', module).add('Basic', () => (
  <Flex
    alignItems="center"
    color="white"
    bg="#fedfed"
    height="300px"
    justifyContent="center"
  >
    Flexbox
  </Flex>
));
