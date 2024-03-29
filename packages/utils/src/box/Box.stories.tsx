import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from '.';

storiesOf('utils | Box', module).add('Basic', () => (
  <Box
    color="red"
    m="30px"
    p="20px"
    maxWidth="200px"
    width="90%"
    height="500px"
  >
    This is a box!
  </Box>
));
